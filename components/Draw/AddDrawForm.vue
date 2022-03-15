<template>
  <div>
    <b-modal
      id="add-draw"
      title="Apply Draw"
      ref="modal"
      @show="resetModal"
      @ok="handleOk"
      ok-title="Submit"
      scrollable
    >
      <b-form @submit.prevent="onSubmit">
        <fg-input label="Client Requested On" v-model="form.client_requested_on" type="date"/>
        <Label>Asking Amount</Label>
        <input type="number" :value="form.asking_amount" @input="updateValue" class="form-control">
        <br>
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
        client_requested_on: "",
        asking_amount: 0,
        notes: ""
      },
      asking_amount: 0
    };
  },
  methods: {
    updateValue(event) {
      const value = event.target.value;
      if (value <= parseInt(this.draws.summary.remaining)) {
        this.asking_amount = value;
        this.form.asking_amount = value;
      }
      this.$forceUpdate();
    },
    resetModal() {
      this.form.client_requested_on = "";
      this.form.asking_amount = "";
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
