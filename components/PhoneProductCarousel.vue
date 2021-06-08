<template>
  <div id="phone-carousel">
    <div class="card-container" v-for="(slide, i) in slides" :key="i">
      <div
        class="card"
        data-aos="fade-up"
        data-aos-duration="700"
        data-aos-offset="150"
        :data-aos-delay="i * 200"
      >
        <nuxt-link class="route-link" :to="slide.slug"></nuxt-link>
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
    </div>
  </div>
</template>

<script>
import { slides } from '@/utils'
export default {
  name: 'PhoneProductCarousel',
  computed: {
    slides() {
      return slides
    },
  },
}
</script>

<style lang="scss" scoped>
#phone-carousel {
  position: relative;
  width: 100%;
  height: 100%;
  padding: 45px 20px 75px 20px;
  @include for-tablet-landscape-up {
    display: none;
  }
  @include for-tablet-only {
    display: none;
  }
  .card-container {
    &:last-child {
      display: none;
    }
    .card {
      position: relative;
      width: 100%;
      transition: 0.3s ease all;
      margin-top: 90px;
      @include for-phone-only {
        margin-top: 90px;
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
        padding: 30px 20px;
        min-height: 270px;

        .card-title {
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
          width: 128px;
          height: 169px;
          object-fit: contain;
          mix-blend-mode: multiply;
          filter: brightness(1.1);
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