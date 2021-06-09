<template>
  <div id="news">
    <ImageModal v-if="modal" @dismiss="modal = false" :image="image" />
    <div class="page-title">
      <h1 data-aos="fade-right" data-aos-duration="900" data-aos-offset="200">
        links
      </h1>
    </div>
    <div class="link-container">
      <div class="links" v-for="(item, i) in links" :key="i">
        <a target="_blank" rel="noopener" :href="item.link"
          ><h4>{{ item.title }}</h4></a
        >
        <a target="_blank" rel="noopener" :href="item.link">{{ item.link }}</a>
      </div>
    </div>
    <div class="page-title">
      <h1 data-aos="fade-right" data-aos-duration="900" data-aos-offset="200">
        news
      </h1>
    </div>

    <div class="image-container">
      <div
        class="image"
        v-for="(src, i) in images"
        :key="i"
        @click="openImage(src)"
      >
        <img :src="src" alt="news image" />
      </div>
    </div>
  </div>
</template>

<script>
import { newsLinks } from '@/utils'
export default {
  name: 'NewsPage',
  data() {
    return {
      images: [],
      modal: false,
      image: null,
    }
  },
  mounted() {
    this.getSrc()
  },
  methods: {
    importAll(r) {
      return r.keys().map(r)
    },

    getSrc() {
      const src = require.context('~/assets/carousels/news', true)
      this.images = this.importAll(src)
    },
    openImage(src) {
      this.modal = true
      this.image = src
    },
  },
  computed: {
    links() {
      return newsLinks
    },
  },
}
</script>

<style lang="scss" scoped>
#news {
  position: relative;
  width: 100%;
  height: 100%;
  padding-left: 185px;
  padding-right: 185px;
  @include for-phone-only {
    padding: 0 20px;
  }
  @include for-tablet-only {
    padding: 0 60px;
  }
  .page-title {
    padding-top: 30px;
    padding-bottom: 20px;
    border-bottom: 1px solid #bdbdbd;
    @include for-phone-only {
      padding-top: 17px;
      padding-bottom: 17px;
    }
    h1 {
      font-weight: 600;
      font-size: 18px;
      line-height: 161%;
      letter-spacing: 0.22em;
      text-transform: uppercase;
      padding-left: 45px;
      @include for-phone-only {
        font-size: 14px;
        padding-left: 0;
      }
    }
  }
  .image-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 80px;
    row-gap: 75px;
    max-width: 1120px;
    margin-top: 75px;

    @include for-phone-only {
      grid-template-columns: repeat(1, 1fr);
      margin-top: 45px;
      row-gap: 45px;
    }
    @include for-tablet-only {
      grid-template-columns: repeat(2, 1fr);
    }
    .image {
      width: 320px;
      height: 396px;
      cursor: pointer;
      @include for-tablet-only {
        width: 285px;
        height: 365px;
      }
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        border-radius: 9px;
      }
    }
  }
  .link-container {
    margin-top: 65px;
    display: flex;
    flex-direction: column;
    gap: 42px;
    margin-bottom: 62px;
    .links {
      h4 {
        font-weight: 500;
        font-size: 18px;
        line-height: 161%;
        text-transform: capitalize;
        margin-bottom: 14px;
        transition: 0.3s ease all;
        &:hover {
          color: $primary;
        }
      }
      a {
        font-weight: 300;
        font-size: 14px;
        line-height: 161%;
      }
    }
  }
}
</style>