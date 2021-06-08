<template>
  <div
    id="phone-toolbar"
    :style="[
      scrollPosition > 0
        ? { 'border-bottom': '6px solid #cb2929' }
        : { 'border-bottom': '11px solid #cb2929' },
    ]"
  >
    <div class="blur"></div>
    <div class="logo">
      <nuxt-link to="/">
        <img src="/logo.jpg" alt="logo image" />
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PhoneToolbarComponent',
  computed: {
    scrollPosition: function () {
      return this.$store.getters.getScrollPosition
    },
  },
}
</script>

<style lang="scss" scoped>
#phone-toolbar {
  position: fixed;
  top: 0;
  width: 100%;
  backdrop-filter: blur(53px);
  height: 69px;
  display: none;
  z-index: 2000;
  padding: 0 20px;
  transition: 0.3s ease all;
  @include for-phone-only {
    display: flex;
    align-items: center;
  }
  @include for-tablet-only {
    display: flex;
    align-items: center;
    padding: 0 60px;
  }
  @include for-tablet-landscape-up {
    display: flex;
    align-items: center;
    padding: 0 60px;
  }
  @include for-desktop-up {
    display: none;
  }
  .blur {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(255, 255, 255, 0.6);
    z-index: -1;
  }

  .logo {
    width: 50%;
    img {
      width: 178px;
      height: 48px;
      object-fit: contain;
    }
  }
}
</style>