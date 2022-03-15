<template>
  <div>
    <b-modal
      id="add-extension"
      title="Add Loan Extension"
      ref="modal"
      @show="resetModal"
      @ok="handleOk"
      ok-title="Submit"
      scrollable
    >
      <b-form @submit.prevent="onSubmit">
        <fg-input label="Extension Days" v-model="form.extension_days" required="true" type="text"/>
        <fg-input label="Extension Fee" v-model="form.extension_fee" required="true" type="number"/>
        <fg-input label="Notes" v-model="form.notes" type="text"/>
      </b-form>
    </b-modal>
  </div>
</template>

<script>
export default {
  props: ["loan", "draws"],
  data() {
    return {
      form: {
        extension_days: "",
        extension_fee: "",
        notes: ""
      }
    };
  },
  methods: {
    resetModal() {
      this.form.extension_days = "";
      this.form.extension_fee = "";
      this.form.notes = "";
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
