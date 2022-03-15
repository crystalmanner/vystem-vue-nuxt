<template>
  <div>
    <b-card title="Fund Loan">
      <b-card-body>
        <ejs-combobox
          id="combobox"
          :dataSource="this.loans"
          :fields="fields"
          :allowFiltering="allowFiltering"
          @change="selectedLoan($event)"
          placeholder="Type to search for a Loan Number"
        >
        </ejs-combobox>
      </b-card-body>
    </b-card>
  </div>
</template>

<script>
import Vue from "vue";
import { ComboBoxPlugin } from "@syncfusion/ej2-vue-dropdowns";

Vue.use(ComboBoxPlugin);

export default {
  components: { ComboBoxPlugin },

  data() {
    return {
      activeNotifications: false,
      res: "",
      loans: [],
      result: [],
      allowFiltering: true,
      fields: { text: "loan_number", value: "loan_id" }
    };
  },
  methods: {
    selectedLoan(event) {
      this.$router.push("/servicing/fund-loan/" + event.itemData.loan_id);
    }
  },
  created() {
    this.$axios
      .get("/v1/portfolio/loan/detail/")
      .then(response => {
        this.loans = response.data[0]["data"].row;
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>

<style lang="scss" scoped>
input.form-control {
  border-left-style: solid;
  border-left-width: 1px;
}
</style>
