<template>
  <section class="featured-categories">
    <h2>Featured categories</h2>
    <div class="categories-container">
      <!-- First category -->
      <div class="category-card">
        <img src="/ornaments.png" alt="Christmas ornaments" class="category-image" />
        <p class="category-text">Christmas ornaments</p>
      </div>
      <!-- Second category -->
      <div class="category-card">
        <img src="/signs.png" alt="Signs" class="category-image" />
        <p class="category-text">Signs</p>
      </div>
      <!-- Third category -->
      <div class="category-card">
        <img src="/mugs.png" alt="Mugs" class="category-image" />
        <p class="category-text">Mugs</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "FeaturedCategories",
};
</script>

<style scoped>
.featured-categories {
  padding: 40px;
  text-align: center;
}

.featured-categories h2 {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 20px;
}

.categories-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 20px;
}

.category-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px; /* Adjust size */
  transition: transform 0.2s, box-shadow 0.2s;
}

.category-card:hover {
  transform: scale(1.05);
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.2);
}

.category-image {
  width: 100%; /* Image takes full width of the card */
  height: auto; /* Maintain aspect ratio */
  border-radius: 10px;
}

.category-text {
  margin-top: 10px;
  font-size: 1.1rem;
  font-weight: 500;
}
</style>
