<template>
  <div>
    <b-card>
      <b-row>
        <b-col>
          <b-form>
            <fg-input label="Reason Requirement">
              <b-form-select v-model="type" :options="types"></b-form-select>
            </fg-input>
            <fg-input
              label="Cancellation Reason"
              v-model="form.cancellation_reason"
              type="text"
              name="Cancellation Reason"
              v-validate="modelValidations.require"
              :error="getError('Cancellation Reason')"
              required
            />
            <fg-input
              label="Cancellation Date"
              name="Cancellation Date"
              v-model="form.cancellation_date"
              v-validate="modelValidations.require"
              :error="getError('Cancellation Date')"
              type="date"
              required="true"
            />
            <button
              type="submit"
              @click.prevent="validate"
              class="btn btn-fill btn-success btn-wd pull-right"
            >Submit</button>
          </b-form>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>
<script>
export default {
  props: ["loan"],
  data() {
    return {
      form: {
        cancellation_date: "",
        cancellation_reason: ""
      },
      modelValidations: {
        require: {
          required: true
        }
      },
      type: "Client Withdrew",
      types: [
        { value: "Client Withdrew", text: "Client Withdrew" },
        { value: "Went With Competitor", text: "Went With Competitor" },
        { value: "MISC", text: "MISC" },
        { value: "Loan Rejected", text: "Loan Rejected" }
      ]
    };
  },
  methods: {
    getError(fieldName) {
      return this.errors.first(fieldName);
    },
    validate() {
      this.$validator.validateAll().then(isValid => {
        if (isValid == true) {
          this.$emit("on-submit", this.register(), isValid);
        }
      });
    },
    register() {
      this.$axios
        .post("/v1/loan/cancel/" + this.loan.loan_detail.id, this.form)
        .then(response => {
          this.$router.push(`/loans/${this.loan.loan_detail.id}`);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>