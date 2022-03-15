<template>
  <div>
    <b-modal
      id="add-email-statement"
      title="Add Email Statement"
      ref="modal"
      @show="resetModal"
      @ok="handleOk"
      ok-title="Submit"
      scrollable
    >
      <b-form @submit.prevent="onSubmit">
        <fg-input label="Name" v-model="form.name" type="text" required="true"/>        
        <fg-input label="Email" v-model="form.email" type="text" required="true"/>
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
        notes: "",
        email: ""
      }
    };
  },
  methods: {
    resetModal() {
      this.form.name = "";
      this.form.notes = "";
      this.form.email = "";
    },
    handleOk(bvModalEvt) {
      bvModalEvt.preventDefault();
      this.onSubmit();
    },
    onSubmit(e) {
      this.form.carrier = this.carrier_id;
      this.$emit("emailStatement", this.form);
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