<template>
  <nav class="headbar">
    <!-- Logo -->
    <div class="headbar-logo">
      <img src="/etsy-logo.png" alt="Etsy Logo" />
    </div>

    <!-- Categories -->
    <div class="headbar-categories" @click="toggleDropdown">
      <button>
        <i class="fas fa-bars"></i> Categories
      </button>
      <ul v-if="dropdownVisible" class="categories-dropdown">
        <li>Accessories</li>
        <li>Art & Collectibles</li>
        <li>Baby</li>
        <li>Bags & Purses</li>
        <li>Bath & Beauty</li>
        <li>Books, Movies & Music</li>
        <li>Clothing</li>
        <li>Craft Supplies & Tools</li>
        <li>Electronics & Accessories</li>
        <li>Gifts</li>
        <li>Home & Living</li>
        <li>Jewelry</li>
      </ul>
    </div>

    <!-- Search Bar -->
    <div class="headbar-search">
      <input type="text" placeholder="Search for anything" class="search-input" />
      <button class="search-button">
        <i class="fas fa-search"></i>
      </button>
    </div>

    <!-- User Actions -->
    <div class="headbar-actions">
      <a href="#" class="signin">Sign in</a>
      <i class="fas fa-heart"></i>
      <i class="fas fa-gift"></i>
      <i class="fas fa-shopping-cart"></i>
    </div>
  </nav>

  <!-- Links Below Search Bar -->
  <div class="headbar-links">
    <a href="#">Gifts</a>
    <a href="#">Cyber Deals</a>
    <a href="#">Home Favorites</a>
    <a href="#">Fashion Finds</a>
    <a href="#">Registry</a>
  </div>
</template>

<script>
export default {
  name: "Headbar",
  data() {
    return {
      dropdownVisible: false,
    };
  },
  methods: {
    toggleDropdown() {
      this.dropdownVisible = !this.dropdownVisible;
    },
  },
};
</script>

<style scoped>
/* General Headbar Styles */
.headbar {
  display: flex;
  align-items: center;
  padding: 15px 20px;
  background-color: white;
  border-bottom: 1px solid #ddd;
  font-family: Arial, sans-serif;
  width: 100%;
}

/* Logo */
.headbar-logo {
  margin-right: 20px;
}

.headbar-logo img {
  height: 40px;
}

/* Categories */
.headbar-categories {
  position: relative;
  margin-right: 20px;
}

.headbar-categories button {
  display: flex;
  align-items: center;
  padding: 10px 15px;
  font-size: 16px;
  background: none;
  border: 1px solid #ccc;
  border-radius: 20px;
  cursor: pointer;
}

.headbar-categories i {
  margin-right: 5px;
}

.categories-dropdown {
  position: absolute;
  top: 50px;
  left: 0;
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  width: 200px;
  padding: 10px;
  z-index: 10;
  list-style: none;
}

.categories-dropdown li {
  padding: 8px 15px;
  font-size: 14px;
  cursor: pointer;
  transition: background 0.2s;
}

.categories-dropdown li:hover {
  background: #f0f0f0;
}

/* Search Bar */
.headbar-search {
  display: flex;
  align-items: center;
  flex: 1;
  max-width: 800px;
}

.search-input {
  flex: 1;
  padding: 10px 15px;
  border: 1px solid #ccc;
  border-radius: 20px 0 0 20px;
  font-size: 16px;
}

.search-button {
  padding: 10px 15px;
  background-color: orange;
  color: white;
  border: none;
  border-radius: 0 20px 20px 0;
  cursor: pointer;
}

.search-button i {
  color: white;
  font-size: 16px;
}

/* User Actions */
.headbar-actions {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-left: 20px;
}

.headbar-actions a {
  text-decoration: none;
  color: black;
  font-size: 16px;
}

.headbar-actions i {
  font-size: 20px;
  cursor: pointer;
}

/* Links Below Search Bar */
.headbar-links {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 10px;
}

.headbar-links a {
  text-decoration: none;
  color: black;
  font-size: 16px;
  font-weight: bold;
}
</style>
