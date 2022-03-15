<template>
  <div>
    <b-modal
      id="add-insurance"
      title="Add Insurance"
      ref="modal"
      @show="resetModal"
      @ok="handleOk"
      ok-title="Add"
      scrollable
    >
      <b-form @submit.prevent="onSubmit">
        <b-row>
          <b-col cols="6"><fg-input label="Policy Number" v-model="form.policynumber" type="text"/></b-col>
          <b-col cols="6"><fg-input label="Expiration Date" v-model="form.expirationdate" type="date"/></b-col>
        </b-row>
        <b-row>
          <b-col cols="6"><fg-input label="Effective Date" v-model="form.effectivedate" type="date"/></b-col>
          <b-col cols="6"><fg-input label="Insured Name" v-model="form.insuredname" type="text"/></b-col>
        </b-row>
        <b-row>
          <b-col cols="6"><fg-input label="Company Name" v-model="form.companyname" type="text"/></b-col>
          <b-col cols="6"><fg-input label="Description" v-model="form.description" type="text"/></b-col>
        </b-row>
        <b-row>
          <b-col cols="6"><fg-input label="Type" v-model="form.type" type="text"/></b-col>
          <b-col cols="6"><fg-input label="Amount" v-model="form.amount" v-money="money" type="text"/></b-col>
        </b-row>
        <b-row>
          <b-col cols="6"><fg-input label="DBA(Entity Name)" v-model="form.dba" type="text"/></b-col>
          <b-col cols="6"><fg-input label="Zoning/Property Type" v-model="form.zoning" type="text" required="true"/></b-col>
        </b-row>
        <b-row>
          <b-col cols="6"><fg-input label="Loan Purpose" v-model="form.loanpurpose" type="text" required="true"/></b-col>
          <b-col cols="6"><fg-input label="Lien Position" v-model="form.lienposition" type="text" required="true"/></b-col>
        </b-row>
        <b-row>
          <b-col cols="4"><l-checkbox label="Builder's Risk" v-model="form.check1"/></b-col>
          <b-col cols="4"><l-checkbox label="Landlord/Rental" v-model="form.check2"/></b-col>
          <b-col cols="4"><l-checkbox label="Flood" v-model="form.check3"/></b-col>
        </b-row>
        <b-row>
          <b-col cols="4"><l-checkbox label="Liability/Land" v-model="form.check4"/></b-col>
          <b-col cols="4"><l-checkbox label="Dwelling/Hazard" v-model="form.check5"/></b-col>
          <b-col cols="4"><l-checkbox label="Exclude From Notification" v-model="form.check6"/></b-col>
        </b-row>
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
        policynumber: "",
        expirationdate: "",
        effectivedate: "",
        insuredname: "",
        companyname: "",
        description: "",
        type: "",
        amount: "",
        dba: "",
        zoning: "",
        loanpurpose: "",
        lienposition: "",        
      },
      money: {
				decimal: ".",
				thousands: ",",
				prefix: "$ ",
				precision: 2,
				masked: true /* doesn't work with directive */
			}
    };
  },
  methods: {
    resetModal() {
      this.form.policynumber = "";
      this.form.expirationdate = "";
      this.form.effectivedate = "";
      this.form.insuredname = "";
      this.form.companyname = "";
      this.form.description = "";
      this.form.type = "";
      this.form.amount = "";
      this.form.dba = "";
      this.form.zoning = "";
      this.form.loanpurpose = "";
      this.form.lienposition = "";
    },
    handleOk(bvModalEvt) {
      bvModalEvt.preventDefault();
      this.onSubmit();
    },
    onSubmit(e) {
      this.form.carrier = this.carrier_id;
      this.$emit("addinsurance", this.form);
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