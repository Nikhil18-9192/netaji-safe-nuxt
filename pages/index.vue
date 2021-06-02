<template>
  <div class="home-page">
    <Hero />
    <ProductCarousel v-if="!$device.isMobile" />
    <PhoneProductCarousel v-else />
    <ButtonComponent />
  </div>
</template>

<script>
export default {
  name: 'HomePage',
}
</script>

<style lang="scss" scoped>
#home-page {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>
