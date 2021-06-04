<template>
  <div id="logo-images">
    <marquee behavior="" direction="">
      <div class="container">
        <div class="image" v-for="(src, i) in logos" :key="i">
          <img :src="src" alt="" />
        </div>
      </div>
    </marquee>
  </div>
</template>

<script>
export default {
  name: 'LogoImagesComponent',
  data() {
    return {
      logos: [
        '/favicon.png',
        '/favicon.png',
        '/favicon.png',
        '/favicon.png',
        '/favicon.png',
        '/favicon.png',
        '/favicon.png',
        '/favicon.png',
        '/favicon.png',
        '/favicon.png',
        '/favicon.png',
        '/favicon.png',
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
#logo-images {
  position: relative;
  width: 100%;
  height: 100%;
  margin-top: 75px;
  .container {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 30px;
    .image {
      width: 120px;
      min-width: 120px;
      height: 120px;
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
  }
}
</style>