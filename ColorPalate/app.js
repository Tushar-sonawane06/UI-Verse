const palette = document.getElementById("palette");
const generateBtn = document.getElementById("generateBtn");

function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
}

function generatePalette() {
    palette.innerHTML = "";

    for (let i = 0; i < 5; i++) {
        const color = getRandomColor();

        const colorBox = document.createElement("div");
        colorBox.classList.add("color-box");
        colorBox.style.backgroundColor = color;

        const colorCode = document.createElement("div");
        colorCode.classList.add("color-code");
        colorCode.textContent = color;

        colorBox.appendChild(colorCode);

        colorBox.addEventListener("click", () => {
            navigator.clipboard.writeText(color);

            colorCode.textContent = "Copied!";
            setTimeout(() => {
                colorCode.textContent = color;
            }, 1000);
        });

        palette.appendChild(colorBox);
    }
}

generateBtn.addEventListener("click", generatePalette);

// Generate default palette on load
generatePalette();

const palette = document.getElementById("palette");
const generateBtn = document.getElementById("generateBtn");
const copyAllBtn = document.getElementById("copyAllBtn");
const emptyState = document.getElementById("emptyState");
const commandInput = document.getElementById("commandInput");

const TOTAL_COLORS = 5;

function randomColor() {
    const chars = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0; i < 6; i++) {
        color += chars[Math.floor(Math.random() * 16)];
    }

    return color;
}

function copyText(text) {
    navigator.clipboard.writeText(text);
}

function generatePalette() {

    palette.innerHTML = "";

    emptyState.classList.add("hidden");

    let colors = [];

    for (let i = 0; i < TOTAL_COLORS; i++) {

        const color = randomColor();

        colors.push(color);

        const card = document.createElement("div");
        card.className = "color-card";

        card.innerHTML = `
            <div
                class="color-preview"
                style="background:${color};">
            </div>

            <div class="color-info">

                <div class="hex">${color}</div>

                <button class="copy-btn">
                    Copy
                </button>

            </div>
        `;

        const btn = card.querySelector(".copy-btn");

        btn.addEventListener("click", () => {

            copyText(color);

            btn.textContent = "Copied ✓";

            setTimeout(() => {

                btn.textContent = "Copy";

            }, 1200);

        });

        palette.appendChild(card);
    }

    copyAllBtn.onclick = () => {

        copyText(colors.join(", "));

        copyAllBtn.textContent = "Copied ✓";

        setTimeout(() => {

            copyAllBtn.textContent = "📋 Copy All";

        }, 1200);

    };
}

generateBtn.addEventListener("click", generatePalette);

document.addEventListener("keydown", (event) => {

    if (
        event.code === "Space" &&
        document.activeElement !== commandInput
    ) {

        event.preventDefault();

        generatePalette();
    }

    if (event.ctrlKey && event.key.toLowerCase() === "g") {

        event.preventDefault();

        generatePalette();
    }

});

commandInput.addEventListener("keydown", (e) => {

    if (e.key !== "Enter") return;

    const cmd = commandInput.value.trim().toLowerCase();

    switch (cmd) {

        case "generate":
        case "random":
            generatePalette();
            break;

        case "clear":
            palette.innerHTML = "";
            emptyState.classList.remove("hidden");
            break;

        default:
            alert("Unknown command");
    }

    commandInput.value = "";

});

generatePalette();