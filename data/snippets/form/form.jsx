import React from 'react';

export default function form(){
  return (
    <>
      <main className="main">
          <div className="page-header">
            <h1>Forms</h1>
            <p>Explore reusable and ready-to-use form components</p>
          </div>
          <div class = "button group">
            {/*Login Form  */}
            <div class = "component-card">
              <h3>Login Form</h3>
              <form>
                <input type="email" placeholder="Email" className="form-input" required /><br /><br />
                <input type="password" placeholder="Password" className="form-input" required /><br /><br />
                <button type="submit" className="nav-btn">Login</button>
              </form>
              
              <div className="actions">
                <button className="action-btn view-btn" onclick="toggleCode('f1', this)"><i className="fa-solid fa-code"></i> View Code</button>
                <button className="action-btn copy-btn" onclick="copyCode('f1', this)"><i className="fa-solid fa-copy"></i> Copy</button>
                <button onclick="addToCollection('Login Form')">Add to My Collection</button>
              </div>
      <pre id="f1" className="code-block">
      &lt;form&gt;
        &lt;input type="email" placeholder="Email"&gt;
        &lt;input type="password" placeholder="Password"&gt;
        &lt;button&gt;Login&lt;/button&gt;
      &lt;/form&gt;
      </pre>
        </div>
      
        {/* Signup Form */}
        <div className="component-card">
          <h3>Signup Form</h3>
      
          <form>
            <input type="text" placeholder="Full Name" className="form-input"required  /><br /><br />
            <input type="email" placeholder="Email" className="form-input" required /><br /><br />
            <input type="password" placeholder="Password" className="form-input" required /><br /><br />
            <button type="submit" className="nav-btn">Signup</button>
          </form>
      
          <div className="actions">
            <button className="action-btn view-btn" onclick="toggleCode('f2', this)"><i className="fa-solid fa-code"></i> View Code</button>
            <button className="action-btn copy-btn" onclick="copyCode('f2', this)"><i className="fa-solid fa-copy"></i> Copy</button>
            <button onclick="addToCollection('Signup Form')">Add to My Collection</button>
          </div>
      
      <pre id="f2" className="code-block">
      &lt;form&gt;
        &lt;input type="text" placeholder="Full Name"&gt;
        &lt;input type="email" placeholder="Email"&gt;
        &lt;input type="password" placeholder="Password"&gt;
        &lt;button&gt;Signup&lt;/button&gt;
      &lt;/form&gt;
      </pre>
        </div>
      
        {/* Contact Form */}
        <div className="component-card">
          <h3>Contact Form</h3>
      
          <form>
            <input type="text" placeholder="Name" className="form-input" required /><br /><br />
            <input type="email" placeholder="Email" className="form-input" required /><br /><br />
            <textarea placeholder="Message" className="form-input" required></textarea><br /><br />
            <button type="submit" className="nav-btn">Send</button>
          </form>
      
          <div className="actions">
            <button className="action-btn view-btn" onclick="toggleCode('f3', this)"><i className="fa-solid fa-code"></i> View Code</button>
            <button className="action-btn copy-btn" onclick="copyCode('f3', this)"><i className="fa-solid fa-copy"></i> Copy</button>
            <button onclick="addToCollection('Contact Form')">Add to My Collection</button>
          </div>
      
      <pre id="f3" className="code-block">
      &lt;form&gt;
        &lt;input type="text" placeholder="Name"&gt;
        &lt;input type="email" placeholder="Email"&gt;
        &lt;textarea placeholder="Message"&gt;&lt;/textarea&gt;
        &lt;button&gt;Send&lt;/button&gt;
      &lt;/form&gt;
      </pre>
        </div>
      
      </div>        
        </main>
    </>
  );
}
