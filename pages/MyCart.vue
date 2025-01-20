<template>
  <div class="cart-container">
    <h1>My Cart</h1>
    <div v-if="cartItems.length > 0">
      <div class="cart-item" v-for="(item, index) in cartItems" :key="index">
        <img :src="item.image" :alt="item.title" class="item-image" />
        <div class="item-details">
          <h2>{{ item.title }}</h2>
          <p><strong>Price:</strong> {{ item.price }} TL</p>
          <p><strong>Quantity:</strong> {{ item.quantity }}</p>
          <button @click="removeItem(index)" class="remove-button">Remove</button>
        </div>
      </div>
      <div class="cart-total">
        <h2>Total: <span class="total-price">{{ totalPrice }} TL</span></h2>
        <button class="checkout-button">Proceed to Checkout</button>
      </div>
    </div>
    <div v-else class="empty-cart">
      <p>Your cart is empty.</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useCartStore } from '~/src/stores/cartstore';

export default defineComponent({
  name: 'MyCart',
  setup() {
    const cartStore = useCartStore();

    const cartItems = computed(() => cartStore.items);
    const totalPrice = computed(() =>
      cartStore.items.reduce((total, item) => total + item.price * item.quantity, 0)
    );

    const removeItem = (index: number) => {
      cartStore.removeItem(index);
    };

    return {
      cartItems,
      totalPrice,
      removeItem,
    };
  },
});
</script>

<style scoped>
.cart-container {
  padding: 20px;
  font-family: Arial, sans-serif;
}

h1 {
  margin-bottom: 20px;
  font-size: 28px;
  color: #333;
}

.cart-item {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  padding: 10px;
  border-bottom: 1px solid #ddd;
}

.item-image {
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 10px;
  margin-right: 20px;
  border: 1px solid #ccc;
}

.item-details {
  flex: 1;
}

.item-details h2 {
  margin: 0 0 10px;
  font-size: 18px;
  color: #555;
}

.remove-button {
  padding: 8px 12px;
  background-color: #e74c3c;
  border: none;
  color: white;
  cursor: pointer;
  border-radius: 5px;
  font-size: 14px;
  transition: background-color 0.3s;
}

.remove-button:hover {
  background-color: #c0392b;
}

.cart-total {
  text-align: right;
  margin-top: 20px;
}

.total-price {
  color: #2ecc71;
  font-weight: bold;
}

.checkout-button {
  padding: 12px 20px;
  background-color: #3498db;
  border: none;
  color: white;
  cursor: pointer;
  border-radius: 5px;
  font-size: 16px;
  transition: background-color 0.3s;
}

.checkout-button:hover {
  background-color: #2980b9;
}

.empty-cart {
  text-align: center;
  font-size: 18px;
  color: #888;
}
</style>
