<template>
  <div>
    <b-modal
      id="add-payment-reference"
      title="Add Payment Reference"
      ref="modal"
      @show="resetModal"
      @ok="handleOk"
      ok-title="Submit"
      scrollable
    >
      <b-form @submit.prevent="onSubmit">
        <fg-input label="Payment Date" v-model="form.payment_date" type="date" required="true"/>
        <fg-input label="Payment Method" v-model="form.payment_method" type="text" required="true"/>
        <fg-input label="Remainder" v-model="form.remainder" type="number" required="true"/>
        <fg-input label="Memo" v-model="form.memo" type="text" required="true"/>
        <fg-input label="Total Amount" v-model="form.total_amount" type="number" required="true"/>
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
        payment_date: "",
        payment_method: "",
        remainder: "",
        memo: "",
        notes: "",
        total_amount: ""
      }
    };
  },
  methods: {
    resetModal() {
      this.form.payment_date = "";
      this.form.payment_method = "";
      this.form.remainder = "";
      this.form.memo = "";
      this.form.notes = "";
      this.form.total_amount = "";
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