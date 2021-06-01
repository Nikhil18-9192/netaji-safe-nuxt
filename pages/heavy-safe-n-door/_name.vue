<template>
  <div id="product">
    <div class="header">
      <div
        class="navigater"
        data-aos="fade-right"
        data-aos-duration="900"
        data-aos-offset="200"
      >
        <p>
          <span
            ><nuxt-link to="/">Home</nuxt-link>/
            <nuxt-link to="/heavy_safe_n_door">Heavy Safe N Door</nuxt-link> /
          </span>
          {{ productName }}
        </p>
      </div>
    </div>
    <h1 v-if="products.heading" class="title">
      {{ products.heading }}
    </h1>
    <ProductCard
      v-if="!$device.isMobile"
      :products="products"
      :style="{ marginTop: '40px' }"
    />
    <ProductCardPhone v-else :products="products" />
    <ProductImageCarousel :images="products.images" />
    <Table
      v-if="products.weights.length"
      :weights="products.weights"
      :tableHeader="products.tableHeader"
    />
    <p v-if="products.note" class="note">
      {{ products.note }}
    </p>
  </div>
</template>

<script>
import Carousel from 'vue-carousel/src/Carousel.vue'
import Slide from 'vue-carousel/src/Slide.vue'
import { getHeavySafeProduct } from '@/utils'
export default {
  name: 'ProductPage',
  components: {
    Carousel,
    Slide,
  },
  data() {
    return {
      productName: false,
    }
  },
  asyncData({ route }) {
    let products = getHeavySafeProduct(route.params.name.replace(/-/g, ' '))
    return { products }
  },
  mounted() {
    this.productName = this.$route.params.name.replace(/-/g, ' ')
  },
}
</script>

<style lang="scss" scoped>
#product {
  position: relative;
  width: 100%;
  height: 100%;
  padding: 0 187px;
  @include for-phone-only {
    padding: 0;
  }
  @include for-tablet-only {
    padding: 0 60px;
  }
  .header {
    margin-top: 34px;
    border-bottom: 1px solid #bdbdbd;
    @include for-tablet-only {
      margin-top: 90px;
    }
    .navigater {
      width: 580px;
      height: 46px;
      background: #f2f2f2;
      display: flex;
      align-items: center;
      padding: 13px 19px;
      @include for-phone-only {
        width: 100%;
        margin-top: 69px;
        height: 76px;
      }
      @include for-tablet-only {
        width: 485px;
      }
      p {
        font-weight: 600;
        font-size: 13px;
        line-height: 151.5%;
        text-transform: capitalize;
        span {
          color: #7a7a7a;
          a {
            color: #7a7a7a;
          }
        }
        @include for-phone-only {
          font-size: 12px;
          line-height: 230.5%;
        }
      }
    }
  }
  .title {
    font-weight: 600;
    font-size: 18px;
    line-height: 161%;
    text-align: center;
    max-width: 550px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 65px;
    margin-bottom: 96px;
    span {
      color: #cb2929;
    }
    @include for-phone-only {
      padding: 30px 20px 43px 20px;
      margin: 0;
    }
    @include for-tablet-only {
      margin-top: 60px;
      margin-bottom: 60px;
    }
  }

  .note {
    font-weight: 400;
    font-size: 13px;
    line-height: 173.69%;
    text-align: center;
    margin-top: 36px;
    @include for-phone-only {
      font-size: 11px;
      padding: 0 20px;
    }
  }
}
</style>