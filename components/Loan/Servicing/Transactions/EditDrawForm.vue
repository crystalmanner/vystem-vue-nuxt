<template>
  <div>
    <b-modal
      id="edit-draw"
      title="Edit Draw"
      ref="modal"
      @show="resetModal"
      @ok="handleOk"
      ok-title="Submit"
      scrollable
    >
      <b-form @submit.prevent="onSubmit">
        <fg-input label="Name" v-model="form.name" type="text"/>
        <fg-input label="Date" v-model="form.transaction_date" type="date"/>
        <fg-input label="Amount" v-model="form.amount" type="number"/>
        <fg-input label="Notes" v-model="form.notes" type="text"/>
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
        name: "",
        transaction_date: "",
        amount: "",
        notes: ""
      }
    };
  },
  methods: {
    resetModal() {
      this.form.name = this.formItem.reference_name;
      var amount = this.formItem.draw_amount.split("$").join("");
      this.form.amount = amount.split(",").join("");
      var date = this.formItem.transaction_date.split("-");
      this.form.transaction_date = date[2] + "-" + date[0] + "-" + date[1];
      this.form.notes = this.formItem.draw_note;
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