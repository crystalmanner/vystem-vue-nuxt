<template>
  <div>
    <VerstoneGrid :data = "borrower"> 
      <e-columns>
        <e-column field="firstname" headerText="First Name" textAlign="Left"></e-column>
        <e-column field="lastname" headerText="Last Name" textAlign="Left"></e-column>            
        <e-column field="address" headerText="Address" width="" textAlign="Left"></e-column>
        <e-column field="sales_rep" headerText="Sales" textAlign="Left"></e-column>
        <e-column field="status" headerText="Status" textAlign="Left"></e-column>   
        <e-column headerText="Action" :commands='commands' textAlign="Left"></e-column>    
      </e-columns>     
    </VerstoneGrid>
    <div class="vld-parent">
      <loading :active.sync="isLoading" 
      :can-cancel="false">
      </loading>
    </div>     
  </div>
</template>

<script>
import Vue from "vue";
import {
  parentsUntil,
  CommandColumn
} from "@syncfusion/ej2-vue-grids";
import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";
import VerstoneGrid from "@/components/ldb/Layout/SyncfusionGrid.vue"

Vue.use(ButtonPlugin);

export default {
  props: [ 'borrower' ],
  components: { VerstoneGrid },
  data() {
    return {
      commands: [{ buttonOption: { cssClass:'e-link btn-success', content: 'View Detail', click: this.onClick } }],
      isLoading: false,
    };
  },
  methods: {
    onClick: function(args) {    
      this.isLoading = true;    
      var rowEle = parentsUntil(event.target, 'e-row');
      var rowIndex = parseInt(rowEle.getAttribute('aria-rowindex'));        
      var selectedData = this.borrower[rowIndex];         
      this.$router.push("/borrowers/" + selectedData.id);        
    }
  }
};
</script>

<style lang="scss" scoped>
</style>