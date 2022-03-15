<template>
  <div>
    <b-modal
      id="add-interest-reserve"
      title="Apply Interest Reserve"
      ref="modal"
      @show="resetModal"
      @ok="handleOk"
      ok-title="Submit"
      scrollable
    >
      <b-form @submit.prevent="onSubmit">
        <!-- <fg-input
          label="Interest Reserve Name"
          v-model="form.name"
          type="text"
        /> -->
        <fg-input
          label="Interest Reserve Date"
          v-model="form.transaction_date"
          type="date"
        />
        <Label>Amount</Label>
        <input
          type="number"
          :value="form.amount"
          @input="updateValue"
          class="form-control"
        />
        <br />
        <fg-input label="Note" v-model="form.note" type="text" />
      </b-form>
    </b-modal>
  </div>
</template>

<script>
export default {
  props: ["loan", "interest_reserve"],
  data() {
    return {
      form: {
        // name: "",
        transaction_date: "",
        amount: "",
        note: ""
      }
    };
  },
  methods: {
    updateValue(event) {
      const value = event.target.value;
      if (value <= parseInt(this.interest_reserve.summary.remaining)) {
        this.form.amount = value;
      }
      this.$forceUpdate();
    },
    resetModal() {
      // this.form.name = "";
      this.form.transaction_date = "";
      this.form.amount = "";
      this.form.note = "";
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

<style lang="scss" scoped></style>
