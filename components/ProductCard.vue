<template>
  <div id="product-card">
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
        <div :class="!item.title ? 'zero' : ''" class="left">
          <img v-if="item.title" :src="item.icon" :alt="item.title" />
        </div>
        <div :class="!item.title ? 'full' : ''" class="right">
          <h4 v-if="item.title">{{ item.title }}</h4>
          <p>{{ item.desc }}</p>
          <div v-if="item.size" class="size">
            <p>Size Details :</p>
            <p>{{ item.size }}</p>
            <p class="note">{{ item.note }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCardComponent',
  props: ['products'],
}
</script>

<style lang="scss" scoped>
#product-card {
  position: relative;
  width: 100%;
  height: 100%;
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
        .size {
          margin-top: 12px;
          .note {
            margin-top: 12px;
          }
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
}

.zero {
  width: 0% !important;
}
.full {
  width: 100% !important;
}
</style>