<template>
    <section class="help-section">
      <!-- What is Etsy -->
      <div class="what-is-etsy">
        <h2>What is Etsy?</h2>
        <a href="#">Read our wonderfully weird story</a>
      </div>
  
      <!-- Community Information -->
      <div class="info-cards">
        <div class="info-card">
          <h3>A community doing good</h3>
          <p>
            Etsy is a global online marketplace, where people come together to make, sell, buy, and collect unique
            items. We’re also a community pushing for positive change for small businesses, people, and the planet.
            <a href="#">Here are some of the ways we’re making a positive impact, together.</a>
          </p>
        </div>
        <div class="info-card">
          <h3>Support independent creators</h3>
          <p>
            There’s no Etsy warehouse – just millions of people selling the things they love. We make the whole process
            easy, helping you connect directly with makers to find something extraordinary.
          </p>
        </div>
        <div class="info-card">
          <h3>Peace of mind</h3>
          <p>
            Your privacy is the highest priority of our dedicated team. And if you ever need assistance, we are always
            ready to step in for support.
          </p>
        </div>
      </div>
  
      <!-- Help Center -->
      <div class="help-center">
        <p>Have a question? Well, we’ve got some answers.</p>
        <button>Go to Help Center</button>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: "Help",
  };
  </script>
  
  <style scoped>
  .help-section {
    background-color: #fffbea;
    color: #222222;
    padding: 40px;
    font-family: Arial, sans-serif;
  }
  
  /* What is Etsy Section */
  .what-is-etsy {
    text-align: center;
    margin-bottom: 40px;
  }
  
  .what-is-etsy h2 {
    font-size: 36px;
    margin-bottom: 10px;
  }
  
  .what-is-etsy a {
    color: #222222;
    text-decoration: underline;
    font-size: 16px;
  }
  
  /* Info Cards */
  .info-cards {
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;
  }
  
  .info-card {
    flex: 1;
    margin: 0 10px;
    padding: 20px;
    background-color: #fffbea;
    border: 1px solid transparent;
  }
  
  .info-card h3 {
    font-size: 24px;
    margin-bottom: 10px;
  }
  
  .info-card p {
    font-size: 16px;
    line-height: 1.5;
    margin-bottom: 10px;
  }
  
  .info-card a {
    color: #222222;
    text-decoration: underline;
    font-weight: bold;
  }
  
  /* Help Center Section */
  .help-center {
    text-align: center;
  }
  
  .help-center p {
    font-size: 18px;
    margin-bottom: 20px;
  }
  
  .help-center button {
    background-color: transparent;
    border: 2px solid #222222;
    color: #222222;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
  }
  
  .help-center button:hover {
    background-color: #222222;
    color: white;
  }
  </style>
  