<template>
  <div class="card-wrapper">
    <div
      class="card"
      v-for="(product, i) in products"
      :key="i"
      data-aos="fade-up"
      data-aos-duration="700"
      data-aos-offset="150"
      :data-aos-delay="i * 200"
    >
      <a
        class="whatsapp-icon"
        target="_blank"
        :href="
          'https://api.whatsapp.com/send?text= Hello, Im interested in ' +
          product.title +
          ' from ' +
          $route.params.category.replace(/_/g, ' ') +
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
</template>

<script>
export default {
  name: 'CategoryCardComponent',
  props: ['products'],
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
      right: 10px;
      top: 10px;
      z-index: 1000;
      border: 2px solid #0000006b;
      border-radius: 50%;
      padding: 8px;
      width: 48px;
      height: 48px;
      box-sizing: border-box;
      @include for-phone-only {
        padding: 8px;
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
        width: 224px;
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
          width: 91px;
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