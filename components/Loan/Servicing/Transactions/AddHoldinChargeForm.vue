<template>
  <div>
    <b-modal
      id="add-holding-charge"
      title="Add Holding Charge"
      ref="modal"
      @show="resetModal"
      @ok="handleOk"
      ok-title="Submit"
      scrollable
    >
      <b-form @submit.prevent="onSubmit">
        <fg-input label="Name" v-model="form.name" type="text"/>
        <fg-input label="Date" v-model="form.date" type="date"/>
        <fg-input label="Amount" v-model="form.amount" type="number"/>
        <fg-input label="Notes" v-model="form.notes" type="text"/>
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
        name: "",
        date: "",
        amount: "",
        notes: ""
      }
    };
  },
  methods: {
    resetModal() {
      this.form.name = "";
      this.form.date = "";
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