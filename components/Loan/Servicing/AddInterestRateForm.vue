<template>
  <div>
    <b-modal
      id="add-interest-rates"
      title="Add Interest Rate"
      ref="modal"
      @show="resetModal"
      @ok="handleOk"
      ok-title="Submit"
      scrollable
    >
      <b-form @submit.prevent="onSubmit">
        <fg-input
          label="Transaction Date"
          v-model="form.transaction_date"
          type="date"
          required="true"
        />
        <fg-input label="Interest Rate" v-model="form.interest_rate" type="number" required="true"/>
        <label for="notes">Notes</label>
        <b-form-textarea id="notes" v-model="form.notes" rows="3" max-rows="10"></b-form-textarea>
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
        transaction_date: "",
        interest_rate: "",
        notes: ""
      }
    };
  },
  methods: {
    resetModal() {
      this.form.transaction_date = "";
      this.form.interest_rate = "";
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