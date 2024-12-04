<template>
  <footer class="footer">
    <!-- Email Subscription Section -->
    <div class="email-section">
      <p>
        Yes! Send me exclusive offers, unique gift ideas, and personalized tips for shopping and selling on Etsy.
      </p>
      <div class="email-subscribe">
        <input type="email" placeholder="Enter your email" />
        <button>Subscribe</button>
      </div>
    </div>

    <!-- Powered by Renewable Electricity -->
    <div class="powered-section">
      <p>
        <i class="fas fa-globe"></i> Etsy is powered by 100% renewable electricity.
      </p>
    </div>

    <!-- Main Footer Section -->
    <div class="main-footer">
      <div class="app-section">
        <img src="/etsyapp-logo.png" alt="Etsy Logo" />
        <button>Download the Etsy App</button>
      </div>

      <div class="footer-links">
        <div>
          <h4>Shop</h4>
          <ul>
            <li><a href="#">Gift cards</a></li>
            <li><a href="#">Etsy Registry</a></li>
            <li><a href="#">Sitemap</a></li>
            <li><a href="#">Etsy blog</a></li>
            <li><a href="#">Etsy United Kingdom</a></li>
            <li><a href="#">Etsy Germany</a></li>
            <li><a href="#">Etsy Canada</a></li>
          </ul>
        </div>
        <div>
          <h4>Sell</h4>
          <ul>
            <li><a href="#">Sell on Etsy</a></li>
            <li><a href="#">Teams</a></li>
            <li><a href="#">Forums</a></li>
            <li><a href="#">Affiliates & Creators</a></li>
          </ul>
        </div>
        <div>
          <h4>About</h4>
          <ul>
            <li><a href="#">Etsy, Inc.</a></li>
            <li><a href="#">Policies</a></li>
            <li><a href="#">Investors</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Press</a></li>
            <li><a href="#">Impact</a></li>
            <li><a href="#">Legal imprint</a></li>
          </ul>
        </div>
        <div>
          <h4>Help</h4>
          <ul>
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Privacy settings</a></li>
          </ul>
        </div>
      </div>

      <!-- Social Media Icons -->
      <div class="social-section">
        <a href="#"><i class="fab fa-instagram"></i></a>
        <a href="#"><i class="fab fa-facebook"></i></a>
        <a href="#"><i class="fab fa-pinterest"></i></a>
        <a href="#"><i class="fab fa-twitter"></i></a>
        <a href="#"><i class="fab fa-youtube"></i></a>
      </div>
    </div>

    <!-- Bottom Footer Section -->
    <div class="bottom-footer">
      <p>
        <span>🇹🇷 Türkiye | English (US) | ₺ (TRY)</span>
        © 2024 Etsy, Inc. <a href="#">Terms of Use</a> <a href="#">Privacy</a> <a href="#">Interest-based ads</a>
        <a href="#">Local Shops</a> <a href="#">Regions</a>
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
.footer {
  font-family: Arial, sans-serif;
}

/* Email Section */
.email-section {
  background-color: #e8f6ff;
  padding: 20px;
  text-align: center;
}

.email-section p {
  font-size: 14px;
  margin-bottom: 10px;
  color: #333;
}

.email-subscribe {
  display: inline-flex;
  align-items: center;
  gap: 10px;
}

.email-subscribe input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 300px;
}

.email-subscribe button {
  padding: 10px 20px;
  background-color: #333;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

/* Powered Section */
.powered-section {
  background-color: #4a6ee7;
  color: white;
  padding: 10px 20px;
  text-align: center;
}

/* Main Footer Section */
.main-footer {
  display: flex;
  justify-content: space-around;
  padding: 40px;
  background-color: #003a72;
  color: white;
}

.app-section {
  text-align: center;
}

.app-section button {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #3367d6;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.footer-links {
  display: flex;
  gap: 20px;
}

.footer-links h4 {
  font-size: 16px;
  margin-bottom: 10px;
}

.footer-links ul {
  list-style: none;
  padding: 0;
}

.footer-links ul li {
  margin-bottom: 5px;
}

.footer-links ul li a {
  color: white;
  text-decoration: none;
}

.footer-links ul li a:hover {
  text-decoration: underline;
}

.social-section {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 20px;
}

.social-section a {
  color: white;
  font-size: 20px;
}

/* Bottom Footer */
.bottom-footer {
  background-color: black;
  color: white;
  padding: 10px 20px;
  text-align: center;
}

.bottom-footer p {
  font-size: 14px;
}

.bottom-footer a {
  color: #ccc;
  text-decoration: none;
  margin: 0 5px;
}

.bottom-footer a:hover {
  text-decoration: underline;
}
</style>
