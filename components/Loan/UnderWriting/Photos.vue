<template>
  <div>
    <gallery :images="underwriting_photos" :index="index" @close="index = null"></gallery>
    <div
      class="image"
      v-for="(image, imageIndex) in underwriting_photos"
      :key="imageIndex"
      @click="index = imageIndex"
      :style="{ backgroundImage: 'url(' + image + ')', width: '170px', height: '143px' }"
    ></div>
  </div>
</template>
<script>
import VueGallery from "vue-gallery";
export default {
  props: ["underwriting_photos"],
  components: {
    gallery: VueGallery
  },
  data() {
    return {
      index: null
    };
  }
};
</script>

<style lang="scss" scoped>
.image {
  float: left;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  border: 1px solid #ebebeb;
  margin: 5px;
}
</style>