<template>
  <div>
    <ImageModal
      class="image-modal"
      v-if="$store.state.imageModal"
      :image="$store.state.productImg"
      @dismiss="$store.commit('toggleImageModal')"
    />
    <Toolbar />
    <PhoneToolbar />
    <MenuButton />
    <transition name="slide">
      <PhoneNavigation v-if="menuState" />
    </transition>
    <div
      v-if="menuState"
      class="menuModal"
      @click="$store.commit('toggleMenuState')"
    ></div>
    <Nuxt />
    <Footer />
  </div>
</template>
<script>
export default {
  data() {
    return {
      menuState: false,
    }
  },
  mounted() {
    this.$gtag.pageview(this.$route.fullPath)
    window.addEventListener('scroll', (e) => {
      this.$store.commit('SET_SCROLL_POSITION', parseInt(window.scrollY))
    })
  },
  computed: {
    storeMenuState: function () {
      return this.$store.getters.getMenuState
    },
  },
  watch: {
    storeMenuState: function (newState) {
      this.menuState = newState
    },
  },
}
</script>
<style lang="scss">
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
.nuxt-link-exact-active {
  color: $primary !important;
}
.menuModal {
  position: fixed;
  width: 100%;
  height: 100vh;
  z-index: 100;
  background: transparent;
  top: 0;
  left: 0;
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

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.9s cubic-bezier(0.16, 1, 0.5, 1);
}
.slide-enter,
.slide-leave-active {
  transform: translateX(100%);
}
</style>
