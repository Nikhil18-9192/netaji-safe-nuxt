<template>
  <div id="category">
    <div
      class="header"
      id="header"
      :style="{
        'background-image': 'url(' + banner + ')',
        height: height + 'px',
      }"
    >
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
      <CategoryCard
        :products="products"
        :url="url"
        :category="category"
        :cards="cards"
      />
    </div>
  </div>
</template>

<script>
import {
  heavySafeDoor,
  homeRange,
  officeRange,
  ss,
  counter,
  locks,
  heavySafeBanner,
  homeRangeBanner,
  ssBanner,
  officeRangeBanner,
  counterBanner,
  lockBanner,
  ssCards,
} from '@/utils'
export default {
  name: 'CategoryPage',
  data() {
    return {
      category: '',
      url: '',
      height: 0,
    }
  },
  mounted() {
    this.url = window.location.href
    this.category = this.$route.params.category.replace(/_/g, ' ')
    this.height =
      document.getElementById('header').parentElement.clientWidth / 3.6
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
      } else if (this.category == 'counter safe') {
        return counter
      } else if (this.category == 'locks') {
        return locks
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
      } else if (this.category == 'counter safe') {
        return counterBanner
      } else if (this.category == 'locks') {
        return lockBanner
      }
    },

    cards() {
      if (this.category == 'heavy safe & door') {
        return []
      } else if (this.category == 'home range') {
        return []
      } else if (this.category == 'office range') {
        return []
      } else if (this.category == 's. s. safe & door') {
        return ssCards
      } else if (this.category == 'counter safe') {
        return []
      } else if (this.category == 'locks') {
        return []
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
  .header {
    position: relative;
    width: 100%;
    height: 425px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    // @include for-phone-only {
    //   height: 350px;
    //   background-size: cover;
    //   background-position: 80% 74%;
    // }
    @include for-tablet-only {
      background-size: cover;
      object-position: bottom left;
    }
    @include for-tablet-landscape-up {
      background-size: cover;
      object-position: bottom right;
    }
    @include for-desktop-up {
      background-size: 100% 100%;
      background-repeat: no-repeat;
      background-position: center;
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
        bottom: -45px;
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
      padding: 75px 40px;
    }
    @include for-tablet-only {
      padding: 40px 60px;
    }
  }
}
</style>