<template>
  <div id="header">
    <h1 class="heading">A complete System For your security needs</h1>
    <img class="image" src="/shild.png" alt="" />
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
  margin-top: -102px;
  @include for-phone-only {
    height: 350px;
  }
  .heading {
    font-weight: 400;
    font-size: 36px;
    line-height: 151.5%;
    text-align: center;
    letter-spacing: 0.035em;
    text-transform: uppercase;
    width: 500px;
    margin-top: 170px;
    @include for-phone-only {
      font-size: 18px;
      width: 219px;
      margin-top: 200px;
    }
    @include for-tablet-only {
      margin-top: 210px;
    }
  }
  .image {
    position: absolute;
    bottom: -50px;
    transform: translate(-50% -50%);
    width: 169px;
    height: 216px;
    object-fit: contain;
    @include for-phone-only {
      width: 66px;
      height: 76px;
      bottom: -35px;
    }
  }
}
</style>