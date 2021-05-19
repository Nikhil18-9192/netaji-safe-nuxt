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
            <nuxt-link to="/office_range">Office Range</nuxt-link> /
          </span>
          {{ productName }}
        </p>
      </div>
    </div>

    <div class="card-container">
      <div
        class="card"
        v-for="(item, i) in products.cards"
        :key="i"
        data-aos="fade-up"
        data-aos-duration="700"
        data-aos-offset="150"
        :data-aos-delay="i * 200"
      >
        <div class="left">
          <img :src="item.icon" :alt="item.title" />
        </div>
        <div class="right">
          <h4>{{ item.title }}</h4>
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
            [375, 1],
            [768, 3],
            [1200, 5],
            [1800, 5],
          ]"
          :loop="true"
          :autoplay="true"
          :autoplayTimeout="1000"
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
import { getOfficeRangeProduct } from '@/utils'
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
    let products = getOfficeRangeProduct(route.params.name.replace(/-/g, ' '))
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
  .header {
    margin-top: 34px;
    border-bottom: 1px solid #bdbdbd;
    margin-bottom: 45px;
    .navigater {
      width: 580px;
      height: 46px;
      background: #f2f2f2;
      display: flex;
      align-items: center;
      padding: 13px 19px;
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
      }
    }
  }

  .card-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    row-gap: 40px;
    column-gap: 32px;
    // max-width: 1018px;
    .card:nth-child(1) {
      grid-row: auto / span 2;
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
        }
        p {
          font-weight: 400;
          font-size: 13px;
          line-height: 173.69%;
        }
      }
    }
  }
  .image-carousel {
    position: relative;
    width: 100%;
    height: 100%;
    padding: 40px 0 100px 0;
    .carousel {
      width: 100%;
      .slide {
        display: flex;
        justify-content: center;
        align-items: center;
        border-right: 1px solid #bcbcbc;
        img {
          width: 169px;
          height: 220px;
          object-fit: contain;
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
      th {
        border-top: 9px solid #1f1f1f;
        background: #cb2929;
        height: 47px;
        font-weight: 500;
        font-size: 13px;
        line-height: 173.69%;
        color: #fff;
      }
      td {
        text-align: center;
        background: #f4f4f4;
        height: 47px;
        font-weight: 500;
        font-size: 13px;
        line-height: 173.69%;
      }
    }
  }
  .note {
    font-weight: 400;
    font-size: 13px;
    line-height: 173.69%;
    text-align: center;
    margin-top: 36px;
  }
}
</style>