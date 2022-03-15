<template>
  <div>
    <VerstoneGrid :data = "document"> 
      <e-columns>
        <e-column field="filename" headerText="File Name" width="360" textAlign="Left"></e-column>
        <e-column field="credit_notes" headerText="Credit Notes" width="150" textAlign="Left"></e-column>            
        <e-column field="type" headerText="Type" width="150" textAlign="Left"></e-column>
        <e-column field="approved" headerText="Approved" width="10%" textAlign="Left"></e-column>
        <e-column field="date_issued" headerText="Date Issued" width="10%" textAlign="Left"></e-column>
        <e-column field="expiration_date" headerText="Expiration Date" width="10%" ></e-column>
        <e-column headerText="Action" :commands='commands' textAlign="Center"></e-column>
      </e-columns>     
    </VerstoneGrid>
  </div>
</template>

<script>
import Vue from "vue";
import {
  CommandColumn,
  parentsUntil
} from "@syncfusion/ej2-vue-grids";
import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";
import VerstoneGrid from "@/components/ldb/Layout/SyncfusionGrid.vue"

Vue.use(ButtonPlugin);

export default {
  props: ['all_loans'],
  components: { VerstoneGrid },
  data() {
    return {
      commands: [{ buttonOption: { cssClass:'e-link btn-success', content: 'View Detail', click: this.onClick } }]
    };
  },
  methods: {
    onClick: function(args) { 
      this.isLoading = true       
      var rowEle = parentsUntil(event.target, 'e-row');
      var rowIndex = parseInt(rowEle.getAttribute('aria-rowindex'));     
      var selectedData = this.all_loans[rowIndex];       
      this.$router.push("/loans/" + selectedData.loan_id);        
    }
  }
};
</script>

<style lang="scss" scoped>
</style>