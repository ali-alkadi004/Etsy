<template>
    <div class="signin-container">
      <div class="signin-header">
        <h1>Sign in</h1>
        <button class="register-button">Register</button>
      </div>
      <form class="signin-form">
        <label for="email">Email address</label>
        <input id="email" type="email" placeholder="Enter your email" />
  
        <label for="password">Password</label>
        <input id="password" type="password" placeholder="Enter your password" />
  
        <div class="stay-signed-in">
          <input type="checkbox" id="stay-signed-in" />
          <label for="stay-signed-in">Stay signed in</label>
          <a href="#" class="forgot-password">Forgot your password?</a>
        </div>
  
        <button type="submit" class="signin-button">Sign in</button>
      </form>
  
      <a href="#" class="trouble-signing-in">Trouble signing in?</a>
  
      <div class="or-divider">
        <span>OR</span>
      </div>
  
      <div class="social-login">
        <button class="social-button google">
          <i class="fab fa-google"></i> Continue with Google
        </button>
        <button class="social-button facebook">
          <i class="fab fa-facebook-f"></i> Continue with Facebook
        </button>
        <button class="social-button apple">
          <i class="fab fa-apple"></i> Continue with Apple
        </button>
      </div>
  
      <p class="disclaimer">
        By clicking Sign in, Continue with Google, Facebook, or Apple, you agree
        to Etsy's <a href="#">Terms of Use</a> and <a href="#">Privacy Policy</a>.
        Etsy may send you communications; you may change your preferences in your
        account settings. We'll never post without your permission.
      </p>
    </div>
  </template>
  
  <script>
  export default {
    name: "SignIn",
  };
  </script>
  
  <style scoped>
  .signin-container {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    font-family: Arial, sans-serif;
  }
  
  .signin-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }
  
  .register-button {
    background: none;
    border: 2px solid black;
    border-radius: 20px;
    padding: 5px 15px;
    cursor: pointer;
  }
  
  .register-button:hover {
    background: #f4f4f4;
  }
  
  .signin-form {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  
  input[type="email"],
  input[type="password"] {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
  }
  
  .stay-signed-in {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .forgot-password {
    font-size: 14px;
    color: #007bff;
    text-decoration: none;
  }
  
  .forgot-password:hover {
    text-decoration: underline;
  }
  
  .signin-button {
    background: black;
    color: white;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
  }
  
  .signin-button:hover {
    background: #333;
  }
  
  .trouble-signing-in {
    display: block;
    margin-top: 10px;
    font-size: 14px;
    text-align: center;
    color: #007bff;
    text-decoration: none;
  }
  
  .trouble-signing-in:hover {
    text-decoration: underline;
  }
  
  .or-divider {
    text-align: center;
    margin: 20px 0;
    position: relative;
  }
  
  .or-divider span {
    background: white;
    padding: 0 10px;
    position: relative;
    z-index: 1;
  }
  
  .or-divider:before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    height: 1px;
    background: #ccc;
  }
  
  .social-login {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  
  .social-button {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
    cursor: pointer;
    background: white;
  }
  
  .social-button i {
    font-size: 20px;
  }
  
  .social-button.google:hover {
    border-color: #4285f4;
  }
  
  .social-button.facebook:hover {
    border-color: #3b5998;
  }
  
  .social-button.apple:hover {
    border-color: black;
  }
  
  .disclaimer {
    font-size: 12px;
    margin-top: 20px;
    text-align: center;
    color: #555;
  }
  
  .disclaimer a {
    color: #007bff;
    text-decoration: none;
  }
  
  .disclaimer a:hover {
    text-decoration: underline;
  }
  </style>
  