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
      <div class="card-container" v-if="cards && cards.length">
        <div
          class="card"
          v-for="(item, i) in cards"
          :key="i"
          data-aos="fade-up"
          data-aos-duration="700"
          data-aos-offset="150"
          :data-aos-delay="i * 200"
        >
          <h4>{{ item.title }}</h4>
          <ul>
            <li v-for="(list, i) in item.list" :key="i">
              {{ list }}
            </li>
          </ul>
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
  counter,
  heavySafeBanner,
  homeRangeBanner,
  ssBanner,
  officeRangeBanner,
  counterBanner,
  ssCards,
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
      } else if (this.category == 'counter safe') {
        return counter
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

    .card-container {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-row-gap: 40px;
      row-gap: 40px;
      grid-column-gap: 32px;
      max-width: 1018px;
      @include for-tablet-only {
        grid-template-columns: repeat(1, 1fr);
      }
      @include for-phone-only {
        grid-template-columns: repeat(1, 1fr);
      }
      .card {
        padding: 44px 30px 23px 30px;
        background: linear-gradient(
          180deg,
          #efefef 0%,
          rgba(255, 255, 255, 0) 100%
        );
        border-radius: 9px;
        width: 492px;
        height: 100%;
        min-height: 282px;
        transition: 0.3s ease all;
        @include for-tablet-only {
          margin: 0 auto;
        }
        @include for-phone-only {
          width: 100%;
          padding: 25px 20px;
        }
        h4 {
          font-weight: 600;
          font-size: 18px;
          line-height: 26px;
        }
        ul {
          list-style: decimal;
          margin-top: 18px;
          padding-left: 15px;
          li {
            font-size: 12px;
            margin-bottom: 8px;
          }

          @include for-phone-only {
            padding-left: 20px;
          }
        }
      }
    }
  }
}
</style>