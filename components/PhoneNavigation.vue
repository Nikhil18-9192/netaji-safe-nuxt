<template>
  <div id="phone-nav">
    <div class="product-nav">
      <ul>
        <li
          v-for="(item, i) in productNav"
          :key="i"
          @click="$store.commit('toggleMenuState')"
        >
          <nuxt-link class="global-link" :to="item.path"></nuxt-link>
          {{ item.name }}
        </li>
      </ul>
    </div>
    <div class="nav-menu">
      <ul>
        <li
          v-for="(item, i) in navMenu"
          :key="i"
          @click="$store.commit('toggleMenuState')"
        >
          <nuxt-link class="global-link" :to="item.path"></nuxt-link>
          {{ item.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { productNav, navMenu } from '@/utils'
export default {
  name: 'PhoneNavigation',
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
#phone-nav {
  position: fixed;
  width: 274px;
  top: 0;
  right: 0;
  height: 100vh;
  background: #fff;
  z-index: 2001;
  padding: 0 8px;
  .product-nav {
    margin-top: 70px;
    border-top: 1px solid #e2e2e2;
    ul {
      list-style: none;
      padding: 0;
      li {
        position: relative;
        padding: 19px;
        border-bottom: 1px solid #e2e2e2;
        font-weight: 600;
        font-size: 13px;
        line-height: 15px;
        text-transform: uppercase;
      }
    }
  }
  .nav-menu {
    ul {
      list-style: none;
      padding: 0;
      li {
        position: relative;
        padding: 19px;
        border-bottom: 1px solid #e2e2e2;
        font-weight: 400;
        font-size: 12px;
        line-height: 13px;
        text-transform: uppercase;
      }
    }
  }
}
.global-link {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
}
</style>