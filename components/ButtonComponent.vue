<template>
  <div id="btn-links">
    <div
      class="btn-container"
      data-aos="fade-up"
      data-aos-duration="900"
      data-aos-offset="200"
    >
      <a
        rel="noreferrer"
        class="broture-btn"
        target="_blank"
        href="/netaji-safe-brouchre.pdf"
      >
        <img src="/download.svg" alt="broture download" />
        <p>Download Broture</p>
      </a>
      <a
        rel="noreferrer"
        class="video-btn"
        target="_blank"
        href="https://www.youtube.com/watch?v=5NMZ4zFTS7E"
      >
        <img src="/youtube.svg" alt="vidio play" />
        <p>Watch Video</p>
      </a>
      <a rel="noreferrer" class="feedback-btn" href="/feedback">
        <img src="/feedback.svg" alt="broture download" />
        <p>Feedback</p>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ButtonLinksComponent',
}
</script>

<style lang="scss" scoped>
#btn-links {
  .btn-container {
    display: flex;
    justify-content: center;
    @include for-phone-only {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .broture-btn {
      display: flex;
      align-items: center;
      width: 185px;
      height: 47px;
      padding: 10px 13px;
      background: #1f1f1f;
      border-radius: 47px;

      @include for-phone-only {
        margin-right: 0;
        margin-bottom: 33px;
      }
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
      margin: 0 33px;
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
    .feedback-btn {
      display: flex;
      align-items: center;
      width: 185px;
      height: 47px;
      padding: 10px 13px;
      background: #1f1f1f;
      border-radius: 47px;

      @include for-phone-only {
        margin-right: 0;
        margin-bottom: 33px;
      }
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
        margin-right: 12px;
      }
    }
  }
}
</style>