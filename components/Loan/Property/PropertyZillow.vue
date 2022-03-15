<template>
  <div>
    <a
      :href="'https://www.zillow.com/homes/1_ah/'+ zillow.address"
      class="text-muted"
      target="_blank"
    >
      <i class="fa fa-external-link"></i> Zillow
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
      zillow: []
    };
  },
  created() {
    this.$axios
      .get(`/v1/loans/property/zillow-link/`, {
        params: {
          id: this.building_id,
          building_type: this.building_type
        }
      })
      .then(response => {
        // JSON responses are automatically parsed.
        this.zillow = response.data[0].data;
      });
  }
};
</script>

<style>
</style>
