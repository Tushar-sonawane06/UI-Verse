import { createShadowRootStory } from '../storybook-utils.js';

export default {
  title: 'Components/Maps',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### Description
Map UI components and layouts

### Info & Metadata
- **Category**: Layout
- **Tags**: <code>maps</code>, <code>location</code>, <code>geo</code>

### Usage
Embed the HTML markup inside your document and include the listed CSS styles.

#### HTML Markup:
\`\`\`html
<main class="main-home">
    <section class="hero-section">
      <div>
        <span class="hero-badge"><i class="fa-solid fa-location-dot"></i> Interactive components</span>
        <h1>Maps that feel <span>alive.</span></h1>
        <p>Explore reusable map layouts with live pins, search controls, location cards, and polished actions built on Leaflet.</p>
      </div>
      <div class="preview-map-card">
        <span class="live-dot"></span>
        <h3>Live Location</h3>
        <p>Kolkata, India</p>
        <div class="mini-map"><span class="pulse-pin"></span></div>
      </div>
    </section>

    <section class="maps-grid">
      <article class="map-card large-card">
        <div class="card-header">
          <div>
            <span class="card-label">Leaflet</span>
            <h2>Basic Map</h2>
          </div>
          <button class="live-btn">Live</button>
        </div>
        <div class="map-box"><div id="map"></div></div>
        <div class="actions">
          <button onclick="toggleCode('m1')">View Code</button>
          <button onclick="copyCode('m1')">Copy</button>
        </div>
        <pre id="m1" class="code-block">&lt;div id="map"&gt;&lt;/div&gt;</pre>
      </article>

      <article class="map-card">
        <div class="card-header">
          <div>
            <span class="card-label">Search</span>
            <h2>Search Map</h2>
          </div>
        </div>
        <div class="search-location">
          <input placeholder="Search location..." />
          <button>Go</button>
        </div>
        <div class="map-box small-map"><div id="map2"></div></div>
        <pre id="m2" class="code-block">Search map component</pre>
      </article>

      <article class="map-card">
        <div class="card-header">
          <div>
            <span class="card-label">Card</span>
            <h2>Map Card</h2>
          </div>
        </div>
        <div class="map-box small-map"><div id="map3"></div></div>
        <div class="actions">
          <button>Live Location</button>
          <button>?? Kolkata</button>
        </div>
        <pre id="m3" class="code-block">Map card layout</pre>
      </article>

      <article class="map-card">
        <div class="card-header">
          <div>
            <span class="card-label">Marker</span>
            <h2>Mini Marker</h2>
          </div>
        </div>
        <div class="map-box small-map"><div id="map4"></div></div>
        <div class="actions">
          <button onclick="toggleCode('m4')">View Code</button>
          <button onclick="copyCode('m4')">Copy</button>
        </div>
        <pre id="m4" class="code-block">L.marker([13.0827,80.2707]).addTo(map4).bindPopup('Mini marker - Chennai');</pre>
      </article>

      <article class="map-card">
        <div class="card-header">
          <div>
            <span class="card-label">Route</span>
            <h2>Route Map</h2>
          </div>
        </div>
        <div class="map-box small-map"><div id="map5"></div></div>
        <div class="actions">
          <button onclick="toggleCode('m5')">View Code</button>
          <button onclick="copyCode('m5')">Copy</button>
        </div>
        <pre id="m5" class="code-block">const route = [[12.9716,77.5946],[13.0827,80.2707],[19.0760,72.8777]]; L.polyline(route).addTo(map5);</pre>
      </article>

      <article class="map-card">
        <div class="card-header">
          <div>
            <span class="card-label">Heat</span>
            <h2>Heat / Hotspots</h2>
          </div>
        </div>
        <div class="map-box small-map"><div id="map6"></div></div>
        <div class="actions">
          <button onclick="toggleCode('m6')">View Code</button>
          <button onclick="copyCode('m6')">Copy</button>
        </div>
        <pre id="m6" class="code-block">// Simple hotspot circles added via L.circle on map6</pre>
      </article>
    </section>
  </main>
\`\`\`

#### Style Sheets:
- \`/design-tokens.css\`
- \`/dist/shared.css\`
- \`https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css\`
- \`https://unpkg.com/leaflet@1.9.4/dist/leaflet.css\`
- \`/map.css\`

#### JavaScript Scripts:
- \`https://unpkg.com/leaflet@1.9.4/dist/leaflet.js\`
- \`/maps.js\`
- \`/dist/shared.js\`

### Accessibility (a11y) Checklist

- [x] Semantic HTML: appropriate tags are utilized.
- [x] Focus states: interactive elements show native or custom focus styling.
- [x] Color contrast: contrast ratios meet WCAG standard compliance.


### Visual & Interactive Test Cases

- [x] Render check: component layout presents visual elements clearly.
- [x] Hover check: interactive elements trigger hover states and transitions.
- [x] Responsive layout: scales and nests correctly across viewports.

`
      }
    }
  }
};

