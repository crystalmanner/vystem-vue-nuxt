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
        <!-- <fg-input label="Name" v-model="form.name" type="text" /> -->
        <fg-input label="Date" v-model="form.transaction_date" type="date" />
        <Label>Amount</Label>
        <input
          type="number"
          :value="form.amount"
          @input="updateValue"
          class="form-control"
        />
        <br />
        <fg-input label="Note" v-model="form.note" type="text" />
        <l-checkbox label="Exclude Fee" v-model="form.exclude_fee"/>        
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
        // name: "",
        transaction_date: "",
        amount: 0,
        note: "",
        exclude_fee: false
      },
      amount: 0
    };
  },
  methods: {
    updateValue(event) {
      const value = event.target.value;
      if (value <= parseInt(this.draws.summary.remaining)) {
        this.amount = value;
        this.form.amount = value;
      }
      this.$forceUpdate();
    },
    resetModal() {
      // this.form.name = "";
      this.form.transaction_date = "";
      this.form.amount = "";
      this.form.note = "";
      // this.from.exclude_fee = false; 
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
