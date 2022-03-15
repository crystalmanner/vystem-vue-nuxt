<template>
  <b-card>
    <b-card-text>
      <b-form>
        <b-row>
          <b-col md="6">
            <fg-input label="Month">
              <b-form-select v-model="month" :options="months"></b-form-select>
            </fg-input>
          </b-col>
          <b-col md="6">
            <fg-input label="Year">
              <b-form-select v-model="year" :options="years"></b-form-select>
            </fg-input>
          </b-col>
        </b-row>
        <button
          type="submit"
          @click.prevent="onSubmit"
          class="btn btn-fill btn-success btn-wd pull-right"
        >Submit</button>
      </b-form>
      <br>
    </b-card-text>
    <div class="mt-5">
      <hr class="p-3 m-3">
    </div>
    <b-card title v-if="data">
      <b-card-text>
        <table class="table table-striped">
          <tr>
            <th>Principal</th>
            <th>Loan Number</th>
            <th>Funded Date</th>
            <th>Holdback</th>
            <th>IR</th>
            <th>Interest Type</th>
            <th>Interest Rate</th>
            <th>Principal for Calculation</th>
            <th>Per Diem</th>
            <th>Loan Payment</th>
          </tr>
          <tr v-for="(item, index) in data" :key="index">
            <td>{{ item.principal | currency }}</td>
            <td>{{ item.loan_number }}</td>
            <td>{{ item.funded_datetime }}</td>
            <td>{{ item.holdback | currency }}</td>
            <td>{{ item.ir | currency }}</td>
            <td>{{ item.interest_type }}</td>
            <td>{{ item.interest_rate }}</td>
            <td>{{ item.principle_for_interest | currency }}</td>
            <td>{{ item.per_diem | currency }}</td>
            <td>
              <strong>{{ item.loan_payment | currency }}</strong>
            </td>
          </tr>
        </table>
      </b-card-text>
    </b-card>
    <div class="vld-parent">
      <loading :active.sync="isLoading" :can-cancel="false"></loading>
    </div>
  </b-card>
</template>

<script>
import moment from "moment";
export default {
  data() {
    return {
      data: "",
      month: "",
      year: "",
      months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      years: [],
      isLoading: false
    };
  },
  components: {},
  created() {
    var curr_year = moment().year();
    var prev_year = moment().format("YYYY") - 1;
    this.years = [curr_year, prev_year];
  },
  methods: {
    onSubmit() {
      this.isLoading = true;
      this.$axios
        .get(
          `/v1/servicing/process-monthly-automated/` +
            this.month +
            `/` +
            this.year
        )
        .then(response => {
          this.isLoading = false;
          this.data = response.data[0]["data"];
        })
        .catch(e => {
          this.isLoading = false;
          this.formErrors.push(e);
        });
    }
  }
};
</script>
<style lang="scss" scoped></style>
