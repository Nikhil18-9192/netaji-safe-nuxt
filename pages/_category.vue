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
      <CategoryCard :products="products" :url="url" :category="category" />
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
  officeRangeBanner,
} from '@/utils'
export default {
  name: 'CategoryPage',
  data() {
    return {
      category: '',
      url: '',
    }
  },
  mounted() {
    this.url = window.location.href
    this.category = this.$route.params.category.replace(/_/g, ' ')
  },
  computed: {
    products() {
      if (this.category == 'heavy safe & door') {
        return heavySafeDoor
      } else if (this.category == 'home range') {
        return homeRange
      } else if (this.category == 'office range') {
        return officeRange
      } else if (this.category == 's. s. safe & door') {
        return ss
      }
    },
    banner() {
      if (this.category == 'heavy safe & door') {
        return heavySafeBanner
      } else if (this.category == 'home range') {
        return homeRangeBanner
      } else if (this.category == 'office range') {
        return officeRangeBanner
      } else if (this.category == 's. s. safe & door') {
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
      @include for-tablet-only {
        left: 60px;
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
    @include for-tablet-only {
      padding: 40px 60px;
    }
  }
}
</style>