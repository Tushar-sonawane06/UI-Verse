from __future__ import annotations

import hashlib
import json
import os
import re
import threading
import sqlite3
from collections import defaultdict
from datetime import datetime, timedelta
from pathlib import Path
from urllib.parse import quote

import pandas as pd
from flask import Flask, jsonify, redirect, request, send_from_directory
from sklearn.compose import ColumnTransformer
from sklearn.ensemble import RandomForestRegressor
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import OneHotEncoder


BASE_DIR = Path(__file__).resolve().parent
PROJECT_ROOT = BASE_DIR.parent
DATA_PATH = BASE_DIR / "data" / "crop_history.csv"
TRACE_DB_PATH = BASE_DIR / "data" / "produce_traceability.sqlite3"
IOT_DB_PATH = BASE_DIR / "data" / "iot_telemetry.sqlite3"
EQUIPMENT_DB_PATH = BASE_DIR / "data" / "equipment_marketplace.sqlite3"
IOT_DEFAULT_THRESHOLD = 32.0
IOT_WORKER_INTERVAL_SECONDS = 60
MARKETPLACE_DEFAULT_PIN = "560001"

PRICE_PER_TON = {
    "Corn": 320,
    "Wheat": 400,
    "Rice": 460,
    "Soybean": 520,
    "Cotton": 610,
}

app = Flask(__name__)


