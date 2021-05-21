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
    <h1 class="title">
      We manufacturer Fire proof Safes in various storage capacities ranging
      from size <span>28”</span> to size <span>72”</span>, All our safes come
      with special features.
    </h1>
    <div v-if="!$device.isMobile" class="card-container">
      <div
        class="card"
        v-for="(item, i) in products.cards"
        :key="i"
        data-aos="fade-up"
        data-aos-duration="700"
        data-aos-offset="150"
        :data-aos-delay="i * 200"
      >
        <div :class="!item.title ? 'zero' : ''" class="left">
          <img v-if="item.title" :src="item.icon" :alt="item.title" />
        </div>
        <div :class="!item.title ? 'full' : ''" class="right">
          <h4 v-if="item.title">{{ item.title }}</h4>
          <p>{{ item.desc }}</p>
        </div>
      </div>
    </div>
    <div v-else class="phone-card-container">
      <div
        class="card"
        v-for="(item, i) in products.cards"
        :key="i"
        data-aos="fade-up"
        data-aos-duration="700"
        data-aos-offset="150"
        :data-aos-delay="i * 200"
      >
        <div class="top">
          <div v-if="item.title" class="icon">
            <img :src="item.icon" :alt="item.title" />
          </div>
          <div v-if="item.title" class="card-title">
            <h4>{{ item.title }}</h4>
          </div>
        </div>
        <div class="bottom">
          <p>{{ item.desc }}</p>
        </div>
      </div>
    </div>
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
          :autoplayTimeout="10000"
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
  .card-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    row-gap: 40px;
    column-gap: 32px;
    .card:nth-child(1) {
      grid-row: auto / span 2;
    }
    @include for-phone-only {
      grid-template-columns: repeat(1, 1fr);
      padding: 0 40px;
    }
    @include for-tablet-only {
      grid-template-columns: repeat(1, 1fr);
    }
    .card {
      grid-row: auto / span 3;
      display: flex;
      padding: 44px 0 23px 0;
      background: linear-gradient(
        180deg,
        #efefef 0%,
        rgba(255, 255, 255, 0) 100%
      );
      border-radius: 9px;
      width: 557px;
      height: 100%;
      min-height: 282px;
      transition: 0.3s ease all;
      @include for-tablet-only {
        margin: 0 auto;
      }
      .left {
        width: 25%;
        padding-left: 43px;

        img {
          width: 57px;
          height: 57px;
          object-fit: contain;
        }
      }
      .right {
        width: 75%;
        padding-right: 22px;
        h4 {
          font-weight: 600;
          font-size: 14px;
          line-height: 151.5%;
          margin-bottom: 22px;
          transition: 0.3s ease all;
        }
        p {
          font-weight: 400;
          font-size: 13px;
          line-height: 173.69%;
        }
      }
      &:hover {
        transform: translateY(-6px);
        .right {
          h4 {
            color: #cb2929;
          }
        }
      }
    }
  }
  .phone-card-container {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    row-gap: 30px;
    padding: 0 38px;
    .card {
      width: 299;
      padding: 23px;
      background: linear-gradient(
        180deg,
        #efefef 0%,
        rgba(255, 255, 255, 0) 100%
      );
      border-radius: 9px;
      height: 100%;
      min-height: 282px;
      transition: 0.3s ease all;
      .top {
        display: flex;
        align-items: center;
        margin-bottom: 28px;
        .icon {
          margin-right: 13px;
          img {
            width: 36px;
            height: 36px;
            object-fit: contain;
          }
        }
        .card-title {
          h4 {
            font-weight: 600;
            font-size: 14px;
            line-height: 151.5%;
            transition: 0.3s ease all;
          }
        }
      }
      .bottom {
        p {
          font-weight: 400;
          font-size: 13px;
          line-height: 173.69%;
        }
      }
      &:hover {
        transform: translateY(-6px);
        .right {
          h4 {
            color: #cb2929;
          }
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