<template>
    <div class="special-shop">
      <h2>Shop extraordinary items at special prices</h2>
      <div class="items-container">
        <!-- Gift for Grandparents -->
        <div class="item">
          <img src="/family.png" alt="Gifts for Grandparents" />
          <p class="item-title">Gifts for Grandparents</p>
          <p class="item-discount">up to 60% off</p>
        </div>
        
        <!-- Gift for Kids -->
        <div class="item">
          <img src="/baby.png" alt="Gifts for Kids" />
          <p class="item-title">Gifts for Kids</p>
          <p class="item-discount">up to 60% off</p>
        </div>
        
        <!-- Gift for Him -->
        <div class="item">
          <img src="/zenci.png" alt="Gifts for Him" />
          <p class="item-title">Gifts for Him</p>
          <p class="item-discount">up to 60% off</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "SpecialShop",
  };
  </script>
  
  <style scoped>
  .special-shop {
    text-align: center;
    padding: 20px;
    background-color: #ffffff;
  }
  
  .special-shop h2 {
    font-size: 24px;
    margin-bottom: 20px;
    font-weight: bold;
  }
  
  .items-container {
    display: flex;
    justify-content: center;
    gap: 20px;
  }
  
  .item {
    text-align: center;
    max-width: 200px;
  }
  
  .item img {
    width: 100%;
    border-radius: 10px;
  }
  
  .item-title {
    margin-top: 10px;
    font-weight: bold;
  }
  
  .item-discount {
    color: #888;
    font-size: 14px;
  }
  </style>
  