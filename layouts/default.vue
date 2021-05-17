<template>
  <div>
    <Toolbar />
    <Nuxt />
    <Footer />
  </div>
</template>
<script>
export default {
  mounted() {
    window.addEventListener('scroll', (e) => {
      this.$store.commit('SET_SCROLL_POSITION', parseInt(window.scrollY))
    })
  },
}
</script>
<style>
html {
  font-family: 'Spartan', sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
body {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
a {
  text-decoration: none;
  color: #000;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
.my-page-enter-active,
.my-page-leave-active {
  transition: all 0.3s ease;
}
.my-page-enter,
.my-page-leave-active {
  opacity: 0;
  transform: translateX(-10px);
}
</style>
