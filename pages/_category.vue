<template>
  <div id="category">
    <div class="header">
      <div class="navigator">
        <p><span>Home / </span> {{ category }}</p>
      </div>
    </div>
    <div class="product-container">
      <div class="card-wrapper">
        <div class="card" v-for="(product, i) in products" :key="i">
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
import { heavySafeDoor, homeRange, officeRange, ss } from '@/utils'
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
    background-image: url('/category-bg.jpg');
    background-size: cover;
    background-position: center;
    padding: 0 199px;

    .navigator {
      width: 399px;
      height: 46px;
      background: #cb2929;
      display: flex;
      align-items: center;
      position: absolute;
      bottom: 0;
      padding: 13px 20px;
      p {
        span {
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
    .card-wrapper {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      row-gap: 40px;
      column-gap: 32px;
      max-width: 1018px;
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
        }
        .image {
          height: 304px;
          padding-top: 30px;
          padding-bottom: 35px;

          img {
            width: 100%;
            height: 100%;
            object-fit: contain;
            mix-blend-mode: multiply;
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
      }
    }
  }
}
</style>