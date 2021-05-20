<template>
  <div id="category">
    <div class="header" :style="{ 'background-image': 'url(' + banner + ')' }">
      <div
        class="navigator"
        data-aos="fade-right"
        data-aos-duration="900"
        data-aos-offset="200"
      >
        <p><nuxt-link to="/">Home / </nuxt-link> {{ category }}</p>
      </div>
    </div>
    <div class="product-container">
      <div class="card-wrapper">
        <div
          class="card"
          v-for="(product, i) in products"
          :key="i"
          data-aos="fade-up"
          data-aos-duration="700"
          data-aos-offset="150"
          :data-aos-delay="i * 200"
        >
          <a
            class="whatsapp-icon"
            target="_blank"
            :href="
              'https://api.whatsapp.com/send?text= Hello, Im interested in ' +
              product.title +
              ' from ' +
              $route.params.category.replace(/_/g, ' ') +
              ' category from this page ' +
              $route.path +
              '.!&phone=+919822090190'
            "
            ><img src="/whatsapp.svg" alt="whatsapp icon"
          /></a>
          <nuxt-link
            v-if="product.slug"
            class="route-link"
            :to="product.slug"
          ></nuxt-link>
          <h4 class="title">{{ product.title }}</h4>
          <div class="image">
            <img :src="product.src" alt="" />
          </div>
          <div class="desc">
            <p>{{ product.desc }}</p>
            <p v-if="product.desc2">{{ product.desc2 }}</p>
          </div>
          <nuxt-link v-if="product.slug" class="read-btn" :to="product.slug"
            >Read More ...</nuxt-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  heavySafeDoor,
  homeRange,
  officeRange,
  ss,
  heavySafeBanner,
  homeRangeBanner,
  ssBanner,
} from '@/utils'
export default {
  name: 'CategoryPage',
  data() {
    return {
      category: '',
    }
  },
  mounted() {
    this.category = this.$route.params.category.replace(/_/g, ' ')
  },
  computed: {
    products() {
      if (this.category == 'heavy safe n door') {
        return heavySafeDoor
      } else if (this.category == 'home range') {
        return homeRange
      } else if (this.category == 'office range') {
        return officeRange
      } else if (this.category == 's. s. safe') {
        return ss
      }
    },
    banner() {
      if (this.category == 'heavy safe n door') {
        return heavySafeBanner
      } else if (this.category == 'home range') {
        return homeRangeBanner
      } else if (this.category == 'office range') {
        return heavySafeBanner
      } else if (this.category == 's. s. safe') {
        return ssBanner
      }
    },
  },
}
</script>

<style lang="scss" scoped>
#category {
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 0;
  margin-top: -102px;
  .header {
    position: relative;
    width: 100%;
    height: 425px;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center;
    @include for-phone-only {
      height: 350px;
      background-size: cover;
      background-position: 60% 74%;
    }
    .navigator {
      width: 399px;
      height: 46px;
      background: #cb2929;
      display: flex;
      align-items: center;
      position: absolute;
      bottom: 0;
      left: 199px;
      padding: 13px 20px;
      @include for-phone-only {
        left: 0;
        width: 100%;
      }
      p {
        a {
          color: #ff8989;
        }
        color: #fff;
        font-weight: 600;
        font-size: 13px;
        line-height: 151.5%;
        text-transform: capitalize;
      }
    }
  }
  .product-container {
    padding: 70px 199px;
    @include for-phone-only {
      padding: 32px 40px;
    }
    .card-wrapper {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      row-gap: 40px;
      column-gap: 32px;
      max-width: 1018px;
      @include for-phone-only {
        grid-template-columns: repeat(1, 1fr);
      }
      .card {
        position: relative;
        width: 492px;
        height: 100%;
        background: linear-gradient(
          180deg,
          #efefef 0%,
          rgba(255, 255, 255, 0) 100%
        );
        border-radius: 9px;
        padding: 38px 65px;
        transition: 0.3s ease all;
        @include for-phone-only {
          width: 100%;
          padding: 25px 20px;
        }
        .whatsapp-icon {
          position: absolute;
          right: 15px;
          top: 10px;
          z-index: 1000;
          img {
            width: 24px;
            height: 24px;
            object-fit: contain;
          }
        }
        .route-link {
          position: absolute;
          width: 100%;
          height: 100%;
          z-index: 1;
          top: 0;
          left: 0;
        }
        .title {
          font-weight: 600;
          font-size: 18px;
          line-height: 151.5%;
          width: 317px;
          transition: 0.3s ease all;
          @include for-phone-only {
            font-size: 14px;
            width: 224px;
          }
        }
        .image {
          height: 304px;
          padding-top: 30px;
          padding-bottom: 35px;
          @include for-phone-only {
            height: 200px;
            display: flex;
            justify-content: center;
            padding: 28px 0;
          }
          img {
            width: 100%;
            height: 100%;
            object-fit: contain;
            mix-blend-mode: multiply;
            filter: brightness(1.1);
            @include for-phone-only {
              width: 91px;
              height: 141px;
            }
          }
        }
        .desc {
          margin-bottom: 20px;
          p {
            font-weight: 400;
            font-size: 13px;
            line-height: 173.69%;
          }
        }
        .read-btn {
          font-weight: 600;
          font-size: 13px;
          line-height: 173.69%;
        }
        &:hover {
          transform: translateY(-6px);
          .title {
            color: #cb2929;
          }
        }
      }
    }
  }
}
</style>