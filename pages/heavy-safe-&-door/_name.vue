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
            <nuxt-link to="/heavy_safe_&_door">Heavy Safe & Door</nuxt-link> /
          </span>
          {{ productName }}
        </p>
      </div>
    </div>
    <h1 v-if="products.heading" class="title">
      {{ products.heading.h1 }}<span>{{ products.heading.span1 }}</span
      >{{ products.heading.h2 }}<span>{{ products.heading.span2 }}</span
      >{{ products.heading.h3 }}
    </h1>
    <ProductCard
      v-if="!$device.isMobile"
      :products="products"
      :style="{ marginTop: '40px' }"
    />
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
      images: [],
      categories: [
        'heavy fire proof safe',
        'strong room door with grill gate',
        'jewellery safe',
        'counter safe',
        'safe deposite vaults',
        'night guard',
      ],
    }
  },
  asyncData({ route }) {
    let products = getHeavySafeProduct(route.params.name.replace(/-/g, ' '))
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
          return require.context(
            '~/assets/carousels/heavy fire proof safe',
            true
          )
          break

        case this.categories[1]:
          return require.context(
            '~/assets/carousels/strong room door with grill gate',
            true
          )
          break

        case this.categories[2]:
          return require.context('~/assets/carousels/jewellery safe', true)
          break

        case this.categories[3]:
          return require.context('~/assets/carousels/counter safe', true)
          break

        case this.categories[4]:
          return require.context(
            '~/assets/carousels/safe deposite vaults',
            true
          )
          break

        case this.categories[5]:
          return require.context('~/assets/carousels/night guard', true)
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