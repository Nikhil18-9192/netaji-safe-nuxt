<template>
  <div id="product-carousel">
    <div class="left-icon" @click="prev" v-if="currentPage > 0">
      <img src="/left.png" alt="" />
    </div>
    <div class="right-icon" @click="next" v-if="currentPage < pageCount">
      <img src="/right.png" alt="" />
    </div>
    <client-only>
      <carousel
        ref="slider"
        v-model="currentPage"
        class="carousel"
        :perPageCustom="[
          [320, 2],
          [375, 2],
          [768, 2],
          [1200, 3],
          [1800, 3],
        ]"
        :loop="true"
        :autoplay="false"
        :autoplayTimeout="5000"
        :mouse-drag="true"
        :paginationEnabled="false"
        :navigateTo="currentPage"
      >
        <slide
          class="slide"
          v-for="(slide, i) in slides"
          :key="slide.title + i"
          data-aos="fade-up"
          data-aos-duration="900"
          data-aos-offset="200"
        >
          <div
            class="card"
            @mousedown="mouseDown"
            @mouseup="mouseUp(slide.slug)"
            @dblclick.stop=";``"
          >
            <!-- <nuxt-link class="route-link" :to="slide.slug"></nuxt-link> -->
            <div class="overlay"></div>
            <div class="icon">
              <img :src="slide.icon" :alt="slide.title" />
            </div>
            <div class="text">
              <p class="card-title">{{ slide.title }}</p>
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
  data() {
    return {
      mouseDownTimestamp: 0,
      currentPage: 0,
      pageCount: 5,
    }
  },
  methods: {
    mouseDown: function () {
      this.mouseDownTimestamp = new Date().getTime()
      console.log(this.mouseDownTimestamp)
    },
    mouseUp: function (route) {
      const now = new Date().getTime()
      console.log(now - this.mouseDownTimestamp)
      if (now - this.mouseDownTimestamp > 200) {
        return
      }
      this.navigateToNext(route)
    },
    navigateToNext(route) {
      this.$router.push(route)
    },
    next() {
      this.pageCount = this.$refs.slider.pageCount - 1
      this.currentPage < this.$refs.slider.pageCount - 1
        ? this.currentPage++
        : (this.currentPage = 0)
    },
    prev() {
      this.pageCount = this.$refs.slider.pageCount - 1

      this.currentPage <= 0
        ? (this.currentPage = this.$refs.slider.pageCount - 1)
        : this.currentPage--
    },
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
  @include for-tablet-only {
    padding-left: 60px;
  }
  .left-icon {
    width: 64px;
    height: 64px;
    position: absolute;
    left: 135px;
    top: 40%;
    transform: translate(-50% -50%);
    z-index: 1;
    cursor: pointer;
    @include for-phone-only {
      display: none;
    }
    @include for-tablet-only {
      left: 60px;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  .right-icon {
    width: 64px;
    height: 64px;
    position: absolute;
    right: 64px;
    top: 40%;
    transform: translate(-50% -50%);
    z-index: 1;
    cursor: pointer;
    @include for-phone-only {
      display: none;
    }
    @include for-tablet-only {
      right: 50px;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
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
        min-width: 225px;
        width: 225px;
      }
      @include for-tablet-only {
        min-width: 375px;
        margin-right: 60px;
        margin-left: 0;
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
        min-height: 270px;
        @include for-phone-only {
          padding: 28px 20px;
        }
        .card-title {
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
            width: 200px;
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
          .card-title {
            color: #cb2929;
          }
        }
      }
    }
  }
}
</style>
