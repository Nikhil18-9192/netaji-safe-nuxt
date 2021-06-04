<template>
  <div
    class="image-carousel"
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
          [375, 2],
          [768, 3],
          [1200, 5],
          [1800, 5],
        ]"
        :loop="true"
        :autoplay="true"
        :autoplayTimeout="3000"
        :mouse-drag="true"
        :paginationEnabled="false"
      >
        <slide class="slide" v-for="(item, i) in images" :key="i">
          <img :src="item" alt="" />
        </slide>
      </carousel>
    </client-only>
  </div>
</template>

<script>
import Carousel from 'vue-carousel/src/Carousel.vue'
import Slide from 'vue-carousel/src/Slide.vue'

export default {
  name: 'ProductImageCarousel',
  props: ['images'],
  components: {
    Carousel,
    Slide,
  },
}
</script>

<style lang="scss" scoped>
.image-carousel {
  position: relative;
  width: 100%;
  height: 100%;
  padding: 40px 0 100px 0;
  @include for-phone-only {
    padding: 40px 0 40px 0;
  }
  .carousel {
    width: 100%;
    .slide {
      display: flex;
      justify-content: center;
      align-items: center;
      border-right: 1px solid #bcbcbc;
      @include for-phone-only {
        padding-left: 15px;
        padding-right: 15px;
      }
      img {
        width: 169px;
        height: 220px;
        object-fit: contain;
        filter: brightness(1.1);
        @include for-phone-only {
          width: 100%;
        }
      }
    }
  }
}
</style>