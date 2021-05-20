<template>
  <div id="product-carousel">
    <client-only>
      <carousel
        ref="slider"
        class="carousel"
        :perPageCustom="[
          [320, 2],
          [375, 2],
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
          data-aos="fade-up"
          data-aos-duration="900"
          data-aos-offset="200"
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
  @include for-phone-only {
    padding-left: 20px;
  }
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
      @include for-phone-only {
        margin-left: 0;
        margin-right: 20px;
        min-width: 200px;
        width: 200px;
      }
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
        @include for-phone-only {
          padding: 28px 20px;
        }
        h4 {
          font-weight: 600;
          font-size: 18px;
          line-height: 151.5%;
          margin-bottom: 24px;
          transition: 0.3s ease all;
          @include for-phone-only {
            font-size: 14px;
            margin-bottom: 10px;
          }
        }
        p {
          font-weight: 400;
          font-size: 14px;
          line-height: 173.69%;
          width: 280px;
          @include for-phone-only {
            font-size: 13px;
            width: 180px;
          }
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
          filter: brightness(1.1);
          @include for-phone-only {
            width: 128px;
            height: 169px;
          }
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
}
</style>