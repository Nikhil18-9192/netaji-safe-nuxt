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
          <span>
            <nuxt-link to="/">Home </nuxt-link>/
            <nuxt-link to="/home_range">Home Range</nuxt-link> /
          </span>
          {{ productName }}
        </p>
      </div>
    </div>

    <ProductCard v-if="!$device.isMobile" :products="products" />
    <ProductCardPhone v-else :products="products" />

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
          :autoplayTimeout="5000"
          :mouse-drag="true"
          :paginationEnabled="false"
        >
          <slide class="slide" v-for="(item, i) in products.images" :key="i">
            <img :src="item" alt="" />
          </slide>
        </carousel>
      </client-only>
    </div>
    <div
      v-if="products.weights.length"
      class="size-table"
      data-aos="fade-up"
      data-aos-duration="900"
      data-aos-offset="200"
    >
      <table>
        <tr class="heading">
          <th v-for="(heading, i) in products.tableHeader" :key="i">
            {{ heading }}
          </th>
        </tr>
        <tr class="table-row" v-for="(item, i) in products.weights" :key="i">
          <td>{{ i + 1 }}</td>
          <td>{{ item.outer }}</td>
          <td style="max-width: 225px">{{ item.inner }}</td>
          <td>{{ item.weight }}</td>
        </tr>
      </table>
    </div>
    <p v-if="products.note" class="note">
      {{ products.note }}
    </p>
  </div>
</template>

<script>
import Carousel from 'vue-carousel/src/Carousel.vue'
import Slide from 'vue-carousel/src/Slide.vue'
import { coffer } from '@/utils'
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
  mounted() {
    this.productName = this.$route.params.name.replace(/-/g, ' ')
  },
  computed: {
    products() {
      return coffer
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
  .size-table {
    width: 100%;
    table {
      width: 791px;
      margin: 0 auto;
      border-spacing: 0 5px;
      @include for-phone-only {
        width: 100%;
      }
      @include for-tablet-only {
        width: 100%;
      }
      th {
        border-top: 9px solid #1f1f1f;
        background: #cb2929;
        height: 47px;
        font-weight: 500;
        font-size: 13px;
        line-height: 173.69%;
        color: #fff;
        @include for-phone-only {
          font-size: 11px;
          height: 65px;
          &:nth-child(1) {
            padding-left: 10px;
          }
        }
      }
      td {
        text-align: center;
        background: #f4f4f4;
        height: 47px;
        font-weight: 500;
        font-size: 13px;
        line-height: 173.69%;
        @include for-phone-only {
          font-size: 11px;
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

.zero {
  width: 0% !important;
}
.full {
  width: 100% !important;
}
</style>