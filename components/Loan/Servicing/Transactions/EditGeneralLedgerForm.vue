<template>
  <div>
    <b-modal
      id="edit-general-ledger"
      title="Transaction Form"
      ref="modal"
      @show="resetModal"
      @ok="handleOk"
      ok-title="Submit"
      scrollable
    >
      <b-form @submit.prevent="onSubmit">
        <!-- Start form Types -->
        <fg-input label="Type">
          <b-form-select v-model="form.type" :options="types"></b-form-select>
        </fg-input>
        <!-- Start form Date -->
        <fg-input label="Date" v-model="form.transaction_date" type="date" required="true"/>
        <!-- Start form Amount -->
        <fg-input label="Amount" v-model="form.amount" type="number" required="true"/>
      </b-form>
    </b-modal>
  </div>
</template>

<script>
export default {
  props: ["loan", "formItem"],
  data() {
    return {
      form: {
        type: "",
        transaction_date: "",
        amount: ""
      },
      types: [
        { value: "Principal Charge", text: "Principal Charge" },
        { value: "Fee Charge", text: "Fee Charge" },
        { value: "Principal Payment", text: "Principal Payment" },
        { value: "Fee Payment", text: "Fee Payment" }
      ]
    };
  },
  methods: {
    resetModal() {
      var amount = this.formItem.amount.split("$").join("");
      this.form.amount = amount.split(",").join("");
      var date = this.formItem.transaction_date.split("-");
      this.form.transaction_date = date[2] + "-" + date[0] + "-" + date[1];
      if (
        this.formItem.payment == "Principal Payment" ||
        this.formItem.payment == "Fee Payment"
      ) {
        this.form.type = this.formItem.payment;
      } else {
        this.form.type = this.formItem.charge;
      }
      this.form.id = this.formItem.id;
    },
    handleOk(bvModalEvt) {
      bvModalEvt.preventDefault();
      this.onSubmit();
    },
    onSubmit(e) {
      this.$emit("editItem", this.form);

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