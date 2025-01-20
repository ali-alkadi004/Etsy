<template>
    <div class="dashboard-container">
      <header class="dashboard-header">
        <h1>Welcome, {{ userName }}</h1>
        <button @click="handleSignOut" class="signout-button">Sign Out</button>
      </header>
      <main class="dashboard-content">
        <h2>Your Dashboard</h2>
        <p>Explore the platform and manage your account.</p>
        <div class="actions">
          <button @click="goToShop" class="action-button">Shop Now</button>
          <button @click="goToProfile" class="action-button">View Profile</button>
        </div>
      </main>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref, onMounted } from "vue";
  import { auth } from "~/src/firebase";
  import { signOut } from "firebase/auth";
  import { useRouter } from "vue-router";
  
  export default defineComponent({
    name: "Dashboard",
    setup() {
      const router = useRouter();
      const userName = ref<string | null>("");
  
      onMounted(() => {
        const user = auth.currentUser;
        if (user) {
          userName.value = user.displayName || "User";
        } else {
          router.push("/signin"); // Eğer kullanıcı giriş yapmadıysa giriş sayfasına yönlendir.
        }
      });
  
      const handleSignOut = async () => {
        try {
          await signOut(auth);
          router.push("/signin");
        } catch (error) {
          console.error("Sign out failed:", error);
        }
      };
  
      const goToShop = () => {
        router.push("/shop");
      };
  
      const goToProfile = () => {
        router.push("/profile");
      };
  
      return {
        userName,
        handleSignOut,
        goToShop,
        goToProfile,
      };
    },
  });
  </script>
  
  <style scoped>
  .dashboard-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    font-family: Arial, sans-serif;
  }
  
  .dashboard-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }
  
  .signout-button {
    background: #f44;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 10px 15px;
    cursor: pointer;
  }
  
  .dashboard-content {
    text-align: center;
  }
  
  .action-button {
    margin: 10px;
    padding: 10px 15px;
    background-color: #008cba;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .action-button:hover {
    background-color: #005f75;
  }
  </style>
  