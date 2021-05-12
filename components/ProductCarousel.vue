<template>
  <div id="product-carousel">
    <client-only>
      <carousel
        ref="slider"
        v-model="currentPage"
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

    .slide {
      padding-top: 50px;
      margin-left: 85px;
      max-width: 450px;
    }
    .card {
      position: relative;

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
        }
      }
    }
  }
}
</style>