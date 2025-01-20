<template>
  <div class="special-shop">
    <h2>Shop Extraordinary Items at Special Prices</h2>
    <div class="items-container">
      <div 
        class="item" 
        v-for="(item, index) in items" 
        :key="index"
      >
        <img :src="item.image" :alt="item.title" />
        <p class="item-title">{{ item.title }}</p>
        <p class="item-discount">{{ item.discount }}</p>
        <button class="add-to-cart" @click="addToCart(item)">
          Add to Cart
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useCartStore } from '~/src/stores/cartstore';

export default defineComponent({
  name: 'SpecialShop',
  setup() {
    const cartStore = useCartStore();

    const addToCart = (item: any) => {
      cartStore.addItem({
        title: item.title,
        price: item.price,
        quantity: 1,
        image: item.image,
      });
    };

    return {
      items: [
        {
          image: '/family.png',
          title: 'Gifts for Grandparents',
          discount: 'Up to 60% off',
          price: 150,
        },
        {
          image: '/baby.png',
          title: 'Gifts for Kids',
          discount: 'Up to 60% off',
          price: 80,
        },
        {
          image: '/zenci.png',
          title: 'Gifts for Him',
          discount: 'Up to 60% off',
          price: 250,
        },
      ],
      addToCart,
    };
  },
});
</script>

<style scoped>
.special-shop {
  text-align: center;
  padding: 40px;
  background-color: #f8f8f8;
  font-family: Arial, sans-serif;
}

.special-shop h2 {
  font-size: 28px;
  margin-bottom: 30px;
  font-weight: bold;
  color: #333;
}

.items-container {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

.item {
  text-align: center;
  max-width: 250px;
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.item:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
}

.item img {
  width: 100%;
  border-radius: 10px;
}

.item-title {
  margin-top: 15px;
  font-weight: bold;
  font-size: 18px;
  color: #444;
}

.item-discount {
  color: #666;
  font-size: 16px;
  margin-top: 5px;
  font-style: italic;
}

.add-to-cart {
  margin-top: 10px;
  padding: 10px 15px;
  font-size: 14px;
  color: white;
  background-color: #3498db;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.add-to-cart:hover {
  background-color: #2980b9;
}
</style>
