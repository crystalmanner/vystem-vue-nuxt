<template>
  <div>
    <b-card title="REQUEST CREDIT PULL">
      <h4>Please confirm below:</h4>
      <b-row>
        <b-col md="6">
          Client Name:
          <br>
          <fg-input
            label="PENDING CREDIT REPORT NOTES"
            name="credit report notes"
            v-validate="modelValidations.require"
            :error="getError('credit report notes')"
            v-model="form.notes"
            required
            type="text"
          />
          <button
            type="submit"
            @click.prevent="validate"
            class="btn btn-fill btn-success btn-wd pull-right"
          >Submit</button>
        </b-col>
        <b-col md="6">
          Previous Credit Requests
          <table class="table table-striped">
            <tr v-for="note in previous_notes" :key="note.id">
              <td>{{note.date}}</td>
              <td>{{note.status}}</td>
            </tr>
          </table>
          <br>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
import BorrowerEntitiesTable from "@/components/Borrowers/Base/BorrowerEntitiesTable";
export default {
  props: ["borrower"],
  components: {
    BorrowerEntitiesTable
  },
  data() {
    return {
      form: {
        notes: ""
      },
      previous_notes: "",
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
          this.$emit("on-submit", this.register(), isValid);
        }
      });
    },
    register() {
      this.$axios
        .post(
          "/v1/clients/request-credit/" + this.borrower.detail.id,
          this.form
        )
        .then(response => {
          this.$router.push(`/borrowers/${this.borrower.detail.id}`);
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  created() {
    this.$axios
      .get("/v1/clients/request-credit/" + this.borrower.detail.id)
      .then(response => {
        this.previous_notes = response.data[0]["data"];
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>

<style lang="scss" scoped>
</style>