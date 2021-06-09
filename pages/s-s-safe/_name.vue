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
            <nuxt-link to="/s._s._safe_&_door">S. S. Safe & Door</nuxt-link> /
          </span>
          {{ productName }}
        </p>
      </div>
    </div>

    <ProductCard v-if="!$device.isMobile" :products="products" />
    <ProductCardPhone v-else :products="products" />

    <ProductImageCarousel :images="images" />
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
import { getSsProduct } from '@/utils'
export default {
  name: 'ProductPage',
  components: {
    Carousel,
    Slide,
  },
  data() {
    return {
      productName: false,
      images: [],
      categories: ['s. s. safe door', 'strong room door with grill gate'],
    }
  },
  asyncData({ route }) {
    let products = getSsProduct(route.params.name.replace(/-/g, ' '))
    return { products }
  },
  mounted() {
    this.productName = this.$route.params.name.replace(/-/g, ' ')
    this.getSrc()
  },
  methods: {
    importAll(r) {
      return r.keys().map(r)
    },
    getSrcForCategory(product) {
      switch (product) {
        case this.categories[0]:
          return require.context('~/assets/carousels/s s safe door', true)
          break

        case this.categories[1]:
          return require.context('~/assets/carousels/ss strong room door', true)
          break

        default:
          break
      }
    },

    getSrc() {
      const src = this.getSrcForCategory(this.productName)
      this.images = this.importAll(src)
    },
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
    margin-bottom: 30px;
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