<template>
  <div>
    <b-modal
      id="add-general-ledger-credit"
      title="Apply Credit"
      ref="modal"
      @show="resetModal"
      @ok="handleOk"
      ok-title="Submit"
      scrollable
    >
      <b-form @submit.prevent="onSubmit">
        <!-- Start form Types -->
        <fg-input label="Type">
          <b-form-select
            v-model="form.type"
            :options="fee_types"
          ></b-form-select>
        </fg-input>
        <!-- Start form Date -->
        <fg-input
          label="Date"
          v-model="form.transaction_date"
          type="date"
          required="true"
        />
        <!-- Start form Amount -->
        <fg-input
          label="Amount"
          v-model="form.amount"
          type="number"
          required="true"
        />
        <!-- Start form Notes -->
        <fg-input label="Notes" v-model="form.notes" required="true" />
      </b-form>
    </b-modal>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: ["loan"],
  data() {
    return {
      form: {
        type: "",
        transaction_date: "",
        amount: "",
        notes: ""
      }
    };
  },
  methods: {
    resetModal() {
      this.form.amount = "";
      this.form.transaction_date = "";
      this.form.type = "";
    },
    handleOk(bvModalEvt) {
      bvModalEvt.preventDefault();
      this.onSubmit();
    },
    onSubmit(e) {
      this.$emit("createFeeItem", this.form);
      // Hide the modal manually
      this.$nextTick(() => {
        this.$refs.modal.hide();
      });
    }
  },
  computed: mapGetters({
    fee_types: "constants/getFeeTypes"
  })
};
</script>

<style lang="scss" scoped></style>
