<template>
  <b-card>
    <AccountingTabs></AccountingTabs>
    <div class="loan-card-top">
      <b-row>
        <b-col cols="3" class="left-border">
          <div class="loan-card">{{this.forecasting.summary.total_loan_amount}}</div>
          <div class="loan-card-label">TOTAL LOAN AMOUNT</div>
        </b-col>
        <b-col cols="3" class="left-border">
          <div class="loan-card">{{this.forecasting.summary.total_holdback_fund}}</div>
          <div class="loan-card-label">TOTAL HOLDBACK AMOUNT</div>
        </b-col>
        <b-col cols="3" class="left-border">
          <div class="loan-card">{{this.forecasting.summary.total_funded_loan_amount}}</div>
          <div class="loan-card-label">DAY 1 FUNDED AMOUNT</div>
        </b-col>
        <b-col cols="3" class="left-border">
          <div class="loan-card">{{this.forecasting.summary.wireout_amount}}</div>
          <div class="loan-card-label">TOTAL WIRE AMOUNT</div>
        </b-col>
      </b-row>
    </div>
    <hr>
    <b-row>
      <b-col>
        <fg-input label="Start Date" v-model="start_date" type="date"/>
      </b-col>
      <b-col>
        <fg-input label="End Date" v-model="end_date" type="date"/>
      </b-col>
    </b-row>
    <div class="row">
      <div class="col-md-12">
        <div class="pull-right">
          <b-button class="btn btn-fill btn-success" @click="filter()">Filter</b-button>
        </div>
      </div>
    </div>
    <Forecasting :forecasting="this.forecasting.rows"></Forecasting>
  </b-card>
</template>
<script>
import AccountingTabs from "@/components/Accounting/AccountingTabs";
import Forecasting from "@/components/Accounting/Forecasting";
import { mapGetters } from "vuex";
export default {
  components: {
    AccountingTabs,
    Forecasting
  },
  data() {
    return {
      start_date: "",
      end_date: "",
      forecasting: ""
    };
  },
  created() {
    this.$axios.get(`/v1/accounting/forecasting/?`).then(response => {
      this.forecasting = response.data[0].data;
    });
  },
  methods: {
    filter() {
      this.$axios
        .get(`/v1/accounting/forecasting/`, {
          params: {
            start_date: this.start_date,
            end_date: this.end_date
          }
        })
        .then(response => {
          this.forecasting = response.data[0].data;
        });
    }
  }
};
</script>
<style lang="scss" scoped>
.loan-card {
  font-size: 26px;
  font-weight: bold;
  letter-spacing: -1px;
  color: #b4b4b4;
}
.loan-card-top .loan-card-label {
  font-size: 12px;
  color: #666;
  top: -7px;
  position: relative;
}
.left-border {
  border-left: 1px solid #ddd;
  padding-left: 5px !important;
}
</style>