<template>
  <div id="product-card-phone">
    <div class="phone-card-container">
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
          <div v-if="item.size" class="size">
            <p>Size Details :</p>
            <p>{{ item.size }}</p>
            <p class="note">{{ item.note }}</p>
          </div>
          <div v-if="item.dimentions && item.dimentions.length" class="size">
            <p>Available in Different sizes like : (H x W X D):</p>
            <ul>
              <li v-for="(item, i) in item.dimentions" :key="i">
                <p>>> {{ item }}</p>
              </li>
            </ul>
          </div>
          <p class="desc2" v-if="item.desc2">{{ item.desc2 }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCardPhone',
  props: ['products'],
}
</script>

<style lang="scss" scoped>
#product-card-phone {
  position: relative;
  width: 100%;
  height: 100%;
  .phone-card-container {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    row-gap: 30px;
    padding: 0 38px;
    .card {
      width: 299px;
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
        .size {
          margin-top: 12px;
          .note {
            margin-top: 12px;
          }
          ul {
            list-style: none;
            padding: 0;
          }
        }
        .desc2 {
          margin-top: 12px;
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
</style>