<template>
    <div class="jewelry-container">
      <h2 class="jewelry-title">Jewelry</h2>
      <p class="jewelry-description">
        Rings, earrings and necklaces to instantly raise your jewelry-box game.
      </p>
      <div class="jewelry-items">
        <div class="jewelry-item" v-for="(item, index) in visibleItems" :key="index">
          <img :src="item.image" :alt="item.title" />
          <p>{{ item.title }}</p>
        </div>
      </div>
      <button @click="toggleShowMore" class="toggle-button">
        {{ showMore ? "Show less" : `Show more (${hiddenItems.length})` }}
      </button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        items: [
          { title: "Earrings", image: "/earrings.png" },
          { title: "Necklaces", image: "/necklaces.png" },
          { title: "Rings", image: "/rings.png" },
          { title: "Watches", image: "/watches.png" },
          { title: "Smart Jewelry", image: "/smart-jewelry.png" }, // Fixed path
        ],
        showMore: false,
      };
    },
    computed: {
      visibleItems() {
        return this.showMore ? this.items : this.items.slice(0, 4);
      },
      hiddenItems() {
        return this.items.slice(4);
      },
    },
    methods: {
      toggleShowMore() {
        this.showMore = !this.showMore;
      },
    },
  };
  </script>
  
  <style scoped>
  .jewelry-container {
    text-align: center;
    margin: 20px;
  }
  
  .jewelry-title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  
  .jewelry-description {
    font-size: 16px;
    color: #666;
    margin-bottom: 20px;
  }
  
  .jewelry-items {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 15px;
  }
  
  .jewelry-item {
    width: 150px;
    text-align: center;
  }
  
  .jewelry-item img {
    width: 100%;
    border-radius: 10px;
    transition: transform 0.3s ease;
  }
  
  .jewelry-item img:hover {
    transform: scale(1.1);
  }
  
  .jewelry-item p {
    margin-top: 10px;
    font-weight: bold;
  }
  
  .toggle-button {
    margin-top: 20px;
    padding: 10px 20px;
    font-size: 16px;
    color: #fff;
    background-color: #007bff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .toggle-button:hover {
    background-color: #0056b3;
  }
  </style>
  