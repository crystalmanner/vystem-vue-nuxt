<template>
  <div class="thumbnail" style="margin-bottom:0px;">
    <div style="height: 150px; overflow: hidden;">
      <div v-if="url.picture === null ">
        <div v-html="url.url"></div>
      </div>
      <div v-else v-for="(loan_picture, i) in url.picture" :key="loan_picture">
        <b-img
          rounded
          :src="'https://res.cloudinary.com/veristone/image/upload/q_80,c_fill,w_250/v1515698402/'+ loan_picture +'.jpg'"
          @click="index = i"
        ></b-img>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    building_id: "",
    building_type: ""
  },
  data: function() {
    return {
      index: null,
      url: ""
    };
  },
  created() {
    this.$axios
      .get(`/v1/loans/property/photo/`, {
        params: {
          id: this.building_id,
          building_type: this.building_type
        }
      })
      .then(response => {
        this.url = response.data[0].data;
      });
  }
};
</script>
  
<style>
</style>