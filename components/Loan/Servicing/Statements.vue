<template>
  <div class>
    <VerstoneGrid :data = "all_statements"> 
      <e-columns>
        <e-column field="statement_date" headerText="Statement Date" textAlign="Left"></e-column>
        <e-column headerText="Action" :commands="commands" textAlign="Left"></e-column>
      </e-columns>     
    </VerstoneGrid>    
  </div>
</template>

<script>
import Vue from "vue";
import {
  CommandColumn,
  parentsUntil,
  GridPlugin
} from "@syncfusion/ej2-vue-grids";
import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";
import VerstoneGrid from "@/components/ldb/Layout/SyncfusionGrid.vue"
import moment from "moment";

Vue.use(ButtonPlugin);;

export default {
  props: ["all_statements", "loan"],
  components: { VerstoneGrid },
  data() {
    return {
      commands: [{ buttonOption: { cssClass:'e-link btn-success', content: 'View Detail', click: this.onClick } }]
    };
  },
  methods: {
    onClick: function(args) {
      var rowEle = parentsUntil(event.target, "e-row");
      var rowIndex = parseInt(rowEle.getAttribute("aria-rowindex"));
      var selectedData = this.all_statements[rowIndex];
      var date = moment(String(selectedData.statement_date)).format("YYYY");
      var month = moment(String(selectedData.statement_date)).format("MM");
      this.$axios
        .get(
          `/v1/servicing/pdfs/payment-statement-pdf/loans/${
            selectedData.id
          }/${date}/${month}`
        )
        .then(response => {
          window.open(`${response.data[0].data}`, "_blank");
        })
        .catch(error => {
          console.log(error);
        });
    },
    details: function(args) {
      var rowEle = parentsUntil(event.target, "e-row");
      var rowIndex = parseInt(rowEle.getAttribute("aria-rowindex"));
      var selectedData = this.all_statements[rowIndex];

      this.$router.push(
        `/loans/${this.loan.loan_detail.id}/servicing/statements/${
          selectedData.id
        }/`
      );
    }
  }
};
</script>

<style lang="scss" scoped>
</style>