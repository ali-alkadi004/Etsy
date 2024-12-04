<template>
    <div class="electronics-filter">
      <!-- Filters and Sorting -->
      <div class="filter-header">
        <button class="filter-button">All Filters</button>
        <div class="sorting">
          <span>1,000+ items with ads</span>
          <select class="sort-dropdown">
            <option>Sort by: Relevancy</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Customer Reviews</option>
          </select>
        </div>
      </div>
  
      <!-- Product Grid -->
      <div class="product-grid">
        <div 
          v-for="(product, index) in products" 
          :key="index" 
          class="product-card"
          @mouseover="product.showFavorite = true"
          @mouseleave="product.showFavorite = false"
        >
          <div class="product-image">
            <img :src="product.image" :alt="product.title" />
            <i 
              v-if="product.showFavorite" 
              class="fas fa-heart favorite-icon"
            ></i>
          </div>
          <div class="product-info">
            <p class="product-title">{{ product.title }}</p>
            <div class="ratings">
              <span class="stars">
                <i class="fas fa-star" v-for="n in product.rating" :key="n"></i>
              </span>
              <span class="reviews">({{ product.reviews }})</span>
              <span class="seller" v-if="product.isStarSeller">★ Star Seller</span>
            </div>
            <div class="pricing">
              <span class="discounted-price">{{ product.discountedPrice }} TL</span>
              <span class="original-price" v-if="product.originalPrice">
                {{ product.originalPrice }} TL
              </span>
              <span class="discount">{{ product.discount }}% off</span>
            </div>
            <p class="ad-text">Ad by {{ product.seller }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        products: [
          {
            title: "Serene Koi Fish Pond Desk Mat Playmat Mousepad",
            image: "/mat.png",
            rating: 5,
            reviews: 3140,
            discountedPrice: "1,012.12",
            originalPrice: "1,686.87",
            discount: 40,
            seller: "SagesOfThePast",
            isStarSeller: true,
            showFavorite: false,
          },
          {
            title: "Personalization Leather Desk Mat",
            image: "/leather.png",
            rating: 5,
            reviews: 3,
            discountedPrice: "1,309.22",
            originalPrice: "1,870.31",
            discount: 30,
            seller: "SiriusHandCrafted",
            isStarSeller: false,
            showFavorite: false,
          },
          {
            title: "Botanical Art Nouveau Desk Mat",
            image: "/klavye.png",
            rating: 5,
            reviews: 2322,
            discountedPrice: "670.07",
            originalPrice: "1,116.79",
            discount: 40,
            seller: "KaladynDesigns",
            isStarSeller: true,
            showFavorite: false,
          },
          {
            title: "T-800 Schwarzenegger Headphone Stand",
            image: "/arnold.png",
            rating: 5,
            reviews: 3896,
            discountedPrice: "2,481.76",
            seller: "SlantedDesigns",
            isStarSeller: false,
            showFavorite: false,
          },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .electronics-filter {
    margin: 20px;
    font-family: Arial, sans-serif;
  }
  
  /* Filter and Sort Section */
  .filter-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }
  
  .filter-button {
    padding: 10px 15px;
    font-size: 14px;
    background-color: white;
    border: 1px solid #ccc;
    border-radius: 20px;
    cursor: pointer;
  }
  
  .filter-button:hover {
    background-color: #f4f4f4;
  }
  
  .sorting {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  
  .sort-dropdown {
    padding: 5px 10px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  /* Product Grid */
  .product-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
  }
  
  .product-card {
    border: 1px solid #ddd;
    border-radius: 10px;
    overflow: hidden;
    background-color: white;
    transition: box-shadow 0.3s ease;
  }
  
  .product-card:hover {
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  }
  
  .product-image {
    position: relative;
    width: 100%;
    height: 200px;
    overflow: hidden;
  }
  
  .product-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }
  
  .product-image:hover img {
    transform: scale(1.1);
  }
  
  .favorite-icon {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 20px;
    color: #ff6666;
    background: white;
    border-radius: 50%;
    padding: 5px;
    display: inline-block;
  }
  
  .product-info {
    padding: 10px;
  }
  
  .product-title {
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 5px;
  }
  
  .ratings {
    display: flex;
    align-items: center;
    gap: 5px;
    margin-bottom: 5px;
  }
  
  .stars i {
    color: #ffcc00;
  }
  
  .reviews {
    font-size: 12px;
    color: #666;
  }
  
  .seller {
    font-size: 12px;
    color: #9900ff;
  }
  
  .pricing {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 5px;
  }
  
  .discounted-price {
    font-weight: bold;
    color: #333;
  }
  
  .original-price {
    text-decoration: line-through;
    color: #999;
  }
  
  .discount {
    font-size: 12px;
    color: #ff3333;
  }
  
  .ad-text {
    font-size: 12px;
    color: #666;
  }
  </style>
  