<template>
  <div>
    <b-card title="ENTER A DATE">
      <b-form>
        <b-row>
          <b-col md="6">
            <fg-input
              label="PROJECTED FUNDING DATE"
              v-model="form.estimated_closing_date"
              type="date"
              name="projected funding date"
              v-validate="modelValidations.require"
              :error="getError('projected funding date')"
              required
            />
            <button
              type="submit"
              @click.prevent="validate"
              class="btn btn-fill btn-success btn-wd pull-right"
            >Submit</button>
          </b-col>
        </b-row>
        {{pdf}}
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
        estimated_closing_date: ""
      },
      pdf: "",
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
          this.$emit("on-submit", this.underwriting_approval(), isValid);
        }
      });
    },
    notifyVue(type, message) {
      this.$notify({
        title: message,
        type: type
      });
    },
    underwriting_approval() {
      this.$axios
        .post(
          "/v1/loans/underwriting-approval/" + this.loan.loan_detail.id,
          this.form
        )
        .then(response => {
          if (response.data[0].data == "null") {
            this.$router.push(`/loans/${this.loan.loan_detail.id}`);
          } else {
            window.open(`${response.data[0].data}`, "_blank");
          }
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