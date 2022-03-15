<template>
  <div>
    <b-modal
      id="add-payment-reference-item"
      title="Add Payment Reference Item"
      ref="modal"
      @show="resetModal"
      @ok="handleOk"
      ok-title="Submit"
      scrollable
    >
      <b-form @submit.prevent="onSubmit">
        <fg-input label="Amount" v-model="form.amount" type="number" required="true"/>
        <fg-input label="Notes" v-model="form.notes" type="text" required="true"/>
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
        amount: "",
        notes: ""
      }
    };
  },
  methods: {
    resetModal() {
      this.form.amount = "";
      this.form.notes = "";
    },
    handleOk(bvModalEvt) {
      bvModalEvt.preventDefault();
      this.onSubmit();
    },
    onSubmit(e) {
      this.form.carrier = this.carrier_id;
      this.$emit("createItem", this.form);
      // Hide the modal manually
      this.$nextTick(() => {
        this.$refs.modal.hide();
      });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>