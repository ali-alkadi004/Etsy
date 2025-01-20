<template>
    <div class="holiday-hub">
      <div class="header">
        <p class="editors-picks">Editors' Picks</p>
        <h1 class="title">The Holiday Hub</h1>
        <button class="see-more">See more</button>
      </div>
      <div class="products">
        <div class="product" v-for="(product, index) in products" :key="index">
          <img :src="`/${product.image}`" :alt="product.title" class="product-image" />
          <div class="product-info">
            <span class="current-price">{{ product.currentPrice }}</span>
            <span v-if="product.originalPrice" class="original-price">{{ product.originalPrice }}</span>
          </div>
          <div class="favorite-icon">💖</div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "HolidayHub",
    data() {
      return {
        products: [
          { image: "cristmas.png", title: "Christmas Tree Skirt", currentPrice: "3,021.57 TL" },
          { image: "aile.png", title: "Family Portrait", currentPrice: "4,530.48 TL" },
          { image: "bracelitt.png", title: "Bracelet", currentPrice: "1,402.29 TL", originalPrice: "2,804.58 TL" },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .holiday-hub {
    padding: 20px;
  }
  
  .header {
    text-align: center;
    margin-bottom: 20px;
  }
  
  .editors-picks {
    font-size: 14px;
    color: #555;
  }
  
  .title {
    font-size: 24px;
    font-weight: bold;
  }
  
  .see-more {
    padding: 10px 20px;
    border: none;
    background-color: #f4f4f4;
    border-radius: 20px;
    cursor: pointer;
    font-size: 14px;
    margin-top: 10px;
    transition: background-color 0.3s ease, box-shadow 0.3s ease;
  }
  
  .see-more:hover {
    background-color: #e0e0e0;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }
  
  .products {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 15px; /* Reduced gap to make products closer */
    justify-content: center;
  }
  
  .product {
    position: relative;
    text-align: center;
    background: #fff;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, background-color 0.3s ease;
  }
  
  .product:hover {
    transform: scale(1.05);
    background-color: #f9f9f9;
  }
  
  .product-image {
    width: 100%;
    border-radius: 10px;
  }
  
  .favorite-icon {
    display: none;
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 20px;
    color: red;
  }
  
  .product:hover .favorite-icon {
    display: block;
  }
  
  .product-info {
    margin-top: 10px;
    display: flex;
    justify-content: center;
    align-items: baseline;
    gap: 5px;
  }
  
  .current-price {
    font-size: 16px;
    font-weight: bold;
    color: black;
  }
  
  .original-price {
    font-size: 14px;
    color: #999;
    text-decoration: line-through;
  }
  </style>
  