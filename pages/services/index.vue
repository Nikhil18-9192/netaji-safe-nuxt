<template>
  <div id="services">
    <div class="page-title">
      <h1 data-aos="fade-right" data-aos-duration="900" data-aos-offset="200">
        Services
      </h1>
    </div>
    <div class="services-wrapper">
      <h2>Netaji Safe Company provides following services:-</h2>
      <div
        class="services-container"
        data-aos="fade-up"
        data-aos-duration="900"
        data-aos-offset="200"
      >
        <div class="services" v-for="(item, i) in services" :key="i">
          <div class="icon">
            <img :src="item.icon" :alt="item.title" />
          </div>
          <div class="info">
            <h4>{{ item.title }}</h4>
            <p>{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </div>
    <div
      class="services-carousel"
      data-aos="fade-up"
      data-aos-duration="900"
      data-aos-offset="200"
    >
      <client-only>
        <carousel
          ref="slider"
          class="carousel"
          :perPageCustom="[
            [320, 1],
            [375, 1],
            [768, 3],
            [1200, 5],
            [1800, 5],
          ]"
          :loop="true"
          :autoplay="true"
          :autoplayTimeout="10000"
          :mouse-drag="true"
          :paginationEnabled="false"
        >
          <slide class="slide" v-for="(src, i) in images" :key="i">
            <img :src="src" alt="" />
          </slide>
        </carousel>
      </client-only>
    </div>
  </div>
</template>

<script>
import Carousel from 'vue-carousel/src/Carousel.vue'
import Slide from 'vue-carousel/src/Slide.vue'
import { services, servicesImage } from '@/utils'
export default {
  name: 'ServicesPage',
  components: {
    Carousel,
    Slide,
  },
  computed: {
    services() {
      return services
    },
    images() {
      return servicesImage
    },
  },
}
</script>

<style lang="scss" scoped>
#services {
  position: relative;
  width: 100%;
  height: 100%;
  padding: 0 187px;
  .page-title {
    padding-top: 30px;
    padding-bottom: 20px;
    border-bottom: 1px solid #bdbdbd;
    h1 {
      font-weight: 600;
      font-size: 18px;
      line-height: 161%;
      letter-spacing: 0.22em;
      text-transform: uppercase;
    }
  }
  .services-wrapper {
    margin-top: 30px;
    h2 {
      font-weight: 600;
      font-size: 14px;
      line-height: 162%;
      text-transform: capitalize;
      margin-bottom: 27px;
    }
    .services-container {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      .services:nth-child(1),
      :nth-child(3) {
        border-right: 1px solid #e2e2e2;
      }
      .services {
        display: flex;
        align-items: flex-start;
        width: 100%;
        height: 210px;
        align-items: center;
        border-bottom: 1px solid #e2e2e2;
        .icon {
          width: 20%;
          display: flex;
          justify-content: center;

          img {
            width: 57px;
            height: 57px;
            object-fit: contain;
          }
        }
        .info {
          width: 80%;
          h4 {
            font-weight: 600;
            font-size: 14px;
            line-height: 162%;
            text-transform: capitalize;
            margin-bottom: 10px;
          }
          p {
            font-weight: 400;
            font-size: 14px;
            line-height: 162%;
            text-transform: capitalize;
          }
        }
      }
    }
  }
  .services-carousel {
    margin-top: 85px;
    .carousel {
      .slide {
        border-left: 1px solid #bcbcbc;
        width: 265px;
        display: flex;
        justify-content: center;
        img {
          width: 183px;
          height: 244px;
          object-fit: contain;
        }
      }
    }
  }
}
</style>