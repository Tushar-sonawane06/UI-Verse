<template>
<main class="main">
    <div class="page-header">
      <h1>Forms</h1>
      <p>Explore reusable and ready-to-use form components</p>
    </div>
    <div class = "button group">
      <!--Login Form  -->
      <div class = "component-card">
        <h3>Login Form</h3>
        <form>
          <input type="email" placeholder="Email" class="form-input" required /><br><br>
          <input type="password" placeholder="Password" class="form-input" required /><br><br>
          <button type="submit" class="nav-btn">Login</button>
        </form>
        
        <div class="actions">
          <button class="action-btn view-btn" onclick="toggleCode('f1', this)"><i class="fa-solid fa-code"></i> View Code</button>
          <button class="action-btn copy-btn" onclick="copyCode('f1', this)"><i class="fa-solid fa-copy"></i> Copy</button>
          <button onclick="addToCollection('Login Form')">Add to My Collection</button>
        </div>
<pre id="f1" class="code-block">
&lt;form&gt;
  &lt;input type="email" placeholder="Email"&gt;
  &lt;input type="password" placeholder="Password"&gt;
  &lt;button&gt;Login&lt;/button&gt;
&lt;/form&gt;
</pre>
  </div>

  <!-- Signup Form -->
  <div class="component-card">
    <h3>Signup Form</h3>

    <form>
      <input type="text" placeholder="Full Name" class="form-input"required ><br><br>
      <input type="email" placeholder="Email" class="form-input" required /><br><br>
      <input type="password" placeholder="Password" class="form-input" required /><br><br>
      <button type="submit" class="nav-btn">Signup</button>
    </form>

    <div class="actions">
      <button class="action-btn view-btn" onclick="toggleCode('f2', this)"><i class="fa-solid fa-code"></i> View Code</button>
      <button class="action-btn copy-btn" onclick="copyCode('f2', this)"><i class="fa-solid fa-copy"></i> Copy</button>
      <button onclick="addToCollection('Signup Form')">Add to My Collection</button>
    </div>

<pre id="f2" class="code-block">
&lt;form&gt;
  &lt;input type="text" placeholder="Full Name"&gt;
  &lt;input type="email" placeholder="Email"&gt;
  &lt;input type="password" placeholder="Password"&gt;
  &lt;button&gt;Signup&lt;/button&gt;
&lt;/form&gt;
</pre>
  </div>

  <!-- Contact Form -->
  <div class="component-card">
    <h3>Contact Form</h3>

    <form>
      <input type="text" placeholder="Name" class="form-input" required><br><br>
      <input type="email" placeholder="Email" class="form-input" required><br><br>
      <textarea placeholder="Message" class="form-input" required></textarea><br><br>
      <button type="submit" class="nav-btn">Send</button>
    </form>

    <div class="actions">
      <button class="action-btn view-btn" onclick="toggleCode('f3', this)"><i class="fa-solid fa-code"></i> View Code</button>
      <button class="action-btn copy-btn" onclick="copyCode('f3', this)"><i class="fa-solid fa-copy"></i> Copy</button>
      <button onclick="addToCollection('Contact Form')">Add to My Collection</button>
    </div>

<pre id="f3" class="code-block">
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
</template>

<script>
export default { name: 'Form' }
</script>