export const Default = {
  render: () => createShadowRootStory({
    title: 'Maps',
    styles: ["/design-tokens.css","/dist/shared.css","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css","https://unpkg.com/leaflet@1.9.4/dist/leaflet.css","/map.css"],
    content: `<main class="main-home">
    <section class="hero-section">
      <div>
        <span class="hero-badge"><i class="fa-solid fa-location-dot"></i> Interactive components</span>
        <h1>Maps that feel <span>alive.</span></h1>
        <p>Explore reusable map layouts with live pins, search controls, location cards, and polished actions built on Leaflet.</p>
      </div>
      <div class="preview-map-card">
        <span class="live-dot"></span>
        <h3>Live Location</h3>
        <p>Kolkata, India</p>
        <div class="mini-map"><span class="pulse-pin"></span></div>
      </div>
    </section>

    <section class="maps-grid">
      <article class="map-card large-card">
        <div class="card-header">
          <div>
            <span class="card-label">Leaflet</span>
            <h2>Basic Map</h2>
          </div>
          <button class="live-btn">Live</button>
        </div>
        <div class="map-box"><div id="map"></div></div>
        <div class="actions">
          <button onclick="toggleCode('m1')">View Code</button>
          <button onclick="copyCode('m1')">Copy</button>
        </div>
        <pre id="m1" class="code-block">&lt;div id="map"&gt;&lt;/div&gt;</pre>
      </article>

      <article class="map-card">
        <div class="card-header">
          <div>
            <span class="card-label">Search</span>
            <h2>Search Map</h2>
          </div>
        </div>
        <div class="search-location">
          <input placeholder="Search location..." />
          <button>Go</button>
        </div>
        <div class="map-box small-map"><div id="map2"></div></div>
        <pre id="m2" class="code-block">Search map component</pre>
      </article>

      <article class="map-card">
        <div class="card-header">
          <div>
            <span class="card-label">Card</span>
            <h2>Map Card</h2>
          </div>
        </div>
        <div class="map-box small-map"><div id="map3"></div></div>
        <div class="actions">
          <button>Live Location</button>
          <button>?? Kolkata</button>
        </div>
        <pre id="m3" class="code-block">Map card layout</pre>
      </article>

      <article class="map-card">
        <div class="card-header">
          <div>
            <span class="card-label">Marker</span>
            <h2>Mini Marker</h2>
          </div>
        </div>
        <div class="map-box small-map"><div id="map4"></div></div>
        <div class="actions">
          <button onclick="toggleCode('m4')">View Code</button>
          <button onclick="copyCode('m4')">Copy</button>
        </div>
        <pre id="m4" class="code-block">L.marker([13.0827,80.2707]).addTo(map4).bindPopup('Mini marker - Chennai');</pre>
      </article>

      <article class="map-card">
        <div class="card-header">
          <div>
            <span class="card-label">Route</span>
            <h2>Route Map</h2>
          </div>
        </div>
        <div class="map-box small-map"><div id="map5"></div></div>
        <div class="actions">
          <button onclick="toggleCode('m5')">View Code</button>
          <button onclick="copyCode('m5')">Copy</button>
        </div>
        <pre id="m5" class="code-block">const route = [[12.9716,77.5946],[13.0827,80.2707],[19.0760,72.8777]]; L.polyline(route).addTo(map5);</pre>
      </article>

      <article class="map-card">
        <div class="card-header">
          <div>
            <span class="card-label">Heat</span>
            <h2>Heat / Hotspots</h2>
          </div>
        </div>
        <div class="map-box small-map"><div id="map6"></div></div>
        <div class="actions">
          <button onclick="toggleCode('m6')">View Code</button>
          <button onclick="copyCode('m6')">Copy</button>
        </div>
        <pre id="m6" class="code-block">// Simple hotspot circles added via L.circle on map6</pre>
      </article>
    </section>
  </main>`
  })
};
