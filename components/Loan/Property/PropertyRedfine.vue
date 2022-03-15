<template>
  <div>
    <a :href="'https://www.redfin.com/'+ redfin.address" class="text-muted" target="_blank">
      <i class="fa fa-external-link"></i> Redfin
    </a>
  </div>
</template>

<script>
export default {
  props: {
    building_id: "",
    building_type: ""
  },
  data() {
    return {
      redfin: []
    };
  },
  created() {
    this.$axios
      .get(`/v1/loans/property/redfin-link/`, {
        params: {
          id: this.building_id,
          building_type: this.building_type
        }
      })
      .then(response => {
        // JSON responses are automatically parsed.
        this.redfin = response.data[0].data;
      });
  }
};
</script>

<style>
</style>
