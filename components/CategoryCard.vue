<template>
  <div class="card-wrapper">
    <ImageModal v-if="modal" :image="image" @dismiss="modal = false" />
    <div class="card-container" v-if="cards && cards.length">
      <div
        class="card1"
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
    <div
      class="card"
      v-for="(product, i) in products"
      :key="i"
      data-aos="fade-up"
      data-aos-duration="700"
      data-aos-offset="200"
      @click="openModal(product.slug, product.src)"
    >
      <a
        class="whatsapp-icon"
        target="_blank"
        :href="
          'https://api.whatsapp.com/send?text= Hello, Im interested in ' +
          product.title +
          ' from ' +
          category +
          ' category from this page ' +
          url +
          '.!&phone=+919822090190'
        "
        ><img src="/whatsapp.svg" alt="whatsapp icon"
      /></a>
      <nuxt-link
        v-if="product.slug"
        class="route-link"
        :to="product.slug"
      ></nuxt-link>

      <h4 v-if="product.title" class="title">{{ product.title }}</h4>
      <div class="image">
        <img v-if="product.src" :src="product.src" alt="" />
      </div>
      <div class="desc">
        <p>{{ product.desc }}</p>
        <p v-if="product.desc2">{{ product.desc2 }}</p>
        <div v-if="product.size" class="size">
          <p>Size Details :</p>
          <p>{{ product.size }}</p>
          <p class="note">{{ product.note }}</p>
        </div>
      </div>
      <nuxt-link v-if="product.slug" class="read-btn" :to="product.slug"
        >Read More ...</nuxt-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'CategoryCardComponent',
  props: ['products', 'url', 'category', 'cards'],
  data() {
    return {
      modal: false,
      image: null,
    }
  },
  methods: {
    openModal(slug, src) {
      console.log(slug)
      if (!slug) {
        this.image = src
        this.modal = true
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.card-wrapper {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 40px;
  column-gap: 32px;
  max-width: 1018px;
  @include for-phone-only {
    grid-template-columns: repeat(1, 1fr);
  }
  @include for-tablet-only {
    grid-template-columns: repeat(1, 1fr);
  }
  @include for-big-desktop-up {
    grid-template-columns: repeat(3, 1fr);
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
    .card1 {
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
          font-size: 14px;
          margin-bottom: 10px;
        }

        @include for-phone-only {
          padding-left: 20px;
        }
      }
    }
  }

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
    transition: 0.3s ease all;
    @include for-phone-only {
      width: 100%;
      padding: 25px 20px;
    }
    @include for-tablet-only {
      margin: 0 auto;
    }
    .whatsapp-icon {
      position: absolute;
      right: 38px;
      top: 38px;
      z-index: 1000;
      border: 2px solid #000000;
      border-radius: 50%;
      padding: 8px;
      width: 40px;
      height: 40px;
      box-sizing: border-box;
      @include for-phone-only {
        width: 36px;
        height: 36px;
        right: 20px;
        top: 25px;
      }
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
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
      transition: 0.3s ease all;
      @include for-phone-only {
        font-size: 14px;
        width: 215px;
      }
    }
    .image {
      height: 304px;
      padding-top: 30px;
      padding-bottom: 35px;
      @include for-phone-only {
        height: 200px;
        display: flex;
        justify-content: center;
        padding: 28px 0;
      }
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        mix-blend-mode: multiply;
        filter: brightness(1.1);
        @include for-phone-only {
          width: 100%;
          height: 141px;
        }
      }
    }
    .desc {
      margin-bottom: 20px;
      p {
        font-weight: 400;
        font-size: 13px;
        line-height: 173.69%;
      }
      .size {
        margin-top: 12px;
        .note {
          margin-top: 12px;
        }
      }
    }
    .read-btn {
      font-weight: 600;
      font-size: 13px;
      line-height: 173.69%;
    }
    &:hover {
      transform: translateY(-6px);
      .title {
        color: #cb2929;
      }
    }
  }
}
</style>
