import React from 'react';

export default function map(){
  return (
    <>
      <main className="main-home">
          <section className="hero-section">
            <div>
              <span className="hero-badge"><i className="fa-solid fa-location-dot"></i> Interactive components</span>
              <h1>Maps that feel <span>alive.</span></h1>
              <p>Explore reusable map layouts with live pins, search controls, location cards, and polished actions built on Leaflet.</p>
            </div>
            <div className="preview-map-card">
              <span className="live-dot"></span>
              <h3>Live Location</h3>
              <p>Kolkata, India</p>
              <div className="mini-map"><span className="pulse-pin"></span></div>
            </div>
          </section>
      
          <section className="maps-grid">
            <article className="map-card large-card">
              <div className="card-header">
                <div>
                  <span className="card-label">Leaflet</span>
                  <h2>Basic Map</h2>
                </div>
                <button className="live-btn">Live</button>
              </div>
              <div className="map-box"><div id="map"></div></div>
              <div className="actions">
                <button onclick="toggleCode('m1')">View Code</button>
                <button onclick="copyCode('m1')">Copy</button>
              </div>
              <pre id="m1" className="code-block">&lt;div id="map"&gt;&lt;/div&gt;</pre>
            </article>
      
            <article className="map-card">
              <div className="card-header">
                <div>
                  <span className="card-label">Search</span>
                  <h2>Search Map</h2>
                </div>
              </div>
              <div className="search-location">
                <input placeholder="Search location..." />
                <button>Go</button>
              </div>
              <div className="map-box small-map"><div id="map2"></div></div>
              <pre id="m2" className="code-block">Search map component</pre>
            </article>
      
            <article className="map-card">
              <div className="card-header">
                <div>
                  <span className="card-label">Card</span>
                  <h2>Map Card</h2>
                </div>
              </div>
              <div className="map-box small-map"><div id="map3"></div></div>
              <div className="actions">
                <button>Live Location</button>
                <button>?? Kolkata</button>
              </div>
              <pre id="m3" className="code-block">Map card layout</pre>
            </article>
      
            <article className="map-card">
              <div className="card-header">
                <div>
                  <span className="card-label">Marker</span>
                  <h2>Mini Marker</h2>
                </div>
              </div>
              <div className="map-box small-map"><div id="map4"></div></div>
              <div className="actions">
                <button onclick="toggleCode('m4')">View Code</button>
                <button onclick="copyCode('m4')">Copy</button>
              </div>
              <pre id="m4" className="code-block">L.marker([13.0827,80.2707]).addTo(map4).bindPopup('Mini marker - Chennai');</pre>
            </article>
      
            <article className="map-card">
              <div className="card-header">
                <div>
                  <span className="card-label">Route</span>
                  <h2>Route Map</h2>
                </div>
              </div>
              <div className="map-box small-map"><div id="map5"></div></div>
              <div className="actions">
                <button onclick="toggleCode('m5')">View Code</button>
                <button onclick="copyCode('m5')">Copy</button>
              </div>
              <pre id="m5" className="code-block">const route = [[12.9716,77.5946],[13.0827,80.2707],[19.0760,72.8777]]; L.polyline(route).addTo(map5);</pre>
            </article>
      
            <article className="map-card">
              <div className="card-header">
                <div>
                  <span className="card-label">Heat</span>
                  <h2>Heat / Hotspots</h2>
                </div>
              </div>
              <div className="map-box small-map"><div id="map6"></div></div>
              <div className="actions">
                <button onclick="toggleCode('m6')">View Code</button>
                <button onclick="copyCode('m6')">Copy</button>
              </div>
              <pre id="m6" className="code-block">// Simple hotspot circles added via L.circle on map6</pre>
            </article>
          </section>
        </main>
    </>
  );
}
