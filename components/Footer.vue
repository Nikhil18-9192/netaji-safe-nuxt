<template>
  <div id="footer">
    <div class="social">
      <span
        ><a
          rel="noreferrer"
          target="_blank"
          href="https://www.instagram.com/netajisafecompany/"
          ><img src="/instagram.svg" alt="intagram icon" /></a
      ></span>
      <span
        ><a
          rel="noreferrer"
          target="_blank"
          href="https://www.facebook.com/netajisafecompany/"
          ><img src="/fb.svg" alt="intagram icon" /></a
      ></span>
    </div>
    <div class="copyright">
      <p>COPYRIGHT {{ new Date().getFullYear() }} | ALL RIGHTS RESERVED</p>
      <p class="formec-media">
        Designed with ❤️ by
        <a href="https://formecmedia.com/" target="_blank" rel="noopener"
          >Formec Media.</a
        >
      </p>
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
  padding-top: 91px;
  padding-bottom: 72px;
  .social {
    display: flex;
    justify-content: center;
    margin-bottom: 22px;
    span {
      margin-right: 16px;
      img {
        width: 30px;
        height: 30px;
        object-fit: contain;
        opacity: 0.3;
        transition: 0.3s ease all;
      }
      &:hover {
        img {
          opacity: 1;
        }
      }
    }
  }
  .copyright {
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