<template>
  <div id="product-carousel">
    <client-only>
      <carousel
        ref="slider"
        class="carousel"
        :perPageCustom="[
          [320, 1],
          [375, 1],
          [768, 2],
          [1200, 3],
          [1800, 3],
        ]"
        :loop="true"
        :autoplay="true"
        :autoplayTimeout="100000"
        :mouse-drag="true"
        :paginationEnabled="false"
      >
        <slide
          class="slide"
          v-for="(slide, i) in slides"
          :key="slide.title + i"
        >
          <div class="card">
            <nuxt-link class="route-link" :to="slide.slug"></nuxt-link>
            <div class="overlay"></div>
            <div class="icon">
              <img :src="slide.icon" :alt="slide.title" />
            </div>
            <div class="text">
              <h4>{{ slide.title }}</h4>
              <p>{{ slide.desc }}</p>
            </div>
            <div class="image">
              <img :src="slide.image" :alt="slide.title" />
            </div>
          </div>
        </slide>
      </carousel>
    </client-only>
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
  </div>
</template>

<script>
import Carousel from 'vue-carousel/src/Carousel.vue'
import Slide from 'vue-carousel/src/Slide.vue'
import { slides } from '@/utils'
export default {
  name: 'ProductCarousel',
  components: {
    Carousel,
    Slide,
  },
  computed: {
    slides() {
      return slides
    },
  },
}
</script>

<style lang="scss" scoped>
#product-carousel {
  position: relative;
  width: 100%;
  height: 100%;
  margin-top: 72px;
  padding-left: 62px;
  .carousel {
    width: 100%;
    margin-bottom: 92px;
    .slide:last-child {
      display: none;
    }
    .slide {
      width: 100%;
    }
    .card {
      margin-top: 56px;
      margin-left: 85px;
      position: relative;
      min-width: 451px;
      transition: 0.3s ease all;
      .route-link {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
      }
      .overlay {
        background: linear-gradient(
          180deg,
          #efefef 0%,
          rgba(255, 255, 255, 0) 100%
        );
        position: absolute;
        width: 100%;
        height: 399px;
        top: 0;
        z-index: -1;
        border-radius: 9px;
      }
      .icon {
        width: 66px;
        height: 66px;
        padding: 16px;
        background: #000;
        border-radius: 100px;
        border: 6px solid #fff;
        position: absolute;
        top: -50px;
        left: 50%;
        transform: translate(-50%, 0);
        transition: 0.3s ease all;
        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }
      .text {
        padding: 40px 50px;
        h4 {
          font-weight: 600;
          font-size: 18px;
          line-height: 151.5%;
          margin-bottom: 24px;
          transition: 0.3s ease all;
        }
        p {
          font-weight: 400;
          font-size: 14px;
          line-height: 173.69%;
          width: 280px;
        }
      }
      .image {
        margin-top: 24px;
        display: flex;
        justify-content: center;
        img {
          width: 266px;
          height: 349px;
          object-fit: contain;
          mix-blend-mode: multiply;
        }
      }
      &:hover {
        transform: translateY(-6px);
        .icon {
          background: #cb2929;
        }
        .text {
          h4 {
            color: #cb2929;
          }
        }
      }
    }
  }
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
}
</style>