@app.after_request
def add_cors_headers(response):
    response.headers.setdefault("Access-Control-Allow-Origin", "*")
    response.headers.setdefault("Access-Control-Allow-Headers", "Content-Type")
    response.headers.setdefault("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
    return response

FARMERS = [
    (1, "Asha Patel", "Modasa, Gujarat"),
    (2, "Rahul Verma", "Karnal, Haryana"),
    (3, "Meera Nair", "Erode, Tamil Nadu"),
]

CROPS = [
    (1, "Corn", "Sweet Gold"),
    (2, "Wheat", "Durum"),
    (3, "Rice", "Jaya"),
]

BATCH_SEEDS = [
    {
        "id": 101,
        "batch_code": "BATCH-101-ALPHA",
        "farmer_id": 1,
        "crop_id": 1,
        "planting_date": "2026-01-12",
        "harvest_date": "2026-05-04",
        "fertilizer_summary": "Compost, NPK 10-26-26, seaweed extract",
        "acreage": 12.5,
        "batch_notes": "North field block A",
    },
    {
        "id": 102,
        "batch_code": "BATCH-102-BRAVO",
        "farmer_id": 2,
        "crop_id": 2,
        "planting_date": "2026-01-18",
        "harvest_date": "2026-05-16",
        "fertilizer_summary": "Farmyard manure, urea, potassium sulfate",
        "acreage": 18.0,
        "batch_notes": "River belt parcel 7",
    },
    {
        "id": 103,
        "batch_code": "BATCH-103-CHARLIE",
        "farmer_id": 3,
        "crop_id": 3,
        "planting_date": "2026-02-02",
        "harvest_date": "2026-06-01",
        "fertilizer_summary": "Vermicompost, DAP, micronutrient spray",
        "acreage": 20.0,
        "batch_notes": "Lowland paddy zone",
    },
]

LEDGER_EVENTS = [
    ("Planted", 0, "Seeds placed and irrigation activated."),
    ("Fertilized", 18, "Primary fertilizer treatment completed."),
    ("Harvested", 112, "Crop harvested and quality inspected."),
    ("Shipped", 118, "Sealed batch shipped to distribution center."),
]

IOT_SEEDS = [
    {
        "device_id": "ESP32-NORTH-01",
        "farmer_name": "Asha Patel",
        "farm_name": "North Field",
        "soil_moisture": 41.5,
        "temperature": 29.8,
        "humidity": 56.2,
        "nitrogen": 21.0,
        "phosphorus": 18.0,
        "potassium": 24.0,
        "moisture_threshold": 32.0,
        "sample_offset_minutes": 240,
    },
    {
        "device_id": "ESP32-NORTH-01",
        "farmer_name": "Asha Patel",
        "farm_name": "North Field",
        "soil_moisture": 36.8,
        "temperature": 30.4,
        "humidity": 53.5,
        "nitrogen": 20.2,
        "phosphorus": 17.6,
        "potassium": 23.4,
        "moisture_threshold": 32.0,
        "sample_offset_minutes": 180,
    },
    {
        "device_id": "ESP32-NORTH-01",
        "farmer_name": "Asha Patel",
        "farm_name": "North Field",
        "soil_moisture": 28.9,
        "temperature": 31.7,
        "humidity": 48.9,
        "nitrogen": 19.5,
        "phosphorus": 16.8,
        "potassium": 22.1,
        "moisture_threshold": 32.0,
        "sample_offset_minutes": 120,
    },
    {
        "device_id": "ESP32-SOUTH-07",
        "farmer_name": "Rahul Verma",
        "farm_name": "South Orchard",
        "soil_moisture": 45.7,
        "temperature": 27.9,
        "humidity": 61.8,
        "nitrogen": 22.4,
        "phosphorus": 19.0,
        "potassium": 25.7,
        "moisture_threshold": 30.0,
        "sample_offset_minutes": 210,
    },
    {
        "device_id": "ESP32-SOUTH-07",
        "farmer_name": "Rahul Verma",
        "farm_name": "South Orchard",
        "soil_moisture": 39.3,
        "temperature": 28.6,
        "humidity": 58.0,
        "nitrogen": 21.8,
        "phosphorus": 18.8,
        "potassium": 24.9,
        "moisture_threshold": 30.0,
        "sample_offset_minutes": 150,
    },
    {
        "device_id": "ESP32-SOUTH-07",
        "farmer_name": "Rahul Verma",
        "farm_name": "South Orchard",
        "soil_moisture": 27.4,
        "temperature": 30.1,
        "humidity": 51.1,
        "nitrogen": 18.9,
        "phosphorus": 16.7,
        "potassium": 21.6,
        "moisture_threshold": 30.0,
        "sample_offset_minutes": 60,
    },
]

EQUIPMENT_SEEDS = [
    {
        "id": 1,
        "name": "Compact Tractor 45HP",
        "description": "Fuel-efficient tractor for plowing, hauling, and row-crop work.",
        "daily_rate": 180,
        "owner_id": "FARM-001",
        "owner_name": "Asha Patel",
        "status": "available",
        "pin_code": "560001",
        "photo_data_url": None,
    },
    {
        "id": 2,
        "name": "Rotavator Pro 120",
        "description": "Heavy-duty rotavator for soil preparation and seed bed finishing.",
        "daily_rate": 120,
        "owner_id": "FARM-002",
        "owner_name": "Rahul Verma",
        "status": "available",
        "pin_code": "560002",
        "photo_data_url": None,
    },
    {
        "id": 3,
        "name": "Self-Propelled Sprayer",
        "description": "Precision sprayer for fertilizer and crop protection applications.",
        "daily_rate": 150,
        "owner_id": "FARM-003",
        "owner_name": "Meera Nair",
        "status": "available",
        "pin_code": "560001",
        "photo_data_url": None,
    },
    {
        "id": 4,
        "name": "Mini Combine Harvester",
        "description": "Suitable for small and mid-size grain harvest operations.",
        "daily_rate": 260,
        "owner_id": "FARM-004",
        "owner_name": "Sanjay Singh",
        "status": "available",
        "pin_code": "560010",
        "photo_data_url": None,
    },
]


def load_model() -> Pipeline:
    data = pd.read_csv(DATA_PATH)
    features = ["acreage", "seed_cost", "fertilizer_cost", "budget", "soil_type", "target_crop"]
    target = "historical_yield_tons"

    preprocessor = ColumnTransformer(
        transformers=[
            (
                "categorical",
                OneHotEncoder(handle_unknown="ignore", sparse_output=False),
                ["soil_type", "target_crop"],
            ),
        ],
        remainder="passthrough",
    )

    model = RandomForestRegressor(n_estimators=200, random_state=42)
    pipeline = Pipeline([
        ("preprocessor", preprocessor),
        ("model", model),
    ])
    pipeline.fit(data[features], data[target])
    return pipeline


MODEL = load_model()


def get_traceability_connection() -> sqlite3.Connection:
    connection = sqlite3.connect(TRACE_DB_PATH)
    connection.row_factory = sqlite3.Row
    connection.execute("PRAGMA foreign_keys = ON")
    return connection


def get_iot_connection() -> sqlite3.Connection:
    connection = sqlite3.connect(IOT_DB_PATH)
    connection.row_factory = sqlite3.Row
    connection.execute("PRAGMA foreign_keys = ON")
    return connection


def get_equipment_connection() -> sqlite3.Connection:
    connection = sqlite3.connect(EQUIPMENT_DB_PATH)
    connection.row_factory = sqlite3.Row
    connection.execute("PRAGMA foreign_keys = ON")
    return connection


def compute_event_hash(batch_id: int, event_type: str, event_date: str, details: str, previous_hash: str) -> str:
    payload = f"{batch_id}|{event_type}|{event_date}|{details}|{previous_hash}"
    return hashlib.sha256(payload.encode("utf-8")).hexdigest()


def ensure_traceability_db() -> None:
    TRACE_DB_PATH.parent.mkdir(parents=True, exist_ok=True)

    with get_traceability_connection() as connection:
        connection.executescript(
            """
            CREATE TABLE IF NOT EXISTS farmers (
                id INTEGER PRIMARY KEY,
                name TEXT NOT NULL,
                location TEXT NOT NULL
            );

            CREATE TABLE IF NOT EXISTS crops (
                id INTEGER PRIMARY KEY,
                name TEXT NOT NULL,
                variety TEXT NOT NULL
            );

            CREATE TABLE IF NOT EXISTS batches (
                id INTEGER PRIMARY KEY,
                batch_code TEXT NOT NULL UNIQUE,
                farmer_id INTEGER NOT NULL,
                crop_id INTEGER NOT NULL,
                planting_date TEXT NOT NULL,
                harvest_date TEXT NOT NULL,
                fertilizer_summary TEXT NOT NULL,
                acreage REAL NOT NULL,
                batch_notes TEXT,
                created_at TEXT NOT NULL,
                FOREIGN KEY (farmer_id) REFERENCES farmers(id),
                FOREIGN KEY (crop_id) REFERENCES crops(id)
            );

            CREATE TABLE IF NOT EXISTS ledger_events (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                batch_id INTEGER NOT NULL,
                event_type TEXT NOT NULL,
                event_date TEXT NOT NULL,
                details TEXT NOT NULL,
                previous_hash TEXT NOT NULL,
                event_hash TEXT NOT NULL,
                created_at TEXT NOT NULL,
                FOREIGN KEY (batch_id) REFERENCES batches(id)
            );
            """
        )

        if connection.execute("SELECT COUNT(*) FROM batches").fetchone()[0]:
            return

        connection.executemany("INSERT INTO farmers (id, name, location) VALUES (?, ?, ?)", FARMERS)
        connection.executemany("INSERT INTO crops (id, name, variety) VALUES (?, ?, ?)", CROPS)

        for batch in BATCH_SEEDS:
            created_at = datetime.utcnow().isoformat(timespec="seconds") + "Z"
            connection.execute(
                """
                INSERT INTO batches (
                    id, batch_code, farmer_id, crop_id, planting_date, harvest_date,
                    fertilizer_summary, acreage, batch_notes, created_at
                ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
                """,
                (
                    batch["id"],
                    batch["batch_code"],
                    batch["farmer_id"],
                    batch["crop_id"],
                    batch["planting_date"],
                    batch["harvest_date"],
                    batch["fertilizer_summary"],
                    batch["acreage"],
                    batch["batch_notes"],
                    created_at,
                ),
            )

            previous_hash = "GENESIS"
            planting_date = datetime.fromisoformat(batch["planting_date"])
            harvest_date = datetime.fromisoformat(batch["harvest_date"])
            timeline = [
                (event_type, planting_date + timedelta(days=offset), details)
                for event_type, offset, details in LEDGER_EVENTS
            ]

            for event_type, event_date, details in timeline:
                event_date_iso = event_date.date().isoformat()
                event_hash = compute_event_hash(batch["id"], event_type, event_date_iso, details, previous_hash)
                connection.execute(
                    """
                    INSERT INTO ledger_events (
                        batch_id, event_type, event_date, details, previous_hash, event_hash, created_at
                    ) VALUES (?, ?, ?, ?, ?, ?, ?)
                    """,
                    (
                        batch["id"],
                        event_type,
                        event_date_iso,
                        details,
                        previous_hash,
                        event_hash,
                        created_at,
                    ),
                )
                previous_hash = event_hash


def ensure_iot_db() -> None:
    IOT_DB_PATH.parent.mkdir(parents=True, exist_ok=True)

    with get_iot_connection() as connection:
        connection.executescript(
            """
            CREATE TABLE IF NOT EXISTS iot_telemetry (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                device_id TEXT NOT NULL,
                farmer_name TEXT NOT NULL,
                farm_name TEXT NOT NULL,
                soil_moisture REAL NOT NULL,
                temperature REAL NOT NULL,
                humidity REAL NOT NULL,
                nitrogen REAL,
                phosphorus REAL,
                potassium REAL,
                moisture_threshold REAL NOT NULL,
                recorded_at TEXT NOT NULL
            );

            CREATE TABLE IF NOT EXISTS iot_alerts (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                telemetry_id INTEGER NOT NULL,
                device_id TEXT NOT NULL,
                farmer_name TEXT NOT NULL,
                farm_name TEXT NOT NULL,
                alert_type TEXT NOT NULL,
                severity TEXT NOT NULL,
                message TEXT NOT NULL,
                channel TEXT NOT NULL,
                created_at TEXT NOT NULL,
                FOREIGN KEY (telemetry_id) REFERENCES iot_telemetry(id),
                UNIQUE (telemetry_id, alert_type)
            );

            CREATE TABLE IF NOT EXISTS platform_notifications (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                source_type TEXT NOT NULL,
                notification_type TEXT NOT NULL,
                recipient TEXT NOT NULL,
                title TEXT NOT NULL,
                message TEXT NOT NULL,
                severity TEXT NOT NULL,
                related_url TEXT,
                metadata_json TEXT,
                created_at TEXT NOT NULL,
                read_at TEXT
            );
            """
        )

        if connection.execute("SELECT COUNT(*) FROM iot_telemetry").fetchone()[0]:
            return

        now = datetime.utcnow()
        for sample in IOT_SEEDS:
            record_iot_telemetry(
                connection,
                sample,
                recorded_at=(now - timedelta(minutes=sample["sample_offset_minutes"])).isoformat(timespec="seconds") + "Z",
                create_alerts=False,
            )

        scan_iot_alerts(connection)


def make_placeholder_photo(label: str, accent: str) -> str:
    safe_label = label.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")
    svg = f"""
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 500' role='img' aria-label='{safe_label}'>
      <defs>
        <linearGradient id='g' x1='0%' y1='0%' x2='100%' y2='100%'>
          <stop offset='0%' stop-color='{accent}'/>
          <stop offset='100%' stop-color='#143c2b'/>
        </linearGradient>
      </defs>
      <rect width='800' height='500' rx='36' fill='url(#g)'/>
      <circle cx='640' cy='110' r='110' fill='rgba(255,255,255,0.12)'/>
      <circle cx='120' cy='390' r='150' fill='rgba(255,255,255,0.08)'/>
      <text x='50%' y='48%' text-anchor='middle' fill='white' font-family='Manrope, Arial, sans-serif' font-size='48' font-weight='800'>{safe_label}</text>
      <text x='50%' y='58%' text-anchor='middle' fill='rgba(255,255,255,0.78)' font-family='Manrope, Arial, sans-serif' font-size='22' font-weight='600'>Available for nearby farm rental</text>
    </svg>
    """.strip()
    encoded = quote(svg)
    return f"data:image/svg+xml;charset=utf-8,{encoded}"


def ensure_equipment_db() -> None:
    EQUIPMENT_DB_PATH.parent.mkdir(parents=True, exist_ok=True)

    with get_equipment_connection() as connection:
        connection.executescript(
            """
            CREATE TABLE IF NOT EXISTS equipment (
                id INTEGER PRIMARY KEY,
                name TEXT NOT NULL,
                description TEXT NOT NULL,
                daily_rate REAL NOT NULL,
                owner_id TEXT NOT NULL,
                owner_name TEXT NOT NULL,
                status TEXT NOT NULL,
                pin_code TEXT NOT NULL,
                photo_data_url TEXT,
                created_at TEXT NOT NULL
            );

            CREATE TABLE IF NOT EXISTS rental_bookings (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                equipment_id INTEGER NOT NULL,
                renter_id TEXT NOT NULL,
                renter_name TEXT NOT NULL,
                start_date TEXT NOT NULL,
                end_date TEXT NOT NULL,
                total_cost REAL NOT NULL,
                created_at TEXT NOT NULL,
                FOREIGN KEY (equipment_id) REFERENCES equipment(id)
            );

            CREATE TABLE IF NOT EXISTS platform_notifications (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                source_type TEXT NOT NULL,
                notification_type TEXT NOT NULL,
                recipient TEXT NOT NULL,
                title TEXT NOT NULL,
                message TEXT NOT NULL,
                severity TEXT NOT NULL,
                related_url TEXT,
                metadata_json TEXT,
                created_at TEXT NOT NULL,
                read_at TEXT
            );

            """
        )

        if connection.execute("SELECT COUNT(*) FROM equipment").fetchone()[0]:
            return

        created_at = datetime.utcnow().isoformat(timespec="seconds") + "Z"
        seed_rows = []
        for equipment in EQUIPMENT_SEEDS:
            accent = "#2f6f9f" if equipment["id"] % 2 else "#226b47"
            seed_rows.append(
                (
                    equipment["id"],
                    equipment["name"],
                    equipment["description"],
                    equipment["daily_rate"],
                    equipment["owner_id"],
                    equipment["owner_name"],
                    equipment["status"],
                    equipment["pin_code"],
                    equipment["photo_data_url"] or make_placeholder_photo(equipment["name"], accent),
                    created_at,
                )
            )

        connection.executemany(
            """
            INSERT INTO equipment (
                id, name, description, daily_rate, owner_id, owner_name,
                status, pin_code, photo_data_url, created_at
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            """,
            seed_rows,
        )


def record_platform_notification(
    connection: sqlite3.Connection,
    *,
    source_type: str,
    notification_type: str,
    recipient: str,
    title: str,
    message: str,
    severity: str = "medium",
    related_url: str | None = None,
    metadata: dict[str, object] | None = None,
) -> int:
    cursor = connection.execute(
        """
        INSERT INTO platform_notifications (
            source_type, notification_type, recipient, title, message,
            severity, related_url, metadata_json, created_at
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
        """,
        (
            source_type,
            notification_type,
            recipient,
            title,
            message,
            severity,
            related_url,
            json.dumps(metadata or {}),
            datetime.utcnow().isoformat(timespec="seconds") + "Z",
        ),
    )
    return int(cursor.lastrowid)


def get_platform_notifications(source_type: str | None = None, limit: int = 50) -> list[dict[str, object]]:
    rows: list[dict[str, object]] = []

    def fetch_from_db(connection: sqlite3.Connection, db_label: str) -> None:
        if source_type:
            query_rows = connection.execute(
                """
                SELECT *
                FROM platform_notifications
                WHERE source_type = ?
                ORDER BY created_at DESC, id DESC
                LIMIT ?
                """,
                (source_type, limit),
            ).fetchall()
        else:
            query_rows = connection.execute(
                """
                SELECT *
                FROM platform_notifications
                ORDER BY created_at DESC, id DESC
                LIMIT ?
                """,
                (limit,),
            ).fetchall()

        for row in query_rows:
            rows.append(
                {
                    "id": f"{db_label}:{row['id']}",
                    "source_type": row["source_type"],
                    "notification_type": row["notification_type"],
                    "recipient": row["recipient"],
                    "title": row["title"],
                    "message": row["message"],
                    "severity": row["severity"],
                    "related_url": row["related_url"],
                    "metadata": json.loads(row["metadata_json"] or "{}"),
                    "created_at": row["created_at"],
                }
            )

    with get_iot_connection() as iot_connection, get_equipment_connection() as equipment_connection:
        fetch_from_db(iot_connection, "iot")
        fetch_from_db(equipment_connection, "equipment")

    rows.sort(key=lambda item: str(item["created_at"]), reverse=True)
    return rows[:limit]


def get_equipment_record(equipment_id: int) -> sqlite3.Row | None:
    with get_equipment_connection() as connection:
        return connection.execute(
            "SELECT * FROM equipment WHERE id = ?",
            (equipment_id,),
        ).fetchone()


def get_equipment_bookings(equipment_id: int) -> list[dict[str, object]]:
    with get_equipment_connection() as connection:
        rows = connection.execute(
            """
            SELECT id, equipment_id, renter_id, renter_name, start_date, end_date, total_cost, created_at
            FROM rental_bookings
            WHERE equipment_id = ?
            ORDER BY start_date ASC, id ASC
            """,
            (equipment_id,),
        ).fetchall()

    return [
        {
            "id": row["id"],
            "equipment_id": row["equipment_id"],
            "renter_id": row["renter_id"],
            "renter_name": row["renter_name"],
            "start_date": row["start_date"],
            "end_date": row["end_date"],
            "total_cost": row["total_cost"],
            "created_at": row["created_at"],
        }
        for row in rows
    ]


def equipment_is_available(connection: sqlite3.Connection, equipment_id: int, start_date: str, end_date: str) -> bool:
    rows = connection.execute(
        """
        SELECT 1
        FROM rental_bookings
        WHERE equipment_id = ?
          AND NOT (end_date < ? OR start_date > ?)
        LIMIT 1
        """,
        (equipment_id, start_date, end_date),
    ).fetchone()
    return rows is None


def format_equipment_row(row: sqlite3.Row) -> dict[str, object]:
    return {
        "id": row["id"],
        "name": row["name"],
        "description": row["description"],
        "daily_rate": row["daily_rate"],
        "owner_id": row["owner_id"],
        "owner_name": row["owner_name"],
        "status": row["status"],
        "pin_code": row["pin_code"],
        "photo_data_url": row["photo_data_url"],
        "created_at": row["created_at"],
    }


def list_equipment_records(query: str | None = None, pin_code: str | None = None, status: str = "available") -> list[dict[str, object]]:
    filters = ["1 = 1"]
    parameters: list[object] = []

    if status:
        filters.append("status = ?")
        parameters.append(status)

    if query:
        filters.append("(name LIKE ? OR description LIKE ? OR owner_name LIKE ?)")
        needle = f"%{query.strip()}%"
        parameters.extend([needle, needle, needle])

    if pin_code:
        filters.append("(pin_code = ? OR substr(pin_code, 1, 3) = substr(?, 1, 3))")
        parameters.extend([pin_code, pin_code])

    order_case = "CASE WHEN pin_code = ? THEN 0 WHEN substr(pin_code, 1, 3) = substr(?, 1, 3) THEN 1 ELSE 2 END, created_at DESC"
    order_parameters = [pin_code or MARKETPLACE_DEFAULT_PIN, pin_code or MARKETPLACE_DEFAULT_PIN]

    with get_equipment_connection() as connection:
        rows = connection.execute(
            f"""
            SELECT *
            FROM equipment
            WHERE {' AND '.join(filters)}
            ORDER BY {order_case}
            """,
            parameters + order_parameters,
        ).fetchall()

    return [format_equipment_row(row) for row in rows]


def get_equipment_detail(equipment_id: int) -> dict[str, object] | None:
    with get_equipment_connection() as connection:
        row = connection.execute(
            "SELECT * FROM equipment WHERE id = ?",
            (equipment_id,),
        ).fetchone()

        if row is None:
            return None

        bookings = connection.execute(
            """
            SELECT id, equipment_id, renter_id, renter_name, start_date, end_date, total_cost, created_at
            FROM rental_bookings
            WHERE equipment_id = ?
            ORDER BY start_date ASC, id ASC
            """,
            (equipment_id,),
        ).fetchall()

    equipment = format_equipment_row(row)
    equipment["bookings"] = [
        {
            "id": booking["id"],
            "equipment_id": booking["equipment_id"],
            "renter_id": booking["renter_id"],
            "renter_name": booking["renter_name"],
            "start_date": booking["start_date"],
            "end_date": booking["end_date"],
            "total_cost": booking["total_cost"],
            "created_at": booking["created_at"],
        }
        for booking in bookings
    ]
    return equipment


def seed_equipment_notification_target(equipment: sqlite3.Row | dict[str, object]) -> tuple[str, str]:
    owner_name = equipment["owner_name"] if isinstance(equipment, sqlite3.Row) else equipment["owner_name"]
    owner_id = equipment["owner_id"] if isinstance(equipment, sqlite3.Row) else equipment["owner_id"]
    return str(owner_name), str(owner_id)


def record_iot_telemetry(
    connection: sqlite3.Connection,
    payload: dict[str, object],
    *,
    recorded_at: str | None = None,
    create_alerts: bool = True,
) -> dict[str, object]:
    timestamp = recorded_at or datetime.utcnow().isoformat(timespec="seconds") + "Z"

    def optional_float(value: object) -> float | None:
        if value in (None, ""):
            return None
        return float(value)

    cursor = connection.execute(
        """
        INSERT INTO iot_telemetry (
            device_id, farmer_name, farm_name, soil_moisture, temperature, humidity,
            nitrogen, phosphorus, potassium, moisture_threshold, recorded_at
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        """,
        (
            str(payload["device_id"]),
            str(payload["farmer_name"]),
            str(payload["farm_name"]),
            float(payload["soil_moisture"]),
            float(payload["temperature"]),
            float(payload["humidity"]),
            optional_float(payload.get("nitrogen")),
            optional_float(payload.get("phosphorus")),
            optional_float(payload.get("potassium")),
            float(payload.get("moisture_threshold", IOT_DEFAULT_THRESHOLD)),
            timestamp,
        ),
    )
    telemetry_id = cursor.lastrowid

    if create_alerts:
        scan_iot_alerts(connection, telemetry_id=telemetry_id)

    return {
        "id": telemetry_id,
        "recorded_at": timestamp,
    }


def build_iot_alert_message(row: sqlite3.Row) -> tuple[str, str, str, str]:
    moisture = float(row["soil_moisture"])
    threshold = float(row["moisture_threshold"])
    deficit = threshold - moisture
    message = (
        f"Soil moisture is {moisture:.1f}% on {row['farm_name']} ({row['device_id']}). "
        f"Irrigation recommended to recover the {deficit:.1f}% deficit."
    )
    return message, "high", "irrigation", "notification"


def scan_iot_alerts(
    connection: sqlite3.Connection | None = None,
    *,
    telemetry_id: int | None = None,
) -> int:
    close_connection = False
    if connection is None:
        connection = get_iot_connection()
        close_connection = True

    try:
        if telemetry_id is not None:
            rows = connection.execute(
                """
                SELECT * FROM iot_telemetry
                WHERE id = ? AND soil_moisture < moisture_threshold
                """,
                (telemetry_id,),
            ).fetchall()
        else:
            rows = connection.execute(
                """
                SELECT t.*
                FROM iot_telemetry t
                LEFT JOIN iot_alerts a
                  ON a.telemetry_id = t.id AND a.alert_type = 'irrigation'
                WHERE t.soil_moisture < t.moisture_threshold AND a.id IS NULL
                ORDER BY t.recorded_at DESC
                """
            ).fetchall()

        created = 0
        for row in rows:
            existing = connection.execute(
                "SELECT 1 FROM iot_alerts WHERE telemetry_id = ? AND alert_type = 'irrigation'",
                (row["id"],),
            ).fetchone()
            if existing:
                continue

            message, severity, alert_type, channel = build_iot_alert_message(row)
            connection.execute(
                """
                INSERT INTO iot_alerts (
                    telemetry_id, device_id, farmer_name, farm_name, alert_type,
                    severity, message, channel, created_at
                ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
                """,
                (
                    row["id"],
                    row["device_id"],
                    row["farmer_name"],
                    row["farm_name"],
                    alert_type,
                    severity,
                    message,
                    channel,
                    datetime.utcnow().isoformat(timespec="seconds") + "Z",
                ),
            )
            record_platform_notification(
                connection,
                source_type="iot",
                notification_type="irrigation",
                recipient=row["farmer_name"],
                title="Irrigation needed",
                message=message,
                severity=severity,
                related_url="/notifications.html",
                metadata={
                    "device_id": row["device_id"],
                    "farm_name": row["farm_name"],
                    "soil_moisture": row["soil_moisture"],
                    "threshold": row["moisture_threshold"],
                },
            )
            created += 1

        if created:
            connection.commit()
        return created
    finally:
        if close_connection:
            connection.close()


def get_iot_devices() -> list[dict[str, object]]:
    with get_iot_connection() as connection:
        rows = connection.execute(
            """
            SELECT device_id, farmer_name, farm_name, MAX(recorded_at) AS latest_recorded_at
            FROM iot_telemetry
            GROUP BY device_id, farmer_name, farm_name
            ORDER BY latest_recorded_at DESC
            """
        ).fetchall()

    return [
        {
            "device_id": row["device_id"],
            "farmer_name": row["farmer_name"],
            "farm_name": row["farm_name"],
            "latest_recorded_at": row["latest_recorded_at"],
        }
        for row in rows
    ]


def get_latest_device_id() -> str | None:
    devices = get_iot_devices()
    return devices[0]["device_id"] if devices else None


def get_device_telemetry(device_id: str | None, limit: int = 12) -> dict[str, object] | None:
    if not device_id:
        device_id = get_latest_device_id()
        if not device_id:
            return None

    with get_iot_connection() as connection:
        device = connection.execute(
            """
            SELECT device_id, farmer_name, farm_name, moisture_threshold, MAX(recorded_at) AS latest_recorded_at
            FROM iot_telemetry
            WHERE device_id = ?
            GROUP BY device_id, farmer_name, farm_name, moisture_threshold
            """,
            (device_id,),
        ).fetchone()

        if device is None:
            return None

        rows = connection.execute(
            """
            SELECT id, device_id, farmer_name, farm_name, soil_moisture, temperature, humidity,
                   nitrogen, phosphorus, potassium, moisture_threshold, recorded_at
            FROM iot_telemetry
            WHERE device_id = ?
            ORDER BY recorded_at DESC, id DESC
            LIMIT ?
            """,
            (device_id, limit),
        ).fetchall()

        alerts = connection.execute(
            """
            SELECT telemetry_id, device_id, farmer_name, farm_name, alert_type, severity,
                   message, channel, created_at
            FROM iot_alerts
            WHERE device_id = ?
            ORDER BY created_at DESC, id DESC
            LIMIT 10
            """,
            (device_id,),
        ).fetchall()

    history = [
        {
            "id": row["id"],
            "recorded_at": row["recorded_at"],
            "soil_moisture": row["soil_moisture"],
            "temperature": row["temperature"],
            "humidity": row["humidity"],
            "nitrogen": row["nitrogen"],
            "phosphorus": row["phosphorus"],
            "potassium": row["potassium"],
            "moisture_threshold": row["moisture_threshold"],
        }
        for row in rows
    ][::-1]

    current = history[-1] if history else None
    irrigation_needed = bool(current and current["soil_moisture"] < current["moisture_threshold"])
    fertilizer_needed = bool(
        current and min(
            float(current["nitrogen"] or 0),
            float(current["phosphorus"] or 0),
            float(current["potassium"] or 0),
        ) < 18
    )

    return {
        "device": {
            "device_id": device["device_id"],
            "farmer_name": device["farmer_name"],
            "farm_name": device["farm_name"],
            "moisture_threshold": device["moisture_threshold"],
            "latest_recorded_at": device["latest_recorded_at"],
        },
        "current": current,
        "history": history,
        "alerts": [
            {
                "telemetry_id": row["telemetry_id"],
                "device_id": row["device_id"],
                "farmer_name": row["farmer_name"],
                "farm_name": row["farm_name"],
                "alert_type": row["alert_type"],
                "severity": row["severity"],
                "message": row["message"],
                "channel": row["channel"],
                "created_at": row["created_at"],
            }
            for row in alerts
        ],
        "recommendations": {
            "irrigation_needed": irrigation_needed,
            "fertilizer_needed": fertilizer_needed,
            "fertilizer_hint": "NPK levels are trending low; schedule a nutrient check." if fertilizer_needed else "NPK levels are in a healthy range.",
        },
    }


def iot_alert_worker_loop(interval_seconds: int = IOT_WORKER_INTERVAL_SECONDS) -> None:
    while True:
        scan_iot_alerts()
        threading.Event().wait(interval_seconds)


def start_iot_alert_worker(interval_seconds: int = IOT_WORKER_INTERVAL_SECONDS) -> threading.Thread:
    worker = threading.Thread(target=iot_alert_worker_loop, kwargs={"interval_seconds": interval_seconds}, daemon=True)
    worker.start()
    return worker


def fetch_batch_detail(batch_id: int) -> dict[str, object] | None:
    with get_traceability_connection() as connection:
        batch = connection.execute(
            """
            SELECT
                b.id,
                b.batch_code,
                b.planting_date,
                b.harvest_date,
                b.fertilizer_summary,
                b.acreage,
                b.batch_notes,
                b.created_at,
                f.name AS farmer_name,
                f.location AS farmer_location,
                c.name AS crop_name,
                c.variety AS crop_variety
            FROM batches b
            JOIN farmers f ON f.id = b.farmer_id
            JOIN crops c ON c.id = b.crop_id
            WHERE b.id = ?
            """,
            (batch_id,),
        ).fetchone()

        if batch is None:
            return None

        events = connection.execute(
            """
            SELECT event_type, event_date, details, previous_hash, event_hash
            FROM ledger_events
            WHERE batch_id = ?
            ORDER BY id ASC
            """,
            (batch_id,),
        ).fetchall()

    trace_url = f"/verify-produce?batch_id={batch_id}"
    return {
        "batch": {
            "id": batch["id"],
            "batch_code": batch["batch_code"],
            "planting_date": batch["planting_date"],
            "harvest_date": batch["harvest_date"],
            "fertilizer_summary": batch["fertilizer_summary"],
            "acreage": batch["acreage"],
            "batch_notes": batch["batch_notes"],
            "created_at": batch["created_at"],
            "farmer": {
                "name": batch["farmer_name"],
                "location": batch["farmer_location"],
            },
            "crop": {
                "name": batch["crop_name"],
                "variety": batch["crop_variety"],
            },
            "trace_url": trace_url,
        },
        "events": [
            {
                "event_type": event["event_type"],
                "event_date": event["event_date"],
                "details": event["details"],
                "previous_hash": event["previous_hash"],
                "event_hash": event["event_hash"],
            }
            for event in events
        ],
    }


ensure_traceability_db()
ensure_iot_db()
ensure_equipment_db()


@app.get("/health")
def health() -> tuple[dict[str, str], int]:
    return {"status": "ok"}, 200


@app.post("/predict_roi")
def predict_roi() -> tuple[dict[str, object], int]:
    payload = request.get_json(silent=True) or {}

    try:
        acreage = float(payload["acreage"])
        seed_cost = float(payload["seed_cost"])
        fertilizer_cost = float(payload["fertilizer_cost"])
        budget = float(payload["budget"])
        soil_type = str(payload["soil_type"])
        target_crop = str(payload["target_crop"])
    except (KeyError, TypeError, ValueError):
        return jsonify({"error": "Invalid forecast payload."}), 400

    if acreage <= 0 or seed_cost < 0 or fertilizer_cost < 0 or budget < 0:
        return jsonify({"error": "Input values must be positive."}), 400

    frame = pd.DataFrame([
        {
            "acreage": acreage,
            "seed_cost": seed_cost,
            "fertilizer_cost": fertilizer_cost,
            "budget": budget,
            "soil_type": soil_type,
            "target_crop": target_crop,
        }
    ])

    predicted_yield = float(MODEL.predict(frame)[0])
    crop_price = PRICE_PER_TON.get(target_crop, 380)
    projected_revenue = predicted_yield * crop_price
    total_costs = seed_cost + fertilizer_cost
    expected_profit = projected_revenue - total_costs
    roi_percent = (expected_profit / total_costs * 100) if total_costs else 0.0

    return jsonify(
        {
            "predicted_yield_tons": round(predicted_yield, 2),
            "projected_revenue": round(projected_revenue, 2),
            "total_costs": round(total_costs, 2),
            "expected_profit": round(expected_profit, 2),
            "roi_percent": round(roi_percent, 2),
            "budget_gap": round(budget - total_costs, 2),
            "crop_price_per_ton": crop_price,
        }
    ), 200


@app.get("/api/produce/batches")
def list_produce_batches() -> tuple[dict[str, object], int]:
    with get_traceability_connection() as connection:
        batches = connection.execute(
            """
            SELECT b.id, b.batch_code, b.planting_date, b.harvest_date, b.acreage,
                   f.name AS farmer_name, c.name AS crop_name
            FROM batches b
            JOIN farmers f ON f.id = b.farmer_id
            JOIN crops c ON c.id = b.crop_id
            ORDER BY b.id ASC
            """
        ).fetchall()

    return jsonify(
        {
            "batches": [
                {
                    "id": batch["id"],
                    "batch_code": batch["batch_code"],
                    "planting_date": batch["planting_date"],
                    "harvest_date": batch["harvest_date"],
                    "acreage": batch["acreage"],
                    "farmer_name": batch["farmer_name"],
                    "crop_name": batch["crop_name"],
                    "verify_url": f"/verify-produce?batch_id={batch['id']}",
                }
                for batch in batches
            ]
        }
    ), 200


@app.get("/api/produce/batches/<int:batch_id>")
def get_produce_batch(batch_id: int) -> tuple[dict[str, object], int]:
    detail = fetch_batch_detail(batch_id)
    if detail is None:
        return jsonify({"error": "Batch not found."}), 404
    return jsonify(detail), 200


@app.post("/api/iot/telemetry")
def ingest_iot_telemetry() -> tuple[dict[str, object], int]:
    payload = request.get_json(silent=True) or {}
    required_fields = ["device_id", "farmer_name", "farm_name", "soil_moisture", "temperature", "humidity"]

    missing_fields = [field for field in required_fields if field not in payload]
    if missing_fields:
        return jsonify({"error": "Missing telemetry fields.", "missing_fields": missing_fields}), 400

    try:
        telemetry_payload = {
            "device_id": str(payload["device_id"]),
            "farmer_name": str(payload["farmer_name"]),
            "farm_name": str(payload["farm_name"]),
            "soil_moisture": float(payload["soil_moisture"]),
            "temperature": float(payload["temperature"]),
            "humidity": float(payload["humidity"]),
            "nitrogen": float(payload["nitrogen"]) if payload.get("nitrogen") is not None else None,
            "phosphorus": float(payload["phosphorus"]) if payload.get("phosphorus") is not None else None,
            "potassium": float(payload["potassium"]) if payload.get("potassium") is not None else None,
            "moisture_threshold": float(payload.get("moisture_threshold", IOT_DEFAULT_THRESHOLD)),
        }
    except (TypeError, ValueError):
        return jsonify({"error": "Telemetry values must be numeric where expected."}), 400

    if telemetry_payload["soil_moisture"] < 0 or telemetry_payload["humidity"] < 0:
        return jsonify({"error": "Moisture and humidity must be non-negative."}), 400

    with get_iot_connection() as connection:
        stored = record_iot_telemetry(connection, telemetry_payload, create_alerts=False)
        created_alerts = scan_iot_alerts(connection, telemetry_id=stored["id"])

    dashboard = get_device_telemetry(telemetry_payload["device_id"])
    return jsonify(
        {
            "message": "Telemetry stored.",
            "telemetry_id": stored["id"],
            "recorded_at": stored["recorded_at"],
            "alerts_created": created_alerts,
            "irrigation_alert": telemetry_payload["soil_moisture"] < telemetry_payload["moisture_threshold"],
            "dashboard": dashboard,
        }
    ), 201


@app.get("/api/iot/devices")
def list_iot_devices() -> tuple[dict[str, object], int]:
    return jsonify({"devices": get_iot_devices()}), 200


@app.get("/api/iot/dashboard")
def get_iot_dashboard() -> tuple[dict[str, object], int]:
    device_id = request.args.get("device_id")
    dashboard = get_device_telemetry(device_id)
    if dashboard is None:
        return jsonify({"error": "No telemetry found for the requested device."}), 404
    return jsonify(dashboard), 200


@app.get("/api/iot/alerts")
def list_iot_alerts() -> tuple[dict[str, object], int]:
    device_id = request.args.get("device_id")
    limit = int(request.args.get("limit", 20))

    with get_iot_connection() as connection:
        if device_id:
            rows = connection.execute(
                """
                SELECT telemetry_id, device_id, farmer_name, farm_name, alert_type, severity,
                       message, channel, created_at
                FROM iot_alerts
                WHERE device_id = ?
                ORDER BY created_at DESC, id DESC
                LIMIT ?
                """,
                (device_id, limit),
            ).fetchall()
        else:
            rows = connection.execute(
                """
                SELECT telemetry_id, device_id, farmer_name, farm_name, alert_type, severity,
                       message, channel, created_at
                FROM iot_alerts
                ORDER BY created_at DESC, id DESC
                LIMIT ?
                """,
                (limit,),
            ).fetchall()

    return jsonify(
        {
            "alerts": [
                {
                    "telemetry_id": row["telemetry_id"],
                    "device_id": row["device_id"],
                    "farmer_name": row["farmer_name"],
                    "farm_name": row["farm_name"],
                    "alert_type": row["alert_type"],
                    "severity": row["severity"],
                    "message": row["message"],
                    "channel": row["channel"],
                    "created_at": row["created_at"],
                }
                for row in rows
            ]
        }
    ), 200


@app.get("/api/notifications")
def list_platform_notifications_route() -> tuple[dict[str, object], int]:
    source = request.args.get("source")
    limit = int(request.args.get("limit", 50))
    notifications = get_platform_notifications(source_type=source if source not in (None, "all", "") else None, limit=limit)
    return jsonify({"notifications": notifications}), 200


@app.get("/api/equipment/listings")
def list_equipment_route() -> tuple[dict[str, object], int]:
    query = request.args.get("q")
    pin_code = request.args.get("pin_code")
    status = request.args.get("status", "available")
    listings = list_equipment_records(query=query, pin_code=pin_code, status=status)
    return jsonify({"equipment": listings, "count": len(listings)}), 200


@app.post("/api/equipment/listings")
def create_equipment_listing() -> tuple[dict[str, object], int]:
    payload = request.get_json(silent=True) or {}
    required_fields = ["name", "description", "daily_rate", "owner_id", "owner_name", "pin_code"]
    missing = [field for field in required_fields if field not in payload]
    if missing:
        return jsonify({"error": "Missing equipment fields.", "missing_fields": missing}), 400

    try:
        name = str(payload["name"]).strip()
        description = str(payload["description"]).strip()
        daily_rate = float(payload["daily_rate"])
        owner_id = str(payload["owner_id"]).strip()
        owner_name = str(payload["owner_name"]).strip()
        pin_code = str(payload["pin_code"]).strip()
        photo_data_url = str(payload.get("photo_data_url") or "").strip() or None
        status = str(payload.get("status") or "available").strip().lower()
    except (TypeError, ValueError):
        return jsonify({"error": "Invalid equipment listing payload."}), 400

    if not name or not description or daily_rate <= 0 or not owner_id or not owner_name or not pin_code:
        return jsonify({"error": "Equipment listing values must be complete and positive."}), 400

    if status not in {"available", "reserved", "rented", "maintenance"}:
        status = "available"

    with get_equipment_connection() as connection:
        cursor = connection.execute(
            """
            INSERT INTO equipment (
                name, description, daily_rate, owner_id, owner_name,
                status, pin_code, photo_data_url, created_at
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
            """,
            (
                name,
                description,
                daily_rate,
                owner_id,
                owner_name,
                status,
                pin_code,
                photo_data_url or make_placeholder_photo(name, "#226b47"),
                datetime.utcnow().isoformat(timespec="seconds") + "Z",
            ),
        )
        equipment_id = int(cursor.lastrowid)
        connection.commit()

    detail = get_equipment_detail(equipment_id)
    return jsonify({"message": "Equipment listed.", "equipment": detail}), 201


@app.get("/api/equipment/<int:equipment_id>")
def get_equipment_route(equipment_id: int) -> tuple[dict[str, object], int]:
    detail = get_equipment_detail(equipment_id)
    if detail is None:
        return jsonify({"error": "Equipment not found."}), 404
    return jsonify(detail), 200


@app.post("/api/equipment/bookings")
def create_equipment_booking() -> tuple[dict[str, object], int]:
    payload = request.get_json(silent=True) or {}
    required_fields = ["equipment_id", "renter_id", "renter_name", "start_date", "end_date"]
    missing = [field for field in required_fields if field not in payload]
    if missing:
        return jsonify({"error": "Missing booking fields.", "missing_fields": missing}), 400

    try:
        equipment_id = int(payload["equipment_id"])
        renter_id = str(payload["renter_id"]).strip()
        renter_name = str(payload["renter_name"]).strip()
        start_date = datetime.fromisoformat(str(payload["start_date"])).date()
        end_date = datetime.fromisoformat(str(payload["end_date"])).date()
    except (TypeError, ValueError):
        return jsonify({"error": "Invalid booking payload."}), 400

    if start_date > end_date:
        return jsonify({"error": "Start date must be on or before the end date."}), 400

    equipment = get_equipment_detail(equipment_id)
    if equipment is None:
        return jsonify({"error": "Equipment not found."}), 404

    with get_equipment_connection() as connection:
        if not equipment_is_available(connection, equipment_id, start_date.isoformat(), end_date.isoformat()):
            return jsonify({"error": "Selected dates overlap with an existing rental booking."}), 409

        rental_days = (end_date - start_date).days + 1
        rental_days = max(rental_days, 1)
        total_cost = rental_days * float(equipment["daily_rate"])

        cursor = connection.execute(
            """
            INSERT INTO rental_bookings (
                equipment_id, renter_id, renter_name, start_date, end_date, total_cost, created_at
            ) VALUES (?, ?, ?, ?, ?, ?, ?)
            """,
            (
                equipment_id,
                renter_id,
                renter_name,
                start_date.isoformat(),
                end_date.isoformat(),
                total_cost,
                datetime.utcnow().isoformat(timespec="seconds") + "Z",
            ),
        )

        booking_id = int(cursor.lastrowid)
        connection.execute(
            "UPDATE equipment SET status = ? WHERE id = ?",
            ("reserved", equipment_id),
        )

        related_url = f"/equipment-detail.html?equipment_id={equipment_id}"
        booking_title = f"{equipment['name']} booked"
        booking_message = (
            f"{renter_name} booked {equipment['name']} from {start_date.isoformat()} to {end_date.isoformat()} "
            f"for ${total_cost:.2f}."
        )

        record_platform_notification(
            connection,
            source_type="equipment",
            notification_type="booking",
            recipient=str(equipment["owner_name"]),
            title=booking_title,
            message=booking_message,
            severity="high",
            related_url=related_url,
            metadata={
                "equipment_id": equipment_id,
                "renter_id": renter_id,
                "renter_name": renter_name,
                "start_date": start_date.isoformat(),
                "end_date": end_date.isoformat(),
                "total_cost": total_cost,
                "role": "owner",
            },
        )

        record_platform_notification(
            connection,
            source_type="equipment",
            notification_type="booking",
            recipient=renter_name,
            title="Booking confirmed",
            message=f"Your booking for {equipment['name']} is confirmed. Total: ${total_cost:.2f}.",
            severity="medium",
            related_url=related_url,
            metadata={
                "equipment_id": equipment_id,
                "booking_id": booking_id,
                "renter_id": renter_id,
                "start_date": start_date.isoformat(),
                "end_date": end_date.isoformat(),
                "total_cost": total_cost,
                "role": "renter",
            },
        )

        connection.commit()

    detail = get_equipment_detail(equipment_id)
    return jsonify(
        {
            "message": "Booking confirmed.",
            "booking_id": booking_id,
            "equipment": detail,
            "total_cost": round(total_cost, 2),
            "rental_days": rental_days,
            "notifications_created": 2,
        }
    ), 201


@app.get("/verify-produce")
def verify_produce_entry() -> object:
    return send_from_directory(PROJECT_ROOT, "verify-produce.html")


@app.get("/trace.html")
def trace_entry() -> object:
    return send_from_directory(PROJECT_ROOT, "trace.html")


@app.get("/farm_dashboard.html")
def farm_dashboard_entry() -> object:
    return send_from_directory(PROJECT_ROOT, "farm_dashboard.html")


@app.get("/notifications.html")
def notifications_entry() -> object:
    return send_from_directory(PROJECT_ROOT, "notifications.html")


@app.get("/equipment.html")
def equipment_entry() -> object:
    return send_from_directory(PROJECT_ROOT, "equipment.html")


@app.get("/equipment-detail.html")
def equipment_detail_entry() -> object:
    return send_from_directory(PROJECT_ROOT, "equipment-detail.html")


# ── AI Component Generation ──────────────────────────

OPENAI_API_KEY = os.environ.get("OPENAI_API_KEY", "")
OPENAI_API_URL = "https://api.openai.com/v1/chat/completions"
_generate_rate_limit: dict[str, dict[str, int]] = defaultdict(lambda: defaultdict(int))
_generate_cache: dict[str, str] = {}

FEW_SHOT_EXAMPLES = """
Example 1 — Gradient Button:
HTML: <button class="gradient-btn">Click Me</button>
CSS: .gradient-btn { padding: 10px 24px; border: none; color: white; background: linear-gradient(45deg, #eb6835, #6c5ce7); border-radius: 8px; cursor: pointer; font-weight: 600; transition: 0.3s; } .gradient-btn:hover { opacity: 0.85; transform: translateY(-2px); }

Example 2 — Glass Card:
HTML: <div class="glass-card"><h3>Glassmorphism</h3><p>Frosted glass effect.</p></div>
CSS: .glass-card { padding: 24px; border-radius: 14px; background: rgba(255,255,255,0.15); border: 1px solid rgba(255,255,255,0.3); backdrop-filter: blur(10px); color: white; box-shadow: 0 8px 32px rgba(0,0,0,0.12); }

Example 3 — Neon Button:
HTML: <button class="neon-btn">Glow</button>
CSS: .neon-btn { padding: 10px 24px; background: transparent; color: #00ffe0; border: 1.5px solid #00ffe0; border-radius: 8px; cursor: pointer; font-weight: 600; transition: 0.3s; } .neon-btn:hover { box-shadow: 0 0 16px #00ffe0, 0 0 40px rgba(0,255,224,0.3); }
"""

DESIGN_TOKENS = """
Color palette:
- Primary accent: #eb6835 (use as --accent)
- Text primary: #111111
- Text secondary: #666666
- Background primary: #f5f4f2
- Background secondary: #ffffff
- Border: #ebebeb
- Card background: #ffffff
- Surface elevated: #ffffff
- Surface muted: #f0ede9

Spacing & radius:
- Small radius: 8px
- Medium radius: 14px
- Large radius: 20px
- Shadows: 0 2px 8px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.08), 0 8px 32px rgba(0,0,0,0.12)

Typography:
- Body font: 'DM Sans', Arial, sans-serif
- Heading font: 'Syne', sans-serif

Rules:
- Use CSS custom properties where possible: --accent, --radius-md, --shadow-md, etc.
- Output ONLY the HTML and CSS. No markdown fences, no explanations.
- HTML first, then CSS. Separate them with a blank line.
- Make components self-contained and copy-paste ready.
- Use pure CSS, no external dependencies.
- Ensure responsive design with flexbox or grid.
"""


@app.post("/api/generate")
def api_generate() -> tuple[object, int]:
    import requests

    if not OPENAI_API_KEY:
        return jsonify({"error": "AI generation is not configured. Set OPENAI_API_KEY."}), 503

    payload = request.get_json(silent=True) or {}
    user_prompt = str(payload.get("prompt", "")).strip()
    refinement = str(payload.get("refinement", "")).strip()
    previous = str(payload.get("previous", "")).strip()

    if not user_prompt:
        return jsonify({"error": "Prompt is required."}), 400

    client_ip = request.remote_addr or "unknown"
    today = datetime.utcnow().strftime("%Y-%m-%d")
    if _generate_rate_limit[client_ip][today] >= 10:
        return jsonify({"error": "Daily generation limit reached (10/day)."}), 429

    _generate_rate_limit[client_ip][today] += 1

    system_prompt = (
        "You are an expert UI component generator for UIverse, a design system library. "
        "You generate pure HTML and CSS components that follow the UIverse design tokens. "
        "Respond with ONLY the HTML followed by CSS. No markdown code blocks, no explanations. "
        "The HTML and CSS must be valid and self-contained. "
        "Use the provided design tokens and few-shot examples as style guidance.\n\n"
        f"{DESIGN_TOKENS}\n\n"
        f"{FEW_SHOT_EXAMPLES}"
    )

    user_content = user_prompt
    if previous:
        user_content = f"Previous component:\n{previous}\n\nRefinement instruction: {user_prompt}"
    if refinement:
        user_content += f"\nAdditional context: {refinement}"

    cache_key = f"{user_content}:{refinement}:{previous}"
    if cache_key in _generate_cache:
        cached = _generate_cache[cache_key]
        parts = cached.split("\n\n", 1)
        return jsonify({"html": parts[0] if len(parts) > 1 else "", "css": parts[1] if len(parts) > 1 else cached, "cached": True}), 200

    try:
        response = requests.post(
            OPENAI_API_URL,
            headers={
                "Authorization": f"Bearer {OPENAI_API_KEY}",
                "Content-Type": "application/json",
            },
            json={
                "model": "gpt-4o-mini",
                "messages": [
                    {"role": "system", "content": system_prompt},
                    {"role": "user", "content": user_content},
                ],
                "temperature": 0.7,
                "max_tokens": 1200,
            },
            timeout=30,
        )
        response.raise_for_status()
        data = response.json()
        content = data["choices"][0]["message"]["content"]

        html_part = ""
        css_part = ""
        parts = re.split(r"\n\s*\n", content.strip(), maxsplit=1)
        if len(parts) == 2:
            html_part = parts[0].strip()
            css_part = parts[1].strip()
        else:
            css_start = re.search(r"(?:^|\n)\s*[.#@a-zA-Z][^{]*\{", content)
            if css_start:
                html_part = content[:css_start.start()].strip()
                css_part = content[css_start.start():].strip()
            else:
                html_part = content.strip()
                css_part = ""

        html_part = re.sub(r"```html?", "", html_part, flags=re.I).strip()
        css_part = re.sub(r"```css?", "", css_part, flags=re.I).strip()

        _generate_cache[cache_key] = f"{html_part}\n\n{css_part}"

        return jsonify({"html": html_part, "css": css_part, "cached": False}), 200

    except requests.exceptions.Timeout:
        return jsonify({"error": "Generation timed out. Please try again."}), 504
    except requests.exceptions.RequestException as e:
        return jsonify({"error": f"Generation failed: {str(e)}"}), 502
    except Exception as e:
        return jsonify({"error": f"Unexpected error: {str(e)}"}), 500
@app.get("/workspace.html")
def workspace_entry() -> object:
    return send_from_directory(PROJECT_ROOT, "workspace.html")


if __name__ == "__main__":
    start_iot_alert_worker()
    app.run(host="127.0.0.1", port=5000, debug=True, use_reloader=False)