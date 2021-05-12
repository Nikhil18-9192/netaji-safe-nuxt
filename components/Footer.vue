<template>
  <div id="footer">
    <div class="btn-container">
      <a class="broture-btn" href="/">
        <img src="/download.svg" alt="broture download" />
        <p>Download Broture</p>
      </a>
      <a class="video-btn" href="/">
        <img src="/youtube.svg" alt="vidio play" />
        <p>Watch Video</p>
      </a>
    </div>
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
  .btn-container {
    display: flex;
    justify-content: center;
    .broture-btn {
      display: flex;
      align-items: center;
      width: 185px;
      height: 47px;
      padding: 10px 13px;
      background: #1f1f1f;
      border-radius: 47px;
      margin-right: 33px;
      p {
        color: #fff;
        font-weight: 600;
        font-size: 13px;
        line-height: 151.5%;
      }
      img {
        width: 25px;
        height: 25px;
        object-fit: contain;
        margin-right: 4px;
      }
    }
    .video-btn {
      display: flex;
      align-items: center;
      padding: 10px 13px;
      width: 166px;
      height: 47px;
      background: #cb2929;
      border-radius: 47px;
      p {
        color: #fff;
        font-weight: 600;
        font-size: 13px;
        line-height: 151.5%;
      }
      img {
        width: 25px;
        height: 25px;
        object-fit: contain;
        margin-right: 9px;
      }
    }
  }
  .copyright {
    margin-top: 91px;
    margin-bottom: 111px;
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