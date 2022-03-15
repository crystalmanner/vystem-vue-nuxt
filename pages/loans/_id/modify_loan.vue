<template>
  <div>
    <b-card title="QUESTION">
      <b-form>
        <b-row>
          <b-col md="12">
            <fg-input
              label="REASON FOR MODIFICATION"
              v-model="form.reason_for_modification"
              type="text"
              name="reason for modification"
              v-validate="modelValidations.require"
              :error="getError('reason for modification')"
              required
            />
          </b-col>
        </b-row>
        <b-row>
          <b-col md="6">
            <fg-input
              label="NEW EXIT STRATEGY"
              v-model="form.new_exit_strategy"
              type="text"
              name="New exit strategy"
              v-validate="modelValidations.require"
              :error="getError('New exit strategy')"
              required
            />
          </b-col>
          <b-col md="6">
            <fg-input
              label="PURPOSE FOR NEW FUNDS"
              v-model="form.purpose_for_new_funds"
              name="Purpose for new funds"
              v-validate="modelValidations.require"
              :error="getError('Purpose for new funds')"
              type="text"
              required
            />
            <button
              type="submit"
              @click.prevent="validate"
              class="btn btn-fill btn-success btn-wd pull-right"
            >Submit</button>
          </b-col>
        </b-row>
      </b-form>
    </b-card>
  </div>
</template>
<script>
export default {
  props: ["loan"],
  data() {
    return {
      form: {
        reason_for_modification: "",
        new_exit_strategy: "",
        purpose_for_new_funds: ""
      },
      modelValidations: {
        require: {
          required: true
        }
      }
    };
  },
  methods: {
    getError(fieldName) {
      return this.errors.first(fieldName);
    },
    validate() {
      this.$validator.validateAll().then(isValid => {
        if (isValid == true) {
          this.$emit("on-submit", this.modifyLoan(), isValid);
        }
      });
    },
    notifyVue(type, message) {
      this.$notify({
        title: message,
        type: type
      });
    },
    modifyLoan() {
      this.$axios
        .post("/v1/loans/modify_loan/" + this.loan.loan_detail.id, this.form)
        .then(response => {
          this.$router.push(`/loans/${this.loan.loan_detail.id}`);
          this.notifyVue("success", response.data[0].message);
        })
        .catch(e => {
          this.formErrors.push(e);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>