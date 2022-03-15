<template>
  <div>
    <b-button
      variant="secondary"
      size="md"
      v-if="loan.locked === true"
      @click="locked('false')"
    >Unlock</b-button>
    <b-button
      variant="secondary"
      size="md"
      v-if="loan.locked === false"
      @click="locked('true')"
    >Lock</b-button>
  </div>
</template>

<script>
export default {
  props: ["loan"],
  data() {
    return {
      // locked: false
    };
  },
  created() {
    // axios called to check if loan is locked.
  },
  methods: {
    locked: function(data) {
      this.$axios
        .post(`/v1/loans/lock-unlock/${this.loan.id}`, { locked: data })
        .then(response => {
          this.loan = response.data[0].data;
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>