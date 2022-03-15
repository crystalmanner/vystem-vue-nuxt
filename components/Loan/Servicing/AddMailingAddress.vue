<template>
  <div>
    <b-modal
      id="add-mailing-address"
      title="Add Mailing Address"
      ref="modal"
      @show="resetModal"
      @ok="handleOk"
      ok-title="Submit"
      scrollable
    >
      <b-form @submit.prevent="onSubmit">
        <fg-input label="To" v-model="form.to" type="text" required="true"/>
        <fg-input label="Address" v-model="form.address" type="text" required="true"/>
        <fg-input label="City" v-model="form.city" type="text" required="true"/>
        <fg-input label="State" v-model="form.state" type="text" required="true"/>
        <fg-input label="Zip Code" v-model="form.zip" type="number" required="true"/>
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
        to: "",
        address: "",
        city: "",
        state: "",
        zip: "",
        notes: ""
      }
    };
  },
  methods: {
    resetModal() {
      this.form.to = "";
      this.form.address = "";
      this.form.city = "";
      this.form.state = "";
      this.form.zip = "";
      this.form.notes = "";
    },
    handleOk(bvModalEvt) {
      bvModalEvt.preventDefault();
      this.onSubmit();
    },
    onSubmit(e) {
      this.form.carrier = this.carrier_id;
      this.$emit("mailingAddress", this.form);
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