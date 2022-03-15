<template>
  <div>
    <b-modal
      id="credit_modal"
      v-model="this.showModal"
      ref="modal"
      title="Credit"
      ok-title="Submit"
      @show="resetModal"
      @ok="handleOk"
      scrollable
    >
      <b-form @submit.prevent="onSubmit">
        <fg-input type="text" v-model="form.credit_amount" label="Credit Amount" />
        <fg-input type="text" v-model="form.notes" label="Notes" />     
      </b-form>
    </b-modal>
  </div>
</template>

<script>
export default {
  props:[ "showModal" ],
  data() {
    return{
      form: {
        credit_amount: "",
        notes: ""
      }
    };    
  },
  methods:{
    resetModal() {
      this.form.credit_amount = "";
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
       this.$refs.showModal = false;
      });
    }
  }
};
</script>

<style lang="scss" scoped></style>
