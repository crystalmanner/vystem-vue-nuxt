<template>
  <div>
    <b-modal
      id="add-payoff-statement"
      title="Add Payoff Statement Date"
      ref="modal"
      @show="resetModal"
      @ok="handleOk"
      ok-title="Submit"
      scrollable
    >
      <b-form @submit.prevent="onSubmit">
        <fg-input label="Payoff Date" v-model="form.payoff_date" type="date"/>
      </b-form>
    </b-modal>
  </div>
</template>

<script>
export default {
  props: ["loan"],
  data() {
    return {
      form: {
        payoff_date: ""
      }
    };
  },
  methods: {
    resetModal() {
      this.form.payoff_date = "";
    },
    handleOk(bvModalEvt) {
      bvModalEvt.preventDefault();
      this.onSubmit();
    },
    onSubmit(e) {
      this.$emit("createItem", this.form);
      // Hide the modal manually
      this.$nextTick(() => {
        this.$refs.modal.hide();
      });
    }
  }
};
</script>

<style lang="scss" scoped></style>