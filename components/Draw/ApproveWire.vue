<template>
  <div>
    <b-modal
      id="approve-wire"
      title="Approve Wire"
      ref="modal"
      @show="resetModal"
      @ok="handleOk"
      ok-title="Submit"
      scrollable
    >
      <b-form @submit.prevent="onSubmit">
        <fg-input label="Transaction Date" v-model="transaction_date" type="date"/>
        <fg-input label="Amount" v-model="amount" type="number"/>
        <fg-input label="Wire Sent" v-model="wire_sent_on" type="date"/>
        <fg-input label="Notes" v-model="notes" type="text"/>
        <input type="checkbox" v-model="exclude_fee"> Exclude Fee
      </b-form>
    </b-modal>
  </div>
</template>

<script>
export default {
  props: ["draw_id"],
  data() {
    return {
      transaction_date: "",
      amount: "",
      wire_sent_on: "",
      exclude_fee: false,
      notes: ""
    };
  },
  methods: {
    resetModal() {
      this.transaction_date = "";
      this.amount = "";
      this.wire_sent_on = "";
      this.exclude_fee = false;
      this.notes = "";
    },
    handleOk(bvModalEvt) {
      bvModalEvt.preventDefault();
      this.onSubmit();
    },
    onSubmit() {
      let formData = new FormData();
      formData.append("transaction_date", this.transaction_date);
      formData.append("amount", this.amount);
      formData.append("wire_sent_on", this.wire_sent_on);
      formData.append("exclude_fee", this.exclude_fee);
      formData.append("notes", this.notes);
      formData.append("draw_id", this.draw_id);
      this.$emit("approveWire", formData);
      this.$nextTick(() => {
        this.$refs.modal.hide();
      });
    }
  }
};
</script>

<style lang="scss" scoped></style>
