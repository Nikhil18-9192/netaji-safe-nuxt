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
    <ProductImageCarousel class="carousel" :images="images" />
  </div>
</template>

<script>
import Carousel from 'vue-carousel/src/Carousel.vue'
import Slide from 'vue-carousel/src/Slide.vue'
import { services } from '@/utils'
export default {
  name: 'ServicesPage',
  components: {
    Carousel,
    Slide,
  },
  data() {
    return {
      images: [],
    }
  },
  mounted() {
    this.getSrc()
  },
  computed: {
    services() {
      return services
    },
  },
  methods: {
    importAll(r) {
      return r.keys().map(r)
    },

    getSrc() {
      const src = require.context('~/assets/carousels/services', true)
      this.images = this.importAll(src)
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
  @include for-phone-only {
    padding: 0 20px;
  }
  @include for-tablet-only {
    padding: 0 60px;
  }
  .page-title {
    padding-top: 30px;
    padding-bottom: 20px;
    border-bottom: 1px solid #bdbdbd;
    @include for-phone-only {
      margin-top: 60px;
      padding-top: 28px;
      padding-bottom: 17px;
    }
    @include for-tablet-only {
      margin-top: 60px;
    }
    h1 {
      font-weight: 600;
      font-size: 18px;
      line-height: 161%;
      letter-spacing: 0.22em;
      text-transform: uppercase;
      @include for-phone-only {
        font-size: 14px;
      }
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
      @include for-phone-only {
        grid-template-columns: repeat(1, 1fr);
        .services:nth-child(1),
        :nth-child(3) {
          border-right: none;
        }
      }
      .services {
        display: flex;
        align-items: flex-start;
        width: 100%;
        height: 210px;
        align-items: center;
        border-bottom: 1px solid #e2e2e2;
        @include for-phone-only {
          border-bottom: none;
          border-top: 1px solid #e2e2e2;
          height: 100%;
          padding: 25px 0;
        }
        .icon {
          width: 20%;
          display: flex;
          justify-content: center;
          @include for-phone-only {
            height: 100%;
            width: 25%;
          }
          @include for-tablet-only {
            width: 30%;
          }
          img {
            width: 57px;
            height: 57px;
            object-fit: contain;
            @include for-phone-only {
              width: 46px;
              height: 46px;
            }
          }
        }
        .info {
          width: 80%;
          @include for-phone-only {
            width: 75%;
          }
          @include for-tablet-only {
            width: 70%;
          }
          h4 {
            font-weight: 600;
            font-size: 14px;
            line-height: 162%;
            text-transform: capitalize;
            margin-bottom: 10px;
            @include for-phone-only {
              font-size: 12px;
              line-height: 162%;
            }
          }
          p {
            font-weight: 400;
            font-size: 14px;
            line-height: 162%;
            text-transform: capitalize;
            @include for-phone-only {
              font-size: 12px;
              line-height: 162%;
            }
          }
        }
      }
    }
  }
  .carousel {
    margin-top: 85px;
    @include for-phone-only {
      margin-top: 45px;
    }
  }
}
</style>