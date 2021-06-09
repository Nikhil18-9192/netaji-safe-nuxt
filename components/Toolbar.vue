<template>
  <div
    id="toolbar"
    :style="[
      scrollPosition > 0
        ? { height: '71px', 'border-bottom': '4px solid #cb2929' }
        : { height: '102px', 'border-bottom': '12px solid #cb2929' },
    ]"
  >
    <div class="blur"></div>
    <div class="container">
      <div class="left">
        <div
          class="logo"
          :style="[
            scrollPosition > 0
              ? { 'margin-right': '0px' }
              : { 'margin-right': '36px' },
          ]"
        >
          <nuxt-link to="/">
            <img
              :style="[
                scrollPosition > 0
                  ? { width: '185px', height: '55px' }
                  : { width: '255px', height: '75px' },
              ]"
              src="/logo.png"
              alt="logo"
          /></nuxt-link>
        </div>
        <div
          class="nav-products"
          :style="[
            scrollPosition > 0
              ? { 'padding-top': '24px' }
              : { 'padding-top': '45px' },
          ]"
        >
          <nuxt-link
            :style="[
              scrollPosition > 0
                ? { 'font-size': '12px', 'margin-right': '25px' }
                : { 'font-size': '13px', 'margin-right': '12px' },
            ]"
            v-for="(product, i) in productNav"
            :key="i"
            :to="product.path"
            >{{ product.name }}</nuxt-link
          >
        </div>
      </div>
      <div
        class="right"
        :style="[
          scrollPosition > 0
            ? { height: '100%', 'padding-top': '0' }
            : { height: '100%', 'padding-top': '25px' },
        ]"
      >
        <div class="nav-menu">
          <nuxt-link v-for="(menu, i) in navMenu" :key="i" :to="menu.path">{{
            menu.name
          }}</nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { productNav, navMenu } from '@/utils'
export default {
  name: 'ToolbarComponent',
  computed: {
    productNav() {
      return productNav
    },
    navMenu() {
      return navMenu
    },
    scrollPosition: function () {
      return this.$store.getters.getScrollPosition
    },
  },
}
</script>

<style lang="scss" scoped>
#toolbar {
  position: sticky;
  top: 0;
  width: 100%;
  backdrop-filter: blur(53px);
  padding: 0 63px;
  display: flex;
  align-items: center;
  z-index: 2000;
  transition: 0.3s ease all;
  @include for-phone-only {
    display: none;
  }
  @include for-tablet-only {
    display: none;
  }
  @include for-tablet-landscape-up {
    display: none;
  }
  @include for-desktop-up {
    display: flex;
  }
  .blur {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(255, 255, 255, 0.6);
    z-index: -1;
  }
  .container {
    display: flex;
    width: 100%;
    align-items: center;
    transition: 0.3s ease all;
    .left {
      width: 72%;
      display: flex;
      transition: 0.3s ease all;
      .logo {
        min-width: 235px;
        height: 100%;
        transition: 0.3s ease all;
      }
      img {
        // width: 100%;
        // height: 100%;
        object-fit: contain;
        mix-blend-mode: multiply;
        transition: 0.3s ease all;
      }
      .nav-products {
        display: flex;
        transition: 0.3s ease all;
        width: 100%;
        a {
          font-weight: 600;
          font-size: 13px;
          line-height: 15px;
          text-transform: uppercase;
          margin-right: 38px;
          transition: 0.3s ease all;
          &:hover {
            color: #cb2929;
          }
        }
      }
    }
    .right {
      width: 28%;
      display: flex;
      justify-content: flex-end;
      transition: 0.3s ease all;
      .nav-menu {
        transition: 0.3s ease all;
        a {
          font-weight: normal;
          font-size: 12px;
          line-height: 13px;
          margin-left: 18px;
          transition: 0.3s ease all;
          &:hover {
            color: #cb2929;
          }
        }
      }
    }
  }
}
</style>
