import { createShadowRootStory } from '../storybook-utils.js';

export default {
  title: 'Components/Tables',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### Description
Table and data grid components

### Info & Metadata
- **Category**: Tables
- **Tags**: <code>table</code>, <code>data</code>, <code>grid</code>, <code>rows</code>, <code>columns</code>

### Usage
Embed the HTML markup inside your document and include the listed CSS styles.

#### HTML Markup:
\`\`\`html
<main class="main-home">

<!-- HERO -->
<section class="section">
  <h1>📊 Advanced Tables Dashboard</h1>
  <p>Modern SaaS-style responsive tables with real-world datasets.</p>
</section>

<!-- ================= TABLE 1 ================= -->
<section class="section">
  <h2>👨‍💼 Employee Directory</h2>

  <div class="table-wrapper">
    <table class="ui-table">
      <thead>
        <tr>
          <th>ID</th><th>Name</th><th>Role</th><th>Dept</th><th>Status</th>
        </tr>
      </thead>

      <tbody>
        <tr><td>01</td><td>Arjun Mehta</td><td>Frontend Dev</td><td>Eng</td><td>Active</td></tr>
        <tr><td>02</td><td>Meera Das</td><td>UI Designer</td><td>Design</td><td>Active</td></tr>
        <tr><td>03</td><td>Rahul Sharma</td><td>Backend Dev</td><td>Eng</td><td>Active</td></tr>
        <tr><td>04</td><td>Sneha Roy</td><td>PM</td><td>Product</td><td>Active</td></tr>
        <tr><td>05</td><td>Vikram Singh</td><td>DevOps</td><td>Infra</td><td>Inactive</td></tr>
        <tr><td>06</td><td>Ishita Jain</td><td>Analyst</td><td>Data</td><td>Active</td></tr>
        <tr><td>07</td><td>Karan Mehta</td><td>ML Eng</td><td>AI</td><td>Active</td></tr>
      </tbody>
    </table>
  </div>
</section>

<section class="section">
  <h2>📊 CRM Sales Pipeline</h2>

  <div class="table-wrapper">
    <table class="ui-table crm-table">
      <thead>
        <tr>
          <th>Lead</th>
          <th>Company</th>
          <th>Value</th>
          <th>Stage</th>
          <th>Probability</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Sarah Kim</td>
          <td>TechNova</td>
          <td>$48,000</td>
          <td>Proposal</td>
          <td>82%</td>
        </tr>
        <tr>
          <td>David Chen</td>
          <td>CloudSphere</td>
          <td>$21,000</td>
          <td>Negotiation</td>
          <td>65%</td>
        </tr>
        <tr>
          <td>Emily Stone</td>
          <td>DataWorks</td>
          <td>$87,000</td>
          <td>Qualified</td>
          <td>45%</td>
        </tr>
      </tbody>
    </table>
  </div>
</section>

<section class="section">
  <h2>💰 Subscription Revenue Dashboard</h2>

  <div class="table-wrapper">
    <table class="ui-table saas-table">
      <thead>
        <tr>
          <th>Plan</th>
          <th>Customers</th>
          <th>MRR</th>
          <th>Growth</th>
          <th>Churn</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Starter</td>
          <td>2,840</td>
          <td>$28,400</td>
          <td class="positive">+12%</td>
          <td>3.2%</td>
        </tr>
        <tr>
          <td>Pro</td>
          <td>1,120</td>
          <td>$56,000</td>
          <td class="positive">+21%</td>
          <td>1.8%</td>
        </tr>
        <tr>
          <td>Enterprise</td>
          <td>210</td>
          <td>$84,000</td>
          <td class="positive">+33%</td>
          <td>0.5%</td>
        </tr>
      </tbody>
    </table>
  </div>
</section>


<section class="section">
  <h2>⚡ API Monitoring Dashboard</h2>

  <div class="table-wrapper">
    <table class="ui-table api-table">
      <thead>
        <tr>
          <th>Service</th>
          <th>Requests</th>
          <th>Latency</th>
          <th>Error Rate</th>
          <th>Status</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Auth API</td>
          <td>2.1M</td>
          <td>120ms</td>
          <td>0.04%</td>
          <td><span class="badge success">Healthy</span></td>
        </tr>
        <tr>
          <td>Payments API</td>
          <td>920K</td>
          <td>240ms</td>
          <td>0.18%</td>
          <td><span class="badge pending">Warning</span></td>
        </tr>
        <tr>
          <td>Analytics API</td>
          <td>5.8M</td>
          <td>180ms</td>
          <td>0.03%</td>
          <td><span class="badge success">Healthy</span></td>
        </tr>
      </tbody>
    </table>
  </div>
</section>


<section class="section">
  <h2>🎨 Design System Tokens</h2>

  <div class="table-wrapper">
    <table class="ui-table design-table">
      <thead>
        <tr>
          <th>Token</th>
          <th>Value</th>
          <th>Usage</th>
          <th>Type</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>--primary</td>
          <td>#6d5dfc</td>
          <td>Buttons</td>
          <td>Color</td>
        </tr>
        <tr>
          <td>--radius-lg</td>
          <td>20px</td>
          <td>Cards</td>
          <td>Border Radius</td>
        </tr>
        <tr>
          <td>--shadow-xl</td>
          <td>0 20px 60px rgba(...)</td>
          <td>Modals</td>
          <td>Shadow</td>
        </tr>
      </tbody>
    </table>
  </div>
</section>

<section class="section">
  <h2>🤖 AI Prompt Evaluation</h2>

  <div class="table-wrapper">
    <table class="ui-table ai-table">
      <thead>
        <tr>
          <th>Prompt</th>
          <th>Model</th>
          <th>Score</th>
          <th>Tokens</th>
          <th>Cost</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Research Assistant</td>
          <td>GPT-5</td>
          <td>97.8</td>
          <td>2,140</td>
          <td>$0.09</td>
        </tr>
        <tr>
          <td>Code Reviewer</td>
          <td>Claude</td>
          <td>96.1</td>
          <td>1,880</td>
          <td>$0.07</td>
        </tr>
        <tr>
          <td>Support Agent</td>
          <td>Gemini</td>
          <td>94.3</td>
          <td>1,520</td>
          <td>$0.05</td>
        </tr>
      </tbody>
    </table>
  </div>
</section>

<section class="section">
  <h2>🛡️ Cybersecurity Threat Monitor</h2>

  <div class="table-wrapper">
    <table class="ui-table security-table">
      <thead>
        <tr>
          <th>Threat ID</th>
          <th>Type</th>
          <th>Source</th>
          <th>Severity</th>
          <th>Detected</th>
          <th>Status</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>#SEC-201</td>
          <td>Malware</td>
          <td>Russia</td>
          <td class="negative">Critical</td>
          <td>2 mins ago</td>
          <td><span class="badge danger">Blocked</span></td>
        </tr>

        <tr>
          <td>#SEC-202</td>
          <td>Phishing</td>
          <td>Unknown</td>
          <td>Medium</td>
          <td>12 mins ago</td>
          <td><span class="badge pending">Investigating</span></td>
        </tr>

        <tr>
          <td>#SEC-203</td>
          <td>DDoS</td>
          <td>Germany</td>
          <td>High</td>
          <td>35 mins ago</td>
          <td><span class="badge success">Resolved</span></td>
        </tr>
      </tbody>
    </table>
  </div>
</section>

<section class="section">
  <h2>📈 Stock Market Watchlist</h2>

  <div class="table-wrapper">
    <table class="ui-table finance-table">
      <thead>
        <tr>
          <th>Company</th>
          <th>Ticker</th>
          <th>Price</th>
          <th>Change</th>
          <th>Volume</th>
          <th>Market Cap</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Apple Inc.</td>
          <td>AAPL</td>
          <td>$232.14</td>
          <td class="positive">+2.8%</td>
          <td>54.2M</td>
          <td>$3.4T</td>
        </tr>

        <tr>
          <td>Microsoft</td>
          <td>MSFT</td>
          <td>$491.88</td>
          <td class="positive">+1.9%</td>
          <td>22.4M</td>
          <td>$3.6T</td>
        </tr>

        <tr>
          <td>Tesla</td>
          <td>TSLA</td>
          <td>$217.54</td>
          <td class="negative">-3.1%</td>
          <td>89.5M</td>
          <td>$692B</td>
        </tr>
      </tbody>
    </table>
  </div>
</section>

<section class="section">
  <h2>☁️ Cloud Infrastructure Dashboard</h2>

  <div class="table-wrapper">
    <table class="ui-table cloud-table">
      <thead>
        <tr>
          <th>Instance</th>
          <th>Region</th>
          <th>CPU</th>
          <th>Memory</th>
          <th>Uptime</th>
          <th>Status</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>prod-api-01</td>
          <td>Singapore</td>
          <td>68%</td>
          <td>8.1 GB</td>
          <td>99.99%</td>
          <td><span class="badge success">Healthy</span></td>
        </tr>

        <tr>
          <td>db-primary</td>
          <td>Mumbai</td>
          <td>82%</td>
          <td>24 GB</td>
          <td>99.95%</td>
          <td><span class="badge active">Running</span></td>
        </tr>

        <tr>
          <td>analytics-node</td>
          <td>London</td>
          <td>94%</td>
          <td>16 GB</td>
          <td>98.4%</td>
          <td><span class="badge pending">Warning</span></td>
        </tr>
      </tbody>
    </table>
  </div>
</section>

<section class="section">
  <h2>🎬 Content Publishing Calendar</h2>

  <div class="table-wrapper">
    <table class="ui-table content-table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Platform</th>
          <th>Publish Date</th>
          <th>Status</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Future of AI Agents</td>
          <td>Emma Brooks</td>
          <td>Blog</td>
          <td>Jun 12</td>
          <td><span class="badge success">Published</span></td>
        </tr>

        <tr>
          <td>SaaS Design Trends</td>
          <td>David Lee</td>
          <td>YouTube</td>
          <td>Jun 15</td>
          <td><span class="badge active">Scheduled</span></td>
        </tr>

        <tr>
          <td>Cloud Security Guide</td>
          <td>Sarah Green</td>
          <td>LinkedIn</td>
          <td>Jun 18</td>
          <td><span class="badge pending">Draft</span></td>
        </tr>
      </tbody>
    </table>
  </div>
</section>
<section class="section">
  <h2>🚚 Logistics Delivery Tracking</h2>

  <div class="table-wrapper">
    <table class="ui-table logistics-table">
      <thead>
        <tr>
          <th>Shipment</th>
          <th>Origin</th>
          <th>Destination</th>
          <th>ETA</th>
          <th>Progress</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>SHIP-991</td>
          <td>Mumbai</td>
          <td>Delhi</td>
          <td>1 Day</td>
          <td>82%</td>
        </tr>

        <tr>
          <td>SHIP-992</td>
          <td>Bangalore</td>
          <td>Kolkata</td>
          <td>3 Days</td>
          <td>45%</td>
        </tr>

        <tr>
          <td>SHIP-993</td>
          <td>Chennai</td>
          <td>Pune</td>
          <td>Today</td>
          <td>97%</td>
        </tr>
      </tbody>
    </table>
  </div>
</section>

<section class="section">
  <h2>🎯 Marketing Campaign Performance</h2>

  <div class="table-wrapper">
    <table class="ui-table campaign-table">
      <thead>
        <tr>
          <th>Campaign</th>
          <th>Channel</th>
          <th>Budget</th>
          <th>CTR</th>
          <th>Conversions</th>
          <th>ROI</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Summer Sale</td>
          <td>Google Ads</td>
          <td>$8,000</td>
          <td>7.4%</td>
          <td>1,280</td>
          <td class="positive">+32%</td>
        </tr>

        <tr>
          <td>Product Launch</td>
          <td>Instagram</td>
          <td>$5,200</td>
          <td>5.8%</td>
          <td>890</td>
          <td class="positive">+19%</td>
        </tr>

        <tr>
          <td>Brand Awareness</td>
          <td>YouTube</td>
          <td>$11,500</td>
          <td>3.9%</td>
          <td>520</td>
          <td class="negative">-4%</td>
        </tr>
      </tbody>
    </table>
  </div>
</section>


<section class="section">
  <h2>🏠 Real Estate Listings</h2>

  <div class="table-wrapper">
    <table class="ui-table realestate-table">
      <thead>
        <tr>
          <th>Property</th>
          <th>Location</th>
          <th>Type</th>
          <th>Price</th>
          <th>Status</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Skyline Residency</td>
          <td>Mumbai</td>
          <td>Apartment</td>
          <td>₹1.8 Cr</td>
          <td><span class="badge success">Available</span></td>
        </tr>

        <tr>
          <td>Green Valley</td>
          <td>Bangalore</td>
          <td>Villa</td>
          <td>₹3.2 Cr</td>
          <td><span class="badge pending">Reserved</span></td>
        </tr>

        <tr>
          <td>Urban Heights</td>
          <td>Pune</td>
          <td>Penthouse</td>
          <td>₹4.6 Cr</td>
          <td><span class="badge active">Hot Deal</span></td>
        </tr>
      </tbody>
    </table>
  </div>
</section>

<section class="section">
  <h2>🎮 Gaming Tournament Leaderboard</h2>

  <div class="table-wrapper">
    <table class="ui-table gaming-table">
      <thead>
        <tr>
          <th>Player</th>
          <th>Team</th>
          <th>Kills</th>
          <th>Matches</th>
          <th>Win Rate</th>
          <th>Rank</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>ShadowX</td>
          <td>Nova</td>
          <td>188</td>
          <td>31</td>
          <td>82%</td>
          <td>🥇</td>
        </tr>

        <tr>
          <td>Vortex</td>
          <td>Titans</td>
          <td>164</td>
          <td>29</td>
          <td>76%</td>
          <td>🥈</td>
        </tr>

        <tr>
          <td>Phoenix</td>
          <td>Inferno</td>
          <td>151</td>
          <td>28</td>
          <td>71%</td>
          <td>🥉</td>
        </tr>
      </tbody>
    </table>
  </div>
</section>

<section class="hero-section premium-hero">
  <div>
    <span class="hero-badge">
      ✦ 50+ Premium Table Components
    </span>

    <h1>
      Data Tables <span>Reimagined</span>
    </h1>

    <p>
      Advanced SaaS tables for analytics, CRM, healthcare,
      finance, HR and enterprise applications.
    </p>
  </div>

  <div class="hero-actions">
    <button class="primary-btn">
      Browse Components
    </button>

    <button class="outline-btn">
      Documentation
    </button>
  </div>
</section>

<section class="stats-grid">

  <div class="stat-card">
    <h3>24.8K</h3>
    <p>Total Records</p>
  </div>

  <div class="stat-card">
    <h3>1.2K</h3>
    <p>New Entries</p>
  </div>

  <div class="stat-card">
    <h3>98%</h3>
    <p>Data Accuracy</p>
  </div>

  <div class="stat-card">
    <h3>+18%</h3>
    <p>Growth</p>
  </div>

</section>


<div class="pagination">

  <button>
    <i class="fa-solid fa-angle-left"></i>
  </button>

  <button class="active">1</button>
  <button>2</button>
  <button>3</button>

  <button>
    <i class="fa-solid fa-angle-right"></i>
  </button>

</div>
<!-- ================= TABLE 13 ================= -->
<section class="section">
  <h2>🏥 Healthcare Patient Records</h2>

  <div class="table-wrapper">
    <table class="ui-table healthcare-table">
      <thead>
        <tr>
          <th>Patient</th>
          <th>Doctor</th>
          <th>Department</th>
          <th>Appointment</th>
          <th>Status</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td class="user-cell">
            <img src="https://i.pravatar.cc/100?img=45" alt="">
            <div>
              <strong>Daniel Brooks</strong>
              <span>ID: PT-1290</span>
            </div>
          </td>
          <td>Dr. Emily Stone</td>
          <td>Cardiology</td>
          <td>09:30 AM</td>
          <td><span class="badge success">Checked In</span></td>
        </tr>

        <tr>
          <td class="user-cell">
            <img src="https://i.pravatar.cc/100?img=51" alt="">
            <div>
              <strong>Olivia Martin</strong>
              <span>ID: PT-2201</span>
            </div>
          </td>
          <td>Dr. Jacob Reed</td>
          <td>Neurology</td>
          <td>11:15 AM</td>
          <td><span class="badge pending">Waiting</span></td>
        </tr>

        <tr>
          <td class="user-cell">
            <img src="https://i.pravatar.cc/100?img=65" alt="">
            <div>
              <strong>James Wilson</strong>
              <span>ID: PT-9081</span>
            </div>
          </td>
          <td>Dr. Sarah Lewis</td>
          <td>Orthopedics</td>
          <td>01:45 PM</td>
          <td><span class="badge danger">Cancelled</span></td>
        </tr>
      </tbody>
    </table>
  </div>
</section>

<!-- ================= TABLE 14 ================= -->
<section class="section">
  <h2>🏦 Banking Transactions Monitor</h2>

  <div class="table-wrapper">
    <table class="ui-table banking-table">
      <thead>
        <tr>
          <th>Transaction</th>
          <th>Customer</th>
          <th>Method</th>
          <th>Amount</th>
          <th>Risk Score</th>
          <th>Status</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>#TXN-8812</td>
          <td>Michael Scott</td>
          <td>Credit Card</td>
          <td>$5,200</td>
          <td class="positive">Low</td>
          <td><span class="badge success">Approved</span></td>
        </tr>

        <tr>
          <td>#TXN-8813</td>
          <td>Rachel Green</td>
          <td>Wire Transfer</td>
          <td>$12,800</td>
          <td class="negative">High</td>
          <td><span class="badge danger">Flagged</span></td>
        </tr>

        <tr>
          <td>#TXN-8814</td>
          <td>Ross Geller</td>
          <td>UPI</td>
          <td>$780</td>
          <td class="positive">Low</td>
          <td><span class="badge active">Processing</span></td>
        </tr>
      </tbody>
    </table>
  </div>
</section>

<!-- ================= TABLE 15 ================= -->
<section class="section">
  <h2>🎓 University Course Enrollment</h2>

  <div class="table-wrapper">
    <table class="ui-table education-table">
      <thead>
        <tr>
          <th>Student</th>
          <th>Course</th>
          <th>Faculty</th>
          <th>Credits</th>
          <th>Performance</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Emma Parker</td>
          <td>Machine Learning</td>
          <td>Prof. Adams</td>
          <td>4</td>
          <td>95%</td>
        </tr>

        <tr>
          <td>Liam Carter</td>
          <td>Cloud Computing</td>
          <td>Prof. Watson</td>
          <td>3</td>
          <td>89%</td>
        </tr>

        <tr>
          <td>Sophia Miller</td>
          <td>Cyber Security</td>
          <td>Prof. Clark</td>
          <td>5</td>
          <td>98%</td>
        </tr>
      </tbody>
    </table>
  </div>
</section>

<!-- ================= TABLE 16 ================= -->
<section class="section">
  <h2>📦 Warehouse Inventory Tracker</h2>

  <div class="table-wrapper">
    <table class="ui-table inventory-table">
      <thead>
        <tr>
          <th>Product</th>
          <th>SKU</th>
          <th>Warehouse</th>
          <th>Stock</th>
          <th>Availability</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Gaming Laptop</td>
          <td>SKU-9911</td>
          <td>Mumbai Hub</td>
          <td>42</td>
          <td><span class="badge success">In Stock</span></td>
        </tr>

        <tr>
          <td>Wireless Mouse</td>
          <td>SKU-2241</td>
          <td>Delhi Hub</td>
          <td>8</td>
          <td><span class="badge pending">Low Stock</span></td>
        </tr>

        <tr>
          <td>Mechanical Keyboard</td>
          <td>SKU-7281</td>
          <td>Bangalore Hub</td>
          <td>0</td>
          <td><span class="badge danger">Out of Stock</span></td>
        </tr>
      </tbody>
    </table>
  </div>
</section>

<!-- ================= TABLE 17 ================= -->
<section class="section">
  <h2>✈️ Flight Schedule Dashboard</h2>

  <div class="table-wrapper">
    <table class="ui-table flight-table">
      <thead>
        <tr>
          <th>Flight</th>
          <th>Destination</th>
          <th>Gate</th>
          <th>Departure</th>
          <th>Status</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>AI-203</td>
          <td>New York</td>
          <td>G12</td>
          <td>08:45 PM</td>
          <td><span class="badge success">Boarding</span></td>
        </tr>

        <tr>
          <td>EK-441</td>
          <td>Dubai</td>
          <td>G05</td>
          <td>10:20 PM</td>
          <td><span class="badge pending">Delayed</span></td>
        </tr>

        <tr>
          <td>BA-117</td>
          <td>London</td>
          <td>G18</td>
          <td>11:10 PM</td>
          <td><span class="badge active">On Time</span></td>
        </tr>
      </tbody>
    </table>
  </div>
</section>

<!-- ================= TABLE 18 ================= -->
<section class="section">
  <h2>💼 Recruitment Pipeline</h2>

  <div class="table-wrapper">
    <table class="ui-table recruitment-table">
      <thead>
        <tr>
          <th>Candidate</th>
          <th>Role</th>
          <th>Experience</th>
          <th>Interview</th>
          <th>Result</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td class="user-cell">
            <img src="https://i.pravatar.cc/100?img=12" alt="">
            <div>
              <strong>Lucas Reed</strong>
              <span>Frontend Engineer</span>
            </div>
          </td>
          <td>React Developer</td>
          <td>4 Years</td>
          <td>Technical Round</td>
          <td><span class="badge success">Selected</span></td>
        </tr>

        <tr>
          <td class="user-cell">
            <img src="https://i.pravatar.cc/100?img=32" alt="">
            <div>
              <strong>Emily Davis</strong>
              <span>UI/UX Designer</span>
            </div>
          </td>
          <td>Product Designer</td>
          <td>3 Years</td>
          <td>HR Round</td>
          <td><span class="badge pending">Reviewing</span></td>
        </tr>

        <tr>
          <td class="user-cell">
            <img src="https://i.pravatar.cc/100?img=48" alt="">
            <div>
              <strong>Oliver Smith</strong>
              <span>Backend Engineer</span>
            </div>
          </td>
          <td>Node.js Developer</td>
          <td>5 Years</td>
          <td>Final Round</td>
          <td><span class="badge danger">Rejected</span></td>
        </tr>
      </tbody>
    </table>
  </div>
</section>

<!-- ================= TABLE 2 ================= -->
<section class="section">
  <h2>🧑‍💻 User Management</h2>

  <div class="table-wrapper">
    <table class="ui-table">
      <thead>
        <tr>
          <th>User</th><th>Email</th><th>Role</th><th>Status</th>
        </tr>
      </thead>

      <tbody>
        <tr><td>Aryan Sharma</td><td>aryan@mail.com</td><td>Admin</td><td>Active</td></tr>
        <tr><td>Meera Das</td><td>meera@mail.com</td><td>User</td><td>Pending</td></tr>
        <tr><td>John Carter</td><td>john@mail.com</td><td>Editor</td><td>Inactive</td></tr>
        <tr><td>Priya Nair</td><td>priya@mail.com</td><td>User</td><td>Active</td></tr>
        <tr><td>Rohan Verma</td><td>rohan@mail.com</td><td>Admin</td><td>Active</td></tr>
        <tr><td>Anjali Singh</td><td>anjali@mail.com</td><td>Editor</td><td>Active</td></tr>
      </tbody>
    </table>
  </div>
</section>

<!-- ================= TABLE 3 ================= -->
<section class="section">
  <h2>📊 Analytics Team</h2>

  <div class="table-wrapper">
    <table class="ui-table">
      <thead>
        <tr>
          <th>Name</th><th>Role</th><th>Projects</th><th>Rating</th>
        </tr>
      </thead>

      <tbody>
        <tr><td>Neha Gupta</td><td>Data Scientist</td><td>8</td><td>★★★★★</td></tr>
        <tr><td>Rohan Verma</td><td>ML Engineer</td><td>6</td><td>★★★★</td></tr>
        <tr><td>Priya Nair</td><td>AI Engineer</td><td>5</td><td>★★★★★</td></tr>
        <tr><td>Karan Mehta</td><td>Data Eng</td><td>7</td><td>★★★★</td></tr>
        <tr><td>Ishita Jain</td><td>Analyst</td><td>10</td><td>★★★★★</td></tr>
        <tr><td>Sneha Roy</td><td>Product</td><td>9</td><td>★★★★★</td></tr>
      </tbody>
    </table>
  </div>
</section>

<!-- ================= TABLE 4 ================= -->
<section class="section">
  <h2>💰 Payroll System</h2>

  <div class="table-wrapper">
    <table class="ui-table">
      <thead>
        <tr>
          <th>Name</th><th>Dept</th><th>Salary</th><th>Attendance</th>
        </tr>
      </thead>

      <tbody>
        <tr><td>Arjun</td><td>Eng</td><td>₹80,000</td><td>95%</td></tr>
        <tr><td>Meera</td><td>Design</td><td>₹65,000</td><td>88%</td></tr>
        <tr><td>Rahul</td><td>Backend</td><td>₹90,000</td><td>92%</td></tr>
        <tr><td>Sneha</td><td>Product</td><td>₹1,00,000</td><td>97%</td></tr>
        <tr><td>Vikram</td><td>DevOps</td><td>₹85,000</td><td>70%</td></tr>
      </tbody>
    </table>
  </div>
</section>

<!-- ================= TABLE 5 ================= -->
<section class="section">
  <h2>📁 Project Tracker</h2>

  <div class="table-wrapper">
    <table class="ui-table">
      <thead>
        <tr>
          <th>Project</th><th>Manager</th><th>Team</th><th>Status</th>
        </tr>
      </thead>

      <tbody>
        <tr><td>E-Commerce</td><td>Arjun</td><td>8</td><td>Active</td></tr>
        <tr><td>AI Chatbot</td><td>Priya</td><td>5</td><td>Pending</td></tr>
        <tr><td>CRM System</td><td>Rahul</td><td>6</td><td>Completed</td></tr>
        <tr><td>Portfolio UI</td><td>Sneha</td><td>4</td><td>Active</td></tr>
        <tr><td>Analytics</td><td>Karan</td><td>10</td><td>Delayed</td></tr>
      </tbody>
    </table>
  </div>
</section>

<!-- ================= TABLE 6 ================= -->
<section class="section">
  <h2>💳 Transactions</h2>

  <div class="table-wrapper">
    <table class="ui-table">
      <thead>
        <tr>
          <th>TXN ID</th><th>User</th><th>Method</th><th>Amount</th><th>Status</th>
        </tr>
      </thead>

      <tbody>
        <tr><td>#101</td><td>Arjun</td><td>UPI</td><td>₹2,500</td><td>Success</td></tr>
        <tr><td>#102</td><td>Meera</td><td>Card</td><td>₹1,200</td><td>Pending</td></tr>
        <tr><td>#103</td><td>Rahul</td><td>NetBank</td><td>₹5,000</td><td>Success</td></tr>
        <tr><td>#104</td><td>Sneha</td><td>UPI</td><td>₹750</td><td>Failed</td></tr>
        <tr><td>#105</td><td>Vikram</td><td>Card</td><td>₹9,000</td><td>Success</td></tr>
      </tbody>
    </table>
  </div>
</section>

<!-- ================= TABLE 8 ================= -->
<section class="section">
  <h2>📈 Sales Performance Dashboard</h2>

  <div class="table-wrapper">
    <table class="ui-table modern-table">
      <thead>
        <tr>
          <th>Sales Rep</th>
          <th>Region</th>
          <th>Revenue</th>
          <th>Deals Closed</th>
          <th>Growth</th>
          <th>Status</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            <div class="table-user">
              <img src="https://i.pravatar.cc/80?img=15" alt="">
              <span>Emma Watson</span>
            </div>
          </td>
          <td>North America</td>
          <td>$82,400</td>
          <td>41</td>
          <td class="positive">+18%</td>
          <td><span class="badge success">Top Performer</span></td>
        </tr>

        <tr>
          <td>
            <div class="table-user">
              <img src="https://i.pravatar.cc/80?img=21" alt="">
              <span>David Lee</span>
            </div>
          </td>
          <td>Europe</td>
          <td>$65,200</td>
          <td>35</td>
          <td class="positive">+11%</td>
          <td><span class="badge active">Active</span></td>
        </tr>

        <tr>
          <td>
            <div class="table-user">
              <img src="https://i.pravatar.cc/80?img=31" alt="">
              <span>Sophia Turner</span>
            </div>
          </td>
          <td>Asia</td>
          <td>$92,000</td>
          <td>48</td>
          <td class="positive">+25%</td>
          <td><span class="badge success">Excellent</span></td>
        </tr>

      </tbody>
    </table>
  </div>
</section>

<!-- ================= TABLE 9 ================= -->
<section class="section">
  <h2>🚀 Startup Investment Portfolio</h2>

  <div class="table-wrapper">
    <table class="ui-table glass-table">
      <thead>
        <tr>
          <th>Startup</th>
          <th>Industry</th>
          <th>Funding</th>
          <th>Investors</th>
          <th>Stage</th>
          <th>ROI</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>NeuroAI</td>
          <td>Artificial Intelligence</td>
          <td>$5M</td>
          <td>12</td>
          <td>Series A</td>
          <td class="positive">+48%</td>
        </tr>

        <tr>
          <td>EcoGrid</td>
          <td>Clean Energy</td>
          <td>$2.8M</td>
          <td>7</td>
          <td>Seed</td>
          <td class="positive">+23%</td>
        </tr>

        <tr>
          <td>HealthSync</td>
          <td>Healthcare</td>
          <td>$9.2M</td>
          <td>15</td>
          <td>Series B</td>
          <td class="negative">-4%</td>
        </tr>

      </tbody>
    </table>
  </div>
</section>

<!-- ================= TABLE 10 ================= -->
<section class="section">
  <h2>🛒 E-Commerce Orders</h2>

  <div class="table-wrapper">
    <table class="ui-table ecommerce-table">
      <thead>
        <tr>
          <th>Order</th>
          <th>Customer</th>
          <th>Product</th>
          <th>Price</th>
          <th>Delivery</th>
          <th>Payment</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>#ORD-1291</td>
          <td>Olivia Brown</td>
          <td>MacBook Pro</td>
          <td>$2,499</td>
          <td><span class="badge success">Delivered</span></td>
          <td><span class="badge active">Paid</span></td>
        </tr>

        <tr>
          <td>#ORD-1292</td>
          <td>James Wilson</td>
          <td>Gaming Monitor</td>
          <td>$799</td>
          <td><span class="badge pending">Shipping</span></td>
          <td><span class="badge success">Paid</span></td>
        </tr>

        <tr>
          <td>#ORD-1293</td>
          <td>Charlotte Hall</td>
          <td>iPhone 17</td>
          <td>$1,399</td>
          <td><span class="badge danger">Delayed</span></td>
          <td><span class="badge active">Paid</span></td>
        </tr>

      </tbody>
    </table>
  </div>
</section>

<!-- ================= TABLE 11 ================= -->
<section class="section">
  <h2>🌍 Global Traffic Sources</h2>

  <div class="table-wrapper">
    <table class="ui-table premium-table">
      <thead>
        <tr>
          <th>Source</th>
          <th>Visitors</th>
          <th>Bounce Rate</th>
          <th>Avg. Time</th>
          <th>Conversion</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Organic Search</td>
          <td>182K</td>
          <td>34%</td>
          <td>4m 22s</td>
          <td>8.4%</td>
        </tr>

        <tr>
          <td>Social Media</td>
          <td>94K</td>
          <td>42%</td>
          <td>2m 51s</td>
          <td>4.2%</td>
        </tr>

        <tr>
          <td>Email Campaign</td>
          <td>38K</td>
          <td>19%</td>
          <td>6m 10s</td>
          <td>14.7%</td>
        </tr>

        <tr>
          <td>Referral</td>
          <td>61K</td>
          <td>27%</td>
          <td>3m 42s</td>
          <td>7.1%</td>
        </tr>

      </tbody>
    </table>
  </div>
</section>

<!-- ================= TABLE 12 ================= -->
<section class="section">
  <h2>🧠 AI Model Leaderboard</h2>

  <div class="table-wrapper">
    <table class="ui-table neon-table">
      <thead>
        <tr>
          <th>Model</th>
          <th>Accuracy</th>
          <th>Latency</th>
          <th>Dataset</th>
          <th>Rank</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>GPT-X Ultra</td>
          <td>98.7%</td>
          <td>0.8s</td>
          <td>WebScale-9</td>
          <td>🥇</td>
        </tr>

        <tr>
          <td>VisionNet AI</td>
          <td>96.1%</td>
          <td>1.2s</td>
          <td>ImageNet++</td>
          <td>🥈</td>
        </tr>

        <tr>
          <td>Quantum NLP</td>
          <td>94.4%</td>
          <td>1.8s</td>
          <td>MultiLang-XL</td>
          <td>🥉</td>
        </tr>

      </tbody>
    </table>
  </div>
</section>

<!-- ================= TABLE 7 ================= -->
<section class="section">
  <h2>🎧 Support Tickets</h2>

  <div class="table-wrapper">
    <table class="ui-table">
      <thead>
        <tr>
          <th>Ticket</th><th>User</th><th>Issue</th><th>Priority</th><th>Status</th>
        </tr>
      </thead>

      <tbody>
        <tr><td>#T1</td><td>Arjun</td><td>Login Issue</td><td>High</td><td>Open</td></tr>
        <tr><td>#T2</td><td>Meera</td><td>Payment Bug</td><td>Medium</td><td>Progress</td></tr>
        <tr><td>#T3</td><td>Rahul</td><td>UI Bug</td><td>Low</td><td>Resolved</td></tr>
        <tr><td>#T4</td><td>Sneha</td><td>Account Locked</td><td>High</td><td>Open</td></tr>
      </tbody>
    </table>
  </div>
</section>

</main>
\`\`\`

#### Style Sheets:
- \`/design-tokens.css\`
- \`/dist/shared.css\`
- \`https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css\`
- \`/table.css\`

#### JavaScript Scripts:
- \`/table.js\`
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
    title: 'Tables',
    styles: ["/design-tokens.css","/dist/shared.css","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css","/table.css"],
    content: `<main class="main-home">

<!-- HERO -->
<section class="section">
  <h1>📊 Advanced Tables Dashboard</h1>
  <p>Modern SaaS-style responsive tables with real-world datasets.</p>
</section>

<!-- ================= TABLE 1 ================= -->
<section class="section">
  <h2>👨‍💼 Employee Directory</h2>

  <div class="table-wrapper">
    <table class="ui-table">
      <thead>
        <tr>
          <th>ID</th><th>Name</th><th>Role</th><th>Dept</th><th>Status</th>
        </tr>
      </thead>

      <tbody>
        <tr><td>01</td><td>Arjun Mehta</td><td>Frontend Dev</td><td>Eng</td><td>Active</td></tr>
        <tr><td>02</td><td>Meera Das</td><td>UI Designer</td><td>Design</td><td>Active</td></tr>
        <tr><td>03</td><td>Rahul Sharma</td><td>Backend Dev</td><td>Eng</td><td>Active</td></tr>
        <tr><td>04</td><td>Sneha Roy</td><td>PM</td><td>Product</td><td>Active</td></tr>
        <tr><td>05</td><td>Vikram Singh</td><td>DevOps</td><td>Infra</td><td>Inactive</td></tr>
        <tr><td>06</td><td>Ishita Jain</td><td>Analyst</td><td>Data</td><td>Active</td></tr>
        <tr><td>07</td><td>Karan Mehta</td><td>ML Eng</td><td>AI</td><td>Active</td></tr>
      </tbody>
    </table>
  </div>
</section>

<section class="section">
  <h2>📊 CRM Sales Pipeline</h2>

  <div class="table-wrapper">
    <table class="ui-table crm-table">
      <thead>
        <tr>
          <th>Lead</th>
          <th>Company</th>
          <th>Value</th>
          <th>Stage</th>
          <th>Probability</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Sarah Kim</td>
          <td>TechNova</td>
          <td>$48,000</td>
          <td>Proposal</td>
          <td>82%</td>
        </tr>
        <tr>
          <td>David Chen</td>
          <td>CloudSphere</td>
          <td>$21,000</td>
          <td>Negotiation</td>
          <td>65%</td>
        </tr>
        <tr>
          <td>Emily Stone</td>
          <td>DataWorks</td>
          <td>$87,000</td>
          <td>Qualified</td>
          <td>45%</td>
        </tr>
      </tbody>
    </table>
  </div>
</section>

<section class="section">
  <h2>💰 Subscription Revenue Dashboard</h2>

  <div class="table-wrapper">
    <table class="ui-table saas-table">
      <thead>
        <tr>
          <th>Plan</th>
          <th>Customers</th>
          <th>MRR</th>
          <th>Growth</th>
          <th>Churn</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Starter</td>
          <td>2,840</td>
          <td>$28,400</td>
          <td class="positive">+12%</td>
          <td>3.2%</td>
        </tr>
        <tr>
          <td>Pro</td>
          <td>1,120</td>
          <td>$56,000</td>
          <td class="positive">+21%</td>
          <td>1.8%</td>
        </tr>
        <tr>
          <td>Enterprise</td>
          <td>210</td>
          <td>$84,000</td>
          <td class="positive">+33%</td>
          <td>0.5%</td>
        </tr>
      </tbody>
    </table>
  </div>
</section>


<section class="section">
  <h2>⚡ API Monitoring Dashboard</h2>

  <div class="table-wrapper">
    <table class="ui-table api-table">
      <thead>
        <tr>
          <th>Service</th>
          <th>Requests</th>
          <th>Latency</th>
          <th>Error Rate</th>
          <th>Status</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Auth API</td>
          <td>2.1M</td>
          <td>120ms</td>
          <td>0.04%</td>
          <td><span class="badge success">Healthy</span></td>
        </tr>
        <tr>
          <td>Payments API</td>
          <td>920K</td>
          <td>240ms</td>
          <td>0.18%</td>
          <td><span class="badge pending">Warning</span></td>
        </tr>
        <tr>
          <td>Analytics API</td>
          <td>5.8M</td>
          <td>180ms</td>
          <td>0.03%</td>
          <td><span class="badge success">Healthy</span></td>
        </tr>
      </tbody>
    </table>
  </div>
</section>


<section class="section">
  <h2>🎨 Design System Tokens</h2>

  <div class="table-wrapper">
    <table class="ui-table design-table">
      <thead>
        <tr>
          <th>Token</th>
          <th>Value</th>
          <th>Usage</th>
          <th>Type</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>--primary</td>
          <td>#6d5dfc</td>
          <td>Buttons</td>
          <td>Color</td>
        </tr>
        <tr>
          <td>--radius-lg</td>
          <td>20px</td>
          <td>Cards</td>
          <td>Border Radius</td>
        </tr>
        <tr>
          <td>--shadow-xl</td>
          <td>0 20px 60px rgba(...)</td>
          <td>Modals</td>
          <td>Shadow</td>
        </tr>
      </tbody>
    </table>
  </div>
</section>

<section class="section">
  <h2>🤖 AI Prompt Evaluation</h2>

  <div class="table-wrapper">
    <table class="ui-table ai-table">
      <thead>
        <tr>
          <th>Prompt</th>
          <th>Model</th>
          <th>Score</th>
          <th>Tokens</th>
          <th>Cost</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Research Assistant</td>
          <td>GPT-5</td>
          <td>97.8</td>
          <td>2,140</td>
          <td>$0.09</td>
        </tr>
        <tr>
          <td>Code Reviewer</td>
          <td>Claude</td>
          <td>96.1</td>
          <td>1,880</td>
          <td>$0.07</td>
        </tr>
        <tr>
          <td>Support Agent</td>
          <td>Gemini</td>
          <td>94.3</td>
          <td>1,520</td>
          <td>$0.05</td>
        </tr>
      </tbody>
    </table>
  </div>
</section>

<section class="section">
  <h2>🛡️ Cybersecurity Threat Monitor</h2>

  <div class="table-wrapper">
    <table class="ui-table security-table">
      <thead>
        <tr>
          <th>Threat ID</th>
          <th>Type</th>
          <th>Source</th>
          <th>Severity</th>
          <th>Detected</th>
          <th>Status</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>#SEC-201</td>
          <td>Malware</td>
          <td>Russia</td>
          <td class="negative">Critical</td>
          <td>2 mins ago</td>
          <td><span class="badge danger">Blocked</span></td>
        </tr>

        <tr>
          <td>#SEC-202</td>
          <td>Phishing</td>
          <td>Unknown</td>
          <td>Medium</td>
          <td>12 mins ago</td>
          <td><span class="badge pending">Investigating</span></td>
        </tr>

        <tr>
          <td>#SEC-203</td>
          <td>DDoS</td>
          <td>Germany</td>
          <td>High</td>
          <td>35 mins ago</td>
          <td><span class="badge success">Resolved</span></td>
        </tr>
      </tbody>
    </table>
  </div>
</section>

<section class="section">
  <h2>📈 Stock Market Watchlist</h2>

  <div class="table-wrapper">
    <table class="ui-table finance-table">
      <thead>
        <tr>
          <th>Company</th>
          <th>Ticker</th>
          <th>Price</th>
          <th>Change</th>
          <th>Volume</th>
          <th>Market Cap</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Apple Inc.</td>
          <td>AAPL</td>
          <td>$232.14</td>
          <td class="positive">+2.8%</td>
          <td>54.2M</td>
          <td>$3.4T</td>
        </tr>

        <tr>
          <td>Microsoft</td>
          <td>MSFT</td>
          <td>$491.88</td>
          <td class="positive">+1.9%</td>
          <td>22.4M</td>
          <td>$3.6T</td>
        </tr>

        <tr>
          <td>Tesla</td>
          <td>TSLA</td>
          <td>$217.54</td>
          <td class="negative">-3.1%</td>
          <td>89.5M</td>
          <td>$692B</td>
        </tr>
      </tbody>
    </table>
  </div>
</section>

<section class="section">
  <h2>☁️ Cloud Infrastructure Dashboard</h2>

  <div class="table-wrapper">
    <table class="ui-table cloud-table">
      <thead>
        <tr>
          <th>Instance</th>
          <th>Region</th>
          <th>CPU</th>
          <th>Memory</th>
          <th>Uptime</th>
          <th>Status</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>prod-api-01</td>
          <td>Singapore</td>
          <td>68%</td>
          <td>8.1 GB</td>
          <td>99.99%</td>
          <td><span class="badge success">Healthy</span></td>
        </tr>

        <tr>
          <td>db-primary</td>
          <td>Mumbai</td>
          <td>82%</td>
          <td>24 GB</td>
          <td>99.95%</td>
          <td><span class="badge active">Running</span></td>
        </tr>

        <tr>
          <td>analytics-node</td>
          <td>London</td>
          <td>94%</td>
          <td>16 GB</td>
          <td>98.4%</td>
          <td><span class="badge pending">Warning</span></td>
        </tr>
      </tbody>
    </table>
  </div>
</section>

<section class="section">
  <h2>🎬 Content Publishing Calendar</h2>

  <div class="table-wrapper">
    <table class="ui-table content-table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Platform</th>
          <th>Publish Date</th>
          <th>Status</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Future of AI Agents</td>
          <td>Emma Brooks</td>
          <td>Blog</td>
          <td>Jun 12</td>
          <td><span class="badge success">Published</span></td>
        </tr>

        <tr>
          <td>SaaS Design Trends</td>
          <td>David Lee</td>
          <td>YouTube</td>
          <td>Jun 15</td>
          <td><span class="badge active">Scheduled</span></td>
        </tr>

        <tr>
          <td>Cloud Security Guide</td>
          <td>Sarah Green</td>
          <td>LinkedIn</td>
          <td>Jun 18</td>
          <td><span class="badge pending">Draft</span></td>
        </tr>
      </tbody>
    </table>
  </div>
</section>
<section class="section">
  <h2>🚚 Logistics Delivery Tracking</h2>

  <div class="table-wrapper">
    <table class="ui-table logistics-table">
      <thead>
        <tr>
          <th>Shipment</th>
          <th>Origin</th>
          <th>Destination</th>
          <th>ETA</th>
          <th>Progress</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>SHIP-991</td>
          <td>Mumbai</td>
          <td>Delhi</td>
          <td>1 Day</td>
          <td>82%</td>
        </tr>

        <tr>
          <td>SHIP-992</td>
          <td>Bangalore</td>
          <td>Kolkata</td>
          <td>3 Days</td>
          <td>45%</td>
        </tr>

        <tr>
          <td>SHIP-993</td>
          <td>Chennai</td>
          <td>Pune</td>
          <td>Today</td>
          <td>97%</td>
        </tr>
      </tbody>
    </table>
  </div>
</section>

<section class="section">
  <h2>🎯 Marketing Campaign Performance</h2>

  <div class="table-wrapper">
    <table class="ui-table campaign-table">
      <thead>
        <tr>
          <th>Campaign</th>
          <th>Channel</th>
          <th>Budget</th>
          <th>CTR</th>
          <th>Conversions</th>
          <th>ROI</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Summer Sale</td>
          <td>Google Ads</td>
          <td>$8,000</td>
          <td>7.4%</td>
          <td>1,280</td>
          <td class="positive">+32%</td>
        </tr>

        <tr>
          <td>Product Launch</td>
          <td>Instagram</td>
          <td>$5,200</td>
          <td>5.8%</td>
          <td>890</td>
          <td class="positive">+19%</td>
        </tr>

        <tr>
          <td>Brand Awareness</td>
          <td>YouTube</td>
          <td>$11,500</td>
          <td>3.9%</td>
          <td>520</td>
          <td class="negative">-4%</td>
        </tr>
      </tbody>
    </table>
  </div>
</section>


<section class="section">
  <h2>🏠 Real Estate Listings</h2>

  <div class="table-wrapper">
    <table class="ui-table realestate-table">
      <thead>
        <tr>
          <th>Property</th>
          <th>Location</th>
          <th>Type</th>
          <th>Price</th>
          <th>Status</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Skyline Residency</td>
          <td>Mumbai</td>
          <td>Apartment</td>
          <td>₹1.8 Cr</td>
          <td><span class="badge success">Available</span></td>
        </tr>

        <tr>
          <td>Green Valley</td>
          <td>Bangalore</td>
          <td>Villa</td>
          <td>₹3.2 Cr</td>
          <td><span class="badge pending">Reserved</span></td>
        </tr>

        <tr>
          <td>Urban Heights</td>
          <td>Pune</td>
          <td>Penthouse</td>
          <td>₹4.6 Cr</td>
          <td><span class="badge active">Hot Deal</span></td>
        </tr>
      </tbody>
    </table>
  </div>
</section>

<section class="section">
  <h2>🎮 Gaming Tournament Leaderboard</h2>

  <div class="table-wrapper">
    <table class="ui-table gaming-table">
      <thead>
        <tr>
          <th>Player</th>
          <th>Team</th>
          <th>Kills</th>
          <th>Matches</th>
          <th>Win Rate</th>
          <th>Rank</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>ShadowX</td>
          <td>Nova</td>
          <td>188</td>
          <td>31</td>
          <td>82%</td>
          <td>🥇</td>
        </tr>

        <tr>
          <td>Vortex</td>
          <td>Titans</td>
          <td>164</td>
          <td>29</td>
          <td>76%</td>
          <td>🥈</td>
        </tr>

        <tr>
          <td>Phoenix</td>
          <td>Inferno</td>
          <td>151</td>
          <td>28</td>
          <td>71%</td>
          <td>🥉</td>
        </tr>
      </tbody>
    </table>
  </div>
</section>

<section class="hero-section premium-hero">
  <div>
    <span class="hero-badge">
      ✦ 50+ Premium Table Components
    </span>

    <h1>
      Data Tables <span>Reimagined</span>
    </h1>

    <p>
      Advanced SaaS tables for analytics, CRM, healthcare,
      finance, HR and enterprise applications.
    </p>
  </div>

  <div class="hero-actions">
    <button class="primary-btn">
      Browse Components
    </button>

    <button class="outline-btn">
      Documentation
    </button>
  </div>
</section>

<section class="stats-grid">

  <div class="stat-card">
    <h3>24.8K</h3>
    <p>Total Records</p>
  </div>

  <div class="stat-card">
    <h3>1.2K</h3>
    <p>New Entries</p>
  </div>

  <div class="stat-card">
    <h3>98%</h3>
    <p>Data Accuracy</p>
  </div>

  <div class="stat-card">
    <h3>+18%</h3>
    <p>Growth</p>
  </div>

</section>


<div class="pagination">

  <button>
    <i class="fa-solid fa-angle-left"></i>
  </button>

  <button class="active">1</button>
  <button>2</button>
  <button>3</button>

  <button>
    <i class="fa-solid fa-angle-right"></i>
  </button>

</div>
<!-- ================= TABLE 13 ================= -->
<section class="section">
  <h2>🏥 Healthcare Patient Records</h2>

  <div class="table-wrapper">
    <table class="ui-table healthcare-table">
      <thead>
        <tr>
          <th>Patient</th>
          <th>Doctor</th>
          <th>Department</th>
          <th>Appointment</th>
          <th>Status</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td class="user-cell">
            <img src="https://i.pravatar.cc/100?img=45" alt="">
            <div>
              <strong>Daniel Brooks</strong>
              <span>ID: PT-1290</span>
            </div>
          </td>
          <td>Dr. Emily Stone</td>
          <td>Cardiology</td>
          <td>09:30 AM</td>
          <td><span class="badge success">Checked In</span></td>
        </tr>

        <tr>
          <td class="user-cell">
            <img src="https://i.pravatar.cc/100?img=51" alt="">
            <div>
              <strong>Olivia Martin</strong>
              <span>ID: PT-2201</span>
            </div>
          </td>
          <td>Dr. Jacob Reed</td>
          <td>Neurology</td>
          <td>11:15 AM</td>
          <td><span class="badge pending">Waiting</span></td>
        </tr>

        <tr>
          <td class="user-cell">
            <img src="https://i.pravatar.cc/100?img=65" alt="">
            <div>
              <strong>James Wilson</strong>
              <span>ID: PT-9081</span>
            </div>
          </td>
          <td>Dr. Sarah Lewis</td>
          <td>Orthopedics</td>
          <td>01:45 PM</td>
          <td><span class="badge danger">Cancelled</span></td>
        </tr>
      </tbody>
    </table>
  </div>
</section>

<!-- ================= TABLE 14 ================= -->
<section class="section">
  <h2>🏦 Banking Transactions Monitor</h2>

  <div class="table-wrapper">
    <table class="ui-table banking-table">
      <thead>
        <tr>
          <th>Transaction</th>
          <th>Customer</th>
          <th>Method</th>
          <th>Amount</th>
          <th>Risk Score</th>
          <th>Status</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>#TXN-8812</td>
          <td>Michael Scott</td>
          <td>Credit Card</td>
          <td>$5,200</td>
          <td class="positive">Low</td>
          <td><span class="badge success">Approved</span></td>
        </tr>

        <tr>
          <td>#TXN-8813</td>
          <td>Rachel Green</td>
          <td>Wire Transfer</td>
          <td>$12,800</td>
          <td class="negative">High</td>
          <td><span class="badge danger">Flagged</span></td>
        </tr>

        <tr>
          <td>#TXN-8814</td>
          <td>Ross Geller</td>
          <td>UPI</td>
          <td>$780</td>
          <td class="positive">Low</td>
          <td><span class="badge active">Processing</span></td>
        </tr>
      </tbody>
    </table>
  </div>
</section>

<!-- ================= TABLE 15 ================= -->
<section class="section">
  <h2>🎓 University Course Enrollment</h2>

  <div class="table-wrapper">
    <table class="ui-table education-table">
      <thead>
        <tr>
          <th>Student</th>
          <th>Course</th>
          <th>Faculty</th>
          <th>Credits</th>
          <th>Performance</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Emma Parker</td>
          <td>Machine Learning</td>
          <td>Prof. Adams</td>
          <td>4</td>
          <td>95%</td>
        </tr>

        <tr>
          <td>Liam Carter</td>
          <td>Cloud Computing</td>
          <td>Prof. Watson</td>
          <td>3</td>
          <td>89%</td>
        </tr>

        <tr>
          <td>Sophia Miller</td>
          <td>Cyber Security</td>
          <td>Prof. Clark</td>
          <td>5</td>
          <td>98%</td>
        </tr>
      </tbody>
    </table>
  </div>
</section>

<!-- ================= TABLE 16 ================= -->
<section class="section">
  <h2>📦 Warehouse Inventory Tracker</h2>

  <div class="table-wrapper">
    <table class="ui-table inventory-table">
      <thead>
        <tr>
          <th>Product</th>
          <th>SKU</th>
          <th>Warehouse</th>
          <th>Stock</th>
          <th>Availability</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Gaming Laptop</td>
          <td>SKU-9911</td>
          <td>Mumbai Hub</td>
          <td>42</td>
          <td><span class="badge success">In Stock</span></td>
        </tr>

        <tr>
          <td>Wireless Mouse</td>
          <td>SKU-2241</td>
          <td>Delhi Hub</td>
          <td>8</td>
          <td><span class="badge pending">Low Stock</span></td>
        </tr>

        <tr>
          <td>Mechanical Keyboard</td>
          <td>SKU-7281</td>
          <td>Bangalore Hub</td>
          <td>0</td>
          <td><span class="badge danger">Out of Stock</span></td>
        </tr>
      </tbody>
    </table>
  </div>
</section>

<!-- ================= TABLE 17 ================= -->
<section class="section">
  <h2>✈️ Flight Schedule Dashboard</h2>

  <div class="table-wrapper">
    <table class="ui-table flight-table">
      <thead>
        <tr>
          <th>Flight</th>
          <th>Destination</th>
          <th>Gate</th>
          <th>Departure</th>
          <th>Status</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>AI-203</td>
          <td>New York</td>
          <td>G12</td>
          <td>08:45 PM</td>
          <td><span class="badge success">Boarding</span></td>
        </tr>

        <tr>
          <td>EK-441</td>
          <td>Dubai</td>
          <td>G05</td>
          <td>10:20 PM</td>
          <td><span class="badge pending">Delayed</span></td>
        </tr>

        <tr>
          <td>BA-117</td>
          <td>London</td>
          <td>G18</td>
          <td>11:10 PM</td>
          <td><span class="badge active">On Time</span></td>
        </tr>
      </tbody>
    </table>
  </div>
</section>

<!-- ================= TABLE 18 ================= -->
<section class="section">
  <h2>💼 Recruitment Pipeline</h2>

  <div class="table-wrapper">
    <table class="ui-table recruitment-table">
      <thead>
        <tr>
          <th>Candidate</th>
          <th>Role</th>
          <th>Experience</th>
          <th>Interview</th>
          <th>Result</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td class="user-cell">
            <img src="https://i.pravatar.cc/100?img=12" alt="">
            <div>
              <strong>Lucas Reed</strong>
              <span>Frontend Engineer</span>
            </div>
          </td>
          <td>React Developer</td>
          <td>4 Years</td>
          <td>Technical Round</td>
          <td><span class="badge success">Selected</span></td>
        </tr>

        <tr>
          <td class="user-cell">
            <img src="https://i.pravatar.cc/100?img=32" alt="">
            <div>
              <strong>Emily Davis</strong>
              <span>UI/UX Designer</span>
            </div>
          </td>
          <td>Product Designer</td>
          <td>3 Years</td>
          <td>HR Round</td>
          <td><span class="badge pending">Reviewing</span></td>
        </tr>

        <tr>
          <td class="user-cell">
            <img src="https://i.pravatar.cc/100?img=48" alt="">
            <div>
              <strong>Oliver Smith</strong>
              <span>Backend Engineer</span>
            </div>
          </td>
          <td>Node.js Developer</td>
          <td>5 Years</td>
          <td>Final Round</td>
          <td><span class="badge danger">Rejected</span></td>
        </tr>
      </tbody>
    </table>
  </div>
</section>

<!-- ================= TABLE 2 ================= -->
<section class="section">
  <h2>🧑‍💻 User Management</h2>

  <div class="table-wrapper">
    <table class="ui-table">
      <thead>
        <tr>
          <th>User</th><th>Email</th><th>Role</th><th>Status</th>
        </tr>
      </thead>

      <tbody>
        <tr><td>Aryan Sharma</td><td>aryan@mail.com</td><td>Admin</td><td>Active</td></tr>
        <tr><td>Meera Das</td><td>meera@mail.com</td><td>User</td><td>Pending</td></tr>
        <tr><td>John Carter</td><td>john@mail.com</td><td>Editor</td><td>Inactive</td></tr>
        <tr><td>Priya Nair</td><td>priya@mail.com</td><td>User</td><td>Active</td></tr>
        <tr><td>Rohan Verma</td><td>rohan@mail.com</td><td>Admin</td><td>Active</td></tr>
        <tr><td>Anjali Singh</td><td>anjali@mail.com</td><td>Editor</td><td>Active</td></tr>
      </tbody>
    </table>
  </div>
</section>

<!-- ================= TABLE 3 ================= -->
<section class="section">
  <h2>📊 Analytics Team</h2>

  <div class="table-wrapper">
    <table class="ui-table">
      <thead>
        <tr>
          <th>Name</th><th>Role</th><th>Projects</th><th>Rating</th>
        </tr>
      </thead>

      <tbody>
        <tr><td>Neha Gupta</td><td>Data Scientist</td><td>8</td><td>★★★★★</td></tr>
        <tr><td>Rohan Verma</td><td>ML Engineer</td><td>6</td><td>★★★★</td></tr>
        <tr><td>Priya Nair</td><td>AI Engineer</td><td>5</td><td>★★★★★</td></tr>
        <tr><td>Karan Mehta</td><td>Data Eng</td><td>7</td><td>★★★★</td></tr>
        <tr><td>Ishita Jain</td><td>Analyst</td><td>10</td><td>★★★★★</td></tr>
        <tr><td>Sneha Roy</td><td>Product</td><td>9</td><td>★★★★★</td></tr>
      </tbody>
    </table>
  </div>
</section>

<!-- ================= TABLE 4 ================= -->
<section class="section">
  <h2>💰 Payroll System</h2>

  <div class="table-wrapper">
    <table class="ui-table">
      <thead>
        <tr>
          <th>Name</th><th>Dept</th><th>Salary</th><th>Attendance</th>
        </tr>
      </thead>

      <tbody>
        <tr><td>Arjun</td><td>Eng</td><td>₹80,000</td><td>95%</td></tr>
        <tr><td>Meera</td><td>Design</td><td>₹65,000</td><td>88%</td></tr>
        <tr><td>Rahul</td><td>Backend</td><td>₹90,000</td><td>92%</td></tr>
        <tr><td>Sneha</td><td>Product</td><td>₹1,00,000</td><td>97%</td></tr>
        <tr><td>Vikram</td><td>DevOps</td><td>₹85,000</td><td>70%</td></tr>
      </tbody>
    </table>
  </div>
</section>

<!-- ================= TABLE 5 ================= -->
<section class="section">
  <h2>📁 Project Tracker</h2>

  <div class="table-wrapper">
    <table class="ui-table">
      <thead>
        <tr>
          <th>Project</th><th>Manager</th><th>Team</th><th>Status</th>
        </tr>
      </thead>

      <tbody>
        <tr><td>E-Commerce</td><td>Arjun</td><td>8</td><td>Active</td></tr>
        <tr><td>AI Chatbot</td><td>Priya</td><td>5</td><td>Pending</td></tr>
        <tr><td>CRM System</td><td>Rahul</td><td>6</td><td>Completed</td></tr>
        <tr><td>Portfolio UI</td><td>Sneha</td><td>4</td><td>Active</td></tr>
        <tr><td>Analytics</td><td>Karan</td><td>10</td><td>Delayed</td></tr>
      </tbody>
    </table>
  </div>
</section>

<!-- ================= TABLE 6 ================= -->
<section class="section">
  <h2>💳 Transactions</h2>

  <div class="table-wrapper">
    <table class="ui-table">
      <thead>
        <tr>
          <th>TXN ID</th><th>User</th><th>Method</th><th>Amount</th><th>Status</th>
        </tr>
      </thead>

      <tbody>
        <tr><td>#101</td><td>Arjun</td><td>UPI</td><td>₹2,500</td><td>Success</td></tr>
        <tr><td>#102</td><td>Meera</td><td>Card</td><td>₹1,200</td><td>Pending</td></tr>
        <tr><td>#103</td><td>Rahul</td><td>NetBank</td><td>₹5,000</td><td>Success</td></tr>
        <tr><td>#104</td><td>Sneha</td><td>UPI</td><td>₹750</td><td>Failed</td></tr>
        <tr><td>#105</td><td>Vikram</td><td>Card</td><td>₹9,000</td><td>Success</td></tr>
      </tbody>
    </table>
  </div>
</section>

<!-- ================= TABLE 8 ================= -->
<section class="section">
  <h2>📈 Sales Performance Dashboard</h2>

  <div class="table-wrapper">
    <table class="ui-table modern-table">
      <thead>
        <tr>
          <th>Sales Rep</th>
          <th>Region</th>
          <th>Revenue</th>
          <th>Deals Closed</th>
          <th>Growth</th>
          <th>Status</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            <div class="table-user">
              <img src="https://i.pravatar.cc/80?img=15" alt="">
              <span>Emma Watson</span>
            </div>
          </td>
          <td>North America</td>
          <td>$82,400</td>
          <td>41</td>
          <td class="positive">+18%</td>
          <td><span class="badge success">Top Performer</span></td>
        </tr>

        <tr>
          <td>
            <div class="table-user">
              <img src="https://i.pravatar.cc/80?img=21" alt="">
              <span>David Lee</span>
            </div>
          </td>
          <td>Europe</td>
          <td>$65,200</td>
          <td>35</td>
          <td class="positive">+11%</td>
          <td><span class="badge active">Active</span></td>
        </tr>

        <tr>
          <td>
            <div class="table-user">
              <img src="https://i.pravatar.cc/80?img=31" alt="">
              <span>Sophia Turner</span>
            </div>
          </td>
          <td>Asia</td>
          <td>$92,000</td>
          <td>48</td>
          <td class="positive">+25%</td>
          <td><span class="badge success">Excellent</span></td>
        </tr>

      </tbody>
    </table>
  </div>
</section>

<!-- ================= TABLE 9 ================= -->
<section class="section">
  <h2>🚀 Startup Investment Portfolio</h2>

  <div class="table-wrapper">
    <table class="ui-table glass-table">
      <thead>
        <tr>
          <th>Startup</th>
          <th>Industry</th>
          <th>Funding</th>
          <th>Investors</th>
          <th>Stage</th>
          <th>ROI</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>NeuroAI</td>
          <td>Artificial Intelligence</td>
          <td>$5M</td>
          <td>12</td>
          <td>Series A</td>
          <td class="positive">+48%</td>
        </tr>

        <tr>
          <td>EcoGrid</td>
          <td>Clean Energy</td>
          <td>$2.8M</td>
          <td>7</td>
          <td>Seed</td>
          <td class="positive">+23%</td>
        </tr>

        <tr>
          <td>HealthSync</td>
          <td>Healthcare</td>
          <td>$9.2M</td>
          <td>15</td>
          <td>Series B</td>
          <td class="negative">-4%</td>
        </tr>

      </tbody>
    </table>
  </div>
</section>

<!-- ================= TABLE 10 ================= -->
<section class="section">
  <h2>🛒 E-Commerce Orders</h2>

  <div class="table-wrapper">
    <table class="ui-table ecommerce-table">
      <thead>
        <tr>
          <th>Order</th>
          <th>Customer</th>
          <th>Product</th>
          <th>Price</th>
          <th>Delivery</th>
          <th>Payment</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>#ORD-1291</td>
          <td>Olivia Brown</td>
          <td>MacBook Pro</td>
          <td>$2,499</td>
          <td><span class="badge success">Delivered</span></td>
          <td><span class="badge active">Paid</span></td>
        </tr>

        <tr>
          <td>#ORD-1292</td>
          <td>James Wilson</td>
          <td>Gaming Monitor</td>
          <td>$799</td>
          <td><span class="badge pending">Shipping</span></td>
          <td><span class="badge success">Paid</span></td>
        </tr>

        <tr>
          <td>#ORD-1293</td>
          <td>Charlotte Hall</td>
          <td>iPhone 17</td>
          <td>$1,399</td>
          <td><span class="badge danger">Delayed</span></td>
          <td><span class="badge active">Paid</span></td>
        </tr>

      </tbody>
    </table>
  </div>
</section>

<!-- ================= TABLE 11 ================= -->
<section class="section">
  <h2>🌍 Global Traffic Sources</h2>

  <div class="table-wrapper">
    <table class="ui-table premium-table">
      <thead>
        <tr>
          <th>Source</th>
          <th>Visitors</th>
          <th>Bounce Rate</th>
          <th>Avg. Time</th>
          <th>Conversion</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Organic Search</td>
          <td>182K</td>
          <td>34%</td>
          <td>4m 22s</td>
          <td>8.4%</td>
        </tr>

        <tr>
          <td>Social Media</td>
          <td>94K</td>
          <td>42%</td>
          <td>2m 51s</td>
          <td>4.2%</td>
        </tr>

        <tr>
          <td>Email Campaign</td>
          <td>38K</td>
          <td>19%</td>
          <td>6m 10s</td>
          <td>14.7%</td>
        </tr>

        <tr>
          <td>Referral</td>
          <td>61K</td>
          <td>27%</td>
          <td>3m 42s</td>
          <td>7.1%</td>
        </tr>

      </tbody>
    </table>
  </div>
</section>

<!-- ================= TABLE 12 ================= -->
<section class="section">
  <h2>🧠 AI Model Leaderboard</h2>

  <div class="table-wrapper">
    <table class="ui-table neon-table">
      <thead>
        <tr>
          <th>Model</th>
          <th>Accuracy</th>
          <th>Latency</th>
          <th>Dataset</th>
          <th>Rank</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>GPT-X Ultra</td>
          <td>98.7%</td>
          <td>0.8s</td>
          <td>WebScale-9</td>
          <td>🥇</td>
        </tr>

        <tr>
          <td>VisionNet AI</td>
          <td>96.1%</td>
          <td>1.2s</td>
          <td>ImageNet++</td>
          <td>🥈</td>
        </tr>

        <tr>
          <td>Quantum NLP</td>
          <td>94.4%</td>
          <td>1.8s</td>
          <td>MultiLang-XL</td>
          <td>🥉</td>
        </tr>

      </tbody>
    </table>
  </div>
</section>

<!-- ================= TABLE 7 ================= -->
<section class="section">
  <h2>🎧 Support Tickets</h2>

  <div class="table-wrapper">
    <table class="ui-table">
      <thead>
        <tr>
          <th>Ticket</th><th>User</th><th>Issue</th><th>Priority</th><th>Status</th>
        </tr>
      </thead>

      <tbody>
        <tr><td>#T1</td><td>Arjun</td><td>Login Issue</td><td>High</td><td>Open</td></tr>
        <tr><td>#T2</td><td>Meera</td><td>Payment Bug</td><td>Medium</td><td>Progress</td></tr>
        <tr><td>#T3</td><td>Rahul</td><td>UI Bug</td><td>Low</td><td>Resolved</td></tr>
        <tr><td>#T4</td><td>Sneha</td><td>Account Locked</td><td>High</td><td>Open</td></tr>
      </tbody>
    </table>
  </div>
</section>

</main>`
  })
};
