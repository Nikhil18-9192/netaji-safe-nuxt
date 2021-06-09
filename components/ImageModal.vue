<template>
  <div id="image-modal" @click="$emit('dismiss')">
    <div class="close" @click.stop="$emit('dismiss')">Close</div>
    <div class="images-container" @click.stop="">
      <div class="image">
        <img :src="image" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GalleryModal',
  props: ['image'],
  data() {
    return {}
  },
  mounted() {},
  methods: {},
}
</script>

<style lang="scss" scoped>
#image-modal {
  position: fixed;
  width: 100%;
  height: 100vh;
  z-index: 2000;
  background: rgba(0, 0, 0, 0.9);
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .close {
    position: absolute;
    top: 16px;
    right: 24px;
    cursor: pointer;
    z-index: 111;
    color: $primary;
  }
  .images-container {
    width: 80%;
    height: 80%;
    @include for-phone-only {
      height: 80vh;
    }
    .image {
      width: 100%;
      height: 100%;
      @include for-phone-only {
        height: 500px;
      }
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        object-position: center;
      }
    }
  }
}
</style>