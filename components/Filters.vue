<template>
  <div class="filters">
    <h2>Filters</h2>

    <!-- Filter by Category -->
    <div class="filter-section">
      <label @click="toggleCategoryDropdown" class="filter-category-label">
        Filter by category
        <i :class="isCategoryOpen ? 'arrow-up' : 'arrow-down'"></i>
      </label>
      <ul v-if="isCategoryOpen" class="categories-list">
        <li>All Categories</li>
        <li>Accessories</li>
        <li>Art & Collectibles</li>
        <li>Bags & Purses</li>
        <li>Bath & Beauty</li>
        <li>Books, Movies & Music</li>
        <li>Clothing</li>
        <li>Craft Supplies & Tools</li>
        <li>Electronics & Accessories</li>
        <li>Home & Living</li>
        <li>Jewelry</li>
        <li>Paper & Party Supplies</li>
        <li>Pet Supplies</li>
        <li>Shoes</li>
        <li>Toys & Games</li>
        <li>Weddings</li>
        <li>Baby</li>
      </ul>
    </div>

    <!-- Special Offers -->
    <div class="filter-section">
      <p>Special offers</p>
      <div>
        <input type="checkbox" id="free-shipping" />
        <label for="free-shipping">FREE shipping</label>
      </div>
      <div>
        <input type="checkbox" id="on-sale" />
        <label for="on-sale">On sale</label>
      </div>
    </div>

    <!-- Shop Location -->
    <div class="filter-section">
      <p>Shop Location</p>
      <div>
        <input type="radio" id="anywhere" name="location" checked />
        <label for="anywhere">Anywhere</label>
      </div>
      <div>
        <input type="radio" id="europe" name="location" />
        <label for="europe">Europe</label>
      </div>
      <div>
        <input type="radio" id="turkey" name="location" />
        <label for="turkey">Türkiye</label>
      </div>
      <div>
        <input type="radio" id="custom" name="location" />
        <label for="custom">Custom</label>
        <input type="text" placeholder="Enter location" class="custom-input" />
      </div>
    </div>

    <!-- Item Format -->
    <div class="filter-section">
      <p>Item format</p>
      <div>
        <input type="radio" id="all-format" name="item-format" checked />
        <label for="all-format">All</label>
      </div>
      <div>
        <input type="radio" id="physical-items" name="item-format" />
        <label for="physical-items">Physical items</label>
      </div>
      <div>
        <input type="radio" id="digital-downloads" name="item-format" />
        <label for="digital-downloads">Digital downloads</label>
      </div>
    </div>

    <!-- Buttons -->
    <div class="filter-buttons">
      <button @click="goBack" class="back-button">← Back</button>
      <button @click="applyFilters" class="apply-button">Apply</button>
      <button @click="clearFilters" class="remove-button">Remove Marks</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Filters",
  data() {
    return {
      isCategoryOpen: false,
    };
  },
  methods: {
    toggleCategoryDropdown() {
      this.isCategoryOpen = !this.isCategoryOpen;
    },
    goBack() {
      alert("Go back to the previous page.");
    },
    applyFilters() {
      alert("Filters applied.");
    },
    clearFilters() {
      alert("Filters cleared.");
    },
  },
};
</script>

<style scoped>
.filters {
  padding: 20px;
  font-family: Arial, sans-serif;
}

.filter-section {
  margin-bottom: 20px;
}

.filter-category-label {
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
}

.arrow-down::after {
  content: "▼";
  margin-left: 5px;
}

.arrow-up::after {
  content: "▲";
  margin-left: 5px;
}

.categories-list {
  list-style: none;
  padding: 0;
  margin: 10px 0 0;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.categories-list li {
  padding: 8px 10px;
  cursor: pointer;
}

.categories-list li:hover {
  background-color: #f4f4f4;
}

.filter-buttons {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.back-button,
.apply-button,
.remove-button {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
}

.back-button {
  background-color: #f4f4f4;
  color: #333;
}

.apply-button {
  background-color: black;
  color: white;
}

.remove-button {
  background-color: #ccc;
  color: black;
}

.back-button:hover,
.apply-button:hover,
.remove-button:hover {
  opacity: 0.8;
}
</style>
