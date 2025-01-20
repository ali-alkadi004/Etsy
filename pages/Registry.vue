<template>
    <div class="registry-container">
      <!-- Header Section -->
      <div class="registry-header">
        <h1>Etsy Registry</h1>
        <p>Make every milestone meaningful with extra-special gifts.</p>
        <button class="find-registry-button">Find a registry ➔</button>
      </div>
  
      <!-- Cards Section -->
      <div class="registry-cards">
        <!-- Wedding Registry -->
        <div class="registry-card">
          <img src="/public/weddingg.png" alt="Wedding Registry" />
          <h2>Wedding Registry</h2>
          <p>Start your new life together with personalized pieces, well-crafted housewares, and more.</p>
          <button class="get-started-button">Get started</button>
        </div>
  
        <!-- Baby Registry -->
        <div class="registry-card">
          <img src="/public/babyy.png" alt="Baby Registry" />
          <h2>Baby Registry</h2>
          <p>Welcome your little one to the world with custom items and the cutest, cuddliest creations.</p>
          <button class="get-started-button">Get started</button>
        </div>
  
        <!-- Gift Registry -->
        <div class="registry-card">
          <img src="/public/gift.png" alt="Gift Registry" />
          <h2>Gift Registry</h2>
          <p>Celebrate any occasion with a wishlist of incredible items for every budget—straight from independent sellers.</p>
          <button class="get-started-button">Get started</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Registry",
  };
  </script>
  
  <style scoped>
  /* Container Styles */
  .registry-container {
    background-color: #213631;
    padding: 50px 20px;
    color: #ffffff;
    font-family: Arial, sans-serif;
  }
  
  /* Header Section */
  .registry-header {
    text-align: center;
    margin-bottom: 30px;
  }
  
  .registry-header h1 {
    font-size: 36px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  
  .registry-header p {
    font-size: 18px;
    margin-bottom: 20px;
  }
  
  .find-registry-button {
    background-color: transparent;
    color: #ffffff;
    border: 2px solid #ffffff;
    padding: 10px 20px;
    border-radius: 25px;
    font-size: 16px;
    cursor: pointer;
    transition: 0.3s ease;
  }
  
  .find-registry-button:hover {
    background-color: #ffffff;
    color: #213631;
  }
  
  /* Cards Section */
  .registry-cards {
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
  }
  
  /* Individual Card */
  .registry-card {
    background-color: #ffffff;
    color: #213631;
    border-radius: 10px;
    overflow: hidden;
    text-align: center;
    width: 300px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .registry-card img {
    width: 100%;
    height: auto;
  }
  
  .registry-card h2 {
    font-size: 20px;
    font-weight: bold;
    margin: 15px 0;
  }
  
  .registry-card p {
    font-size: 14px;
    padding: 0 15px 15px 15px;
  }
  
  .get-started-button {
    background-color: transparent;
    color: #213631;
    border: 2px solid #213631;
    padding: 10px 20px;
    margin-bottom: 20px;
    border-radius: 25px;
    font-size: 14px;
    cursor: pointer;
    transition: 0.3s ease;
  }
  
  .get-started-button:hover {
    background-color: #213631;
    color: #ffffff;
  }
  </style>
  