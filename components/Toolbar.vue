<template>
  <div id="toolbar">
    <div class="container">
      <div class="left">
        <div class="logo">
          <img src="/logo.png" alt="logo" />
        </div>
        <div class="nav-products">
          <nuxt-link
            v-for="(product, i) in productNav"
            :key="i"
            :to="product.path"
            >{{ product.name }}</nuxt-link
          >
        </div>
      </div>
      <div class="right">
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
  },
}
</script>

<style lang="scss" scoped>
#toolbar {
  position: fixed;
  top: 0;
  width: 100%;
  height: 102px;
  background-image: url('/nav_bg.jpg');
  background-position: center;
  background-size: cover;
  padding: 0 63px;
  display: flex;
  align-items: center;
  border-bottom: 12px solid #cb2929;
  z-index: 2000;
  .container {
    display: flex;
    width: 100%;
    align-items: center;
    .left {
      width: 70%;
      display: flex;
      align-items: flex-end;
      .logo {
        width: 235px;
        height: 64px;
        margin-right: 36px;
        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          mix-blend-mode: multiply;
        }
      }
      .nav-products {
        a {
          font-weight: 600;
          font-size: 13px;
          line-height: 15px;
          text-transform: uppercase;
          margin-right: 38px;
        }
      }
    }
    .right {
      width: 30%;
      height: 64px;
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;
      .nav-menu {
        a {
          font-weight: normal;
          font-size: 12px;
          line-height: 13px;
          margin-left: 21px;
        }
      }
    }
  }
}
</style>
