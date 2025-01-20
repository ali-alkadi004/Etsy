<template>
    <div class="favorite-items">
      <div class="header">
        <h1>Your Favorites</h1>
        <p>About • Public • 1 item • <a href="#">Edit</a></p>
        <div class="create-group">
          <a href="#">+ Create new</a>
        </div>
      </div>
  
      <div class="search-section">
        <input type="text" placeholder="Search your favorites" />
        <i class="fas fa-search"></i>
        <div class="toggle-group">
          <span>Group Favorites</span>
          <button @click="toggleGroup" :class="{ active: isGrouped }">
            <i class="fas" :class="isGrouped ? 'fa-check' : 'fa-times'"></i>
          </button>
        </div>
      </div>
  
      <div class="favorite-item">
        <div class="item-image">
          <img src="/chum.png" alt="Favorite Item" />
          <span class="in-carts">In 20+ carts</span>
          <span class="rating">4.7</span>
        </div>
        <div class="item-details">
          <h2>Unique Lightning McQueen Cars Shoes</h2>
          <p>
            <span class="discounted-price">1,716.57 TL</span>
            <span class="original-price">2,641.88 TL</span>
            <span class="discount">35% off</span>
          </p>
          <p>Shipping: 263.77 TL</p>
          <p>Est. delivery: Dec 16-27</p>
          <p>Returns: Not accepted</p>
          <button class="multiple-options">Multiple options</button>
          <button class="add-to-cart" @click="addToCart">Add to Cart</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "FavoriteItems",
    data() {
      return {
        isGrouped: false,
      };
    },
    methods: {
      toggleGroup() {
        this.isGrouped = !this.isGrouped;
      },
      addToCart() {
        const favoriteItem = {
          name: "Unique Lightning McQueen Cars Shoes",
          price: 1716.57,
          quantity: 1,
          image: "/chum.png",
        };
        this.$emit("add-to-cart", favoriteItem);
      },
    },
  };
  </script>
  
  <style scoped>
  .favorite-items {
    padding: 20px;
  }
  
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .header a {
    color: #007bff;
    text-decoration: none;
  }
  
  .search-section {
    display: flex;
    align-items: center;
    margin: 20px 0;
  }
  
  .search-section input {
    flex: 1;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 20px;
  }
  
  .search-section .toggle-group {
    display: flex;
    align-items: center;
    margin-left: 20px;
  }
  
  .toggle-group span {
    margin-right: 10px;
  }
  
  .toggle-group button {
    background: #f4f4f4;
    border: 1px solid #ccc;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  
  .toggle-group button.active {
    background: #007bff;
    color: white;
  }
  
  .favorite-item {
    display: flex;
    gap: 20px;
    align-items: center;
    margin-top: 20px;
  }
  
  .item-image {
    position: relative;
  }
  
  .item-image img {
    width: 150px;
    border-radius: 10px;
  }
  
  .item-image .in-carts {
    position: absolute;
    top: 5px;
    left: 5px;
    background: rgba(0, 0, 0, 0.7);
    color: white;
    padding: 2px 5px;
    font-size: 12px;
    border-radius: 5px;
  }
  
  .item-image .rating {
    position: absolute;
    bottom: 5px;
    right: 5px;
    background: black;
    color: white;
    padding: 2px 5px;
    font-size: 12px;
    border-radius: 5px;
  }
  
  .item-details h2 {
    font-size: 18px;
  }
  
  .item-details p {
    margin: 5px 0;
  }
  
  .discounted-price {
    color: green;
    font-weight: bold;
  }
  
  .original-price {
    text-decoration: line-through;
    color: gray;
    margin-left: 10px;
  }
  
  .discount {
    color: orange;
    margin-left: 10px;
  }
  
  .add-to-cart {
    background: #007bff;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .multiple-options {
    background: #f4f4f4;
    border: 1px solid #ccc;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
  }
  </style>
  