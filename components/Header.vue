<template>
  <div id="header">
    <h1 class="heading">A complete System For your security needs</h1>
  </div>
</template>

<script>
export default {
  name: 'HeaderComponent',
}
</script>

<style lang="scss" scoped>
#header {
  position: relative;
  width: 100%;
  height: 559px;
  background-image: url('/hero-bg.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;

  .heading {
    font-weight: normal;
    font-size: 36px;
    line-height: 151.5%;
    text-align: center;
    letter-spacing: 0.035em;
    text-transform: uppercase;
    width: 500px;
    margin-top: 170px;
  }
}
</style>