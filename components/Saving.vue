<template>
    <div class="saving">
      <h4 class="editor-picks">Editors’ Picks</h4>
      <h1 class="title">Cyber Savings: UP TO 60% OFF!</h1>
      <p class="subtitle">
        Score big deals from small shops on original gifts, holiday decor, and so
        much more.
      </p>
      <button
        class="shop-button"
        @mouseover="addHoverEffect"
        @mouseleave="removeHoverEffect"
      >
        Shop these unique finds
      </button>
  
      <div class="videos">
        <div class="video-item" @mouseover="playVideo($refs.girlVideo)">
          <video ref="girlVideo" class="video" loop muted>
            <source src="/girl.mp4" type="video/mp4" />
          </video>
          <div class="price">
            <span class="original-price">1,200 TL</span>
            <span class="discounted-price">900 TL</span>
          </div>
          <button class="favorite">❤️</button>
        </div>
        <div class="video-item" @mouseover="playVideo($refs.dogVideo)">
          <video ref="dogVideo" class="video" loop muted>
            <source src="/dog.mp4" type="video/mp4" />
          </video>
          <div class="price">
            <span class="original-price">2,400 TL</span>
            <span class="discounted-price">1,800 TL</span>
          </div>
          <button class="favorite">❤️</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Saving",
    methods: {
      playVideo(video) {
        video.play();
      },
      addHoverEffect(event) {
        event.target.style.filter = "brightness(90%)";
      },
      removeHoverEffect(event) {
        event.target.style.filter = "none";
      },
    },
  };
  </script>
  
  <style scoped>
  .saving {
    padding: 20px;
  }
  
  .editor-picks {
    font-size: 16px;
    color: #555;
  }
  
  .title {
    font-size: 24px;
    font-weight: bold;
    margin: 10px 0;
  }
  
  .subtitle {
    font-size: 14px;
    color: #777;
    margin-bottom: 20px;
  }
  
  .shop-button {
    background-color: #f3f3f3;
    border: 1px solid #ddd;
    border-radius: 20px;
    padding: 10px 20px;
    font-size: 14px;
    cursor: pointer;
    transition: filter 0.3s;
  }
  
  .shop-button:hover {
    filter: brightness(90%);
  }
  
  .videos {
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
  }
  
  .video-item {
    position: relative;
    width: 250px;
    height: 250px;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }
  
  .video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }
  
  .price {
    position: absolute;
    bottom: 10px;
    left: 10px;
    background-color: rgba(255, 255, 255, 0.8);
    padding: 5px 10px;
    border-radius: 5px;
    display: flex;
    gap: 5px;
    font-size: 14px;
  }
  
  .original-price {
    text-decoration: line-through;
    color: #999;
  }
  
  .discounted-price {
    font-weight: bold;
    color: #e60023;
  }
  
  .favorite {
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    font-size: 20px;
    color: #e60023;
    cursor: pointer;
  }
  
  .favorite:hover {
    transform: scale(1.2);
    transition: transform 0.3s;
  }
  </style>
  