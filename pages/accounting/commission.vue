<template>
  <b-card>
    <AccountingTabs></AccountingTabs>
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
    <Commission :commission="this.commission"></Commission>
  </b-card>
</template>
<script>
import AccountingTabs from "@/components/Accounting/AccountingTabs";
import Commission from "@/components/Accounting/Commission";
import { mapGetters } from "vuex";
export default {
  components: {
    AccountingTabs,
    Commission
  },
  data() {
    return {
      start_date: "",
      end_date: "",
      commission: ""
    };
  },
  created() {
    this.$axios.get(`/v1/accounting/commission/?`).then(response => {
      this.commission = response.data[0].data;
    });
  },
  methods: {
    filter() {
      this.$axios
        .get(`/v1/accounting/commission/`, {
          params: {
            start_date: this.start_date,
            end_date: this.end_date
          }
        })
        .then(response => {
          this.commission = response.data[0].data;
        });
    }
  }
};
</script>