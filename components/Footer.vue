<template>
  <div id="footer">
    <div class="copyright">
      <p>Copyright © 2015 Netaji Safe company</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterComponent',
}
</script>

<style lang="scss" scoped>
#footer {
  position: relative;
  width: 100%;
  height: 100%;

  .copyright {
    padding-top: 91px;
    padding-bottom: 72px;
    text-align: center;
    p {
      font-weight: 400;
      font-size: 11px;
      line-height: 173.69%;
      color: #9d9d9d;
    }
  }
}
</style>