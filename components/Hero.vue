<template>
  <div id="hero">
    <div class="hero-c">
      <img class="left-nav nav" src="/left.png" alt="left-icon" @click="prev" />
      <img
        class="right-nav nav"
        src="/right.png"
        alt="right-icon"
        @click="next"
      />
      <client-only>
        <carousel
          ref="heroSlider"
          v-model="currentPage"
          class="hero-carousel"
          :perPage="1"
          :loop="true"
          :autoplay="false"
          :autoplayTimeout="3000"
          :mouse-drag="true"
          :paginationEnabled="false"
          :navigateTo="currentPage"
        >
          <slide class="slide" v-for="(img, i) in imgs" :key="'hero-slide' + i">
            <img :src="img" alt="hero-banner" />
          </slide>
        </carousel>
      </client-only>
    </div>
    <transition name="fade">
      <h1 v-if="currentPage == 0" class="heading">
        A complete System For your security needs
      </h1>
    </transition>
    <transition name="fade">
      <img
        v-if="currentPage == 0"
        class="shield-icon"
        src="/shild.png"
        alt=""
      />
    </transition>
  </div>
</template>

<script>
import Carousel from 'vue-carousel/src/Carousel.vue'
import Slide from 'vue-carousel/src/Slide.vue'
export default {
  name: 'Hero',
  components: {
    Carousel,
    Slide,
  },
  data() {
    return {
      currentPage: 0,
      imgs: [],
      height: 0,
    }
  },
  mounted() {
    this.getSrc()
    this.height =
      document.getElementById('hero').parentElement.clientWidth / 2.75
  },
  methods: {
    next() {
      this.pageCount = this.$refs.heroSlider.pageCount - 1
      this.currentPage < this.$refs.heroSlider.pageCount - 1
        ? this.currentPage++
        : (this.currentPage = 0)
    },
    prev() {
      this.pageCount = this.$refs.heroSlider.pageCount - 1

      this.currentPage <= 0
        ? (this.currentPage = this.$refs.heroSlider.pageCount - 1)
        : this.currentPage--
    },
    importAll(r) {
      return r.keys().map(r)
    },

    getSrc() {
      const src = require.context('~/assets/carousels/home carousel', true)
      this.imgs = this.importAll(src)
    },
    dynamicHeight() {},
  },
}
</script>

<style lang="scss" scoped>
$phoneHeight: 135px;
#hero {
  position: relative;
  width: 100%;
  height: 559px;
  // background-image: url('/hero-bg.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  // margin-top: -102px;
  @include for-phone-only {
    height: $phoneHeight;
    margin-top: 0px;
  }
  .heading {
    font-weight: 400;
    font-size: 36px;
    line-height: 151.5%;
    text-align: center;
    letter-spacing: 0.035em;
    text-transform: uppercase;
    width: 500px;
    margin-top: 135px;
    z-index: 1;
    @include for-phone-only {
      font-size: 18px;
      width: 219px;
      margin-top: 15px;
    }
    @include for-tablet-only {
      margin-top: 160px;
    }
  }
  .shield-icon {
    position: absolute;
    bottom: -95px;
    transform: translate(-50% -50%);
    width: 169px;
    height: 216px;
    object-fit: contain;
    @include for-phone-only {
      width: 66px;
      height: 76px;
      bottom: -40px;
    }
    @include for-tablet-only {
      bottom: -60px;
    }
  }

  .hero-c {
    position: absolute;
    width: 100%;
    min-height: 100%;
    top: 0;
    left: 0;

    .nav {
      position: absolute;
      top: 40%;
      z-index: 1;
      width: 80px;
      height: 80px;
      cursor: pointer;
      transition: 0.3s ease all;
      @include for-phone-only {
        width: 48px;
        height: 48px;
        top: 25%;
      }

      &:active {
        transform: scale(0.8);
      }
    }

    .right-nav {
      right: 16px;
      @include for-phone-only {
        right: 8px;
      }
    }

    .left-nav {
      left: 16px;

      @include for-phone-only {
        left: 8px;
      }
    }

    .hero-carousel {
      position: relative;
      width: 100%;
      min-height: 100%;

      .slide {
        width: 100%;
        min-height: 100%;
        img {
          width: 100%;
          height: 100%;
          min-height: 555px;
          object-fit: cover;
          @include for-phone-only {
            min-height: $phoneHeight;
          }
        }
      }
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: 0.3s;
  opacity: 0;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
