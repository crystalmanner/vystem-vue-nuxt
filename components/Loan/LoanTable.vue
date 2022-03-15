<template>
  <div>
    <div>
      <el-select
        class="select-default mb-3"
        placeholder="Loan Status"
        style="width: 200px"
        v-model="status"
        @change="loan_filter"
      >
        <el-option
          class="select-default"
          v-for="item in loan_status"
          :key="item"
          :label="item"
          :value="item"
        ></el-option>
      </el-select>
    </div>
    <VerstoneGrid :data = "all_loans"> 
      <e-columns>
        <e-column field="loan_number" headerText="Loan Number" textAlign="Left"></e-column>
				<e-column field="firstname" headerText="First Name" textAlign="Left"></e-column>
				<e-column field="lastname" headerText="Last Name" textAlign="Left"></e-column>
				<e-column field="loan_name" headerText="Loan Name" textAlign="Left"></e-column>
				<e-column field="loanstate" headerText="State" textAlign="Left"></e-column>
        <e-column field="loan_status" headerText="Status" textAlign="Left"></e-column>
        <e-column field="loan_type" headerText="Type" textAlign="Left"></e-column>
        <e-column field="loan_program" headerText="Program" textAlign="Left"></e-column>
				<e-column field="loan_amount" headerText="Loan Amount" :format="formatOptions" textAlign="Left"></e-column>
				<e-column headerText="Action" :commands="commands" textAlign="Left"></e-column>
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
  CommandColumn,
  parentsUntil
} from "@syncfusion/ej2-vue-grids";
import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";
import VerstoneGrid from "@/components/ldb/Layout/SyncfusionGrid.vue";
import { Select, Option } from "element-ui";

Vue.use(ButtonPlugin);

export default {
  props: ['all_loans'],
  components: { 
    VerstoneGrid,
    [Option.name]: Option,
    [Select.name]: Select 
  },
  data() {
    return {
      commands: [{ buttonOption: { cssClass:'e-link btn-success', content: 'View Detail', click: this.onClick } }],        
      isLoading: false,
      formatOptions: { format:'C2' , currency:'USD' },
      status: "",
      loan_status: ["Pending", "Funded", "Paid Off", "Closed"]
    };
  },
  methods: {
    onClick: function(args) { 
      this.isLoading = true;       
      var rowEle = parentsUntil(event.target, 'e-row');
      var rowIndex = parseInt(rowEle.getAttribute('aria-rowindex'));         
      var selectedData = this.all_loans[rowIndex];       
      this.$router.push("/loans/" + selectedData.loan_id);        
    },
    toolbarClick: function(args) {      
      if (args.item.id === 'Grid_excelexport') { // 'Grid_excelexport' -> Grid component id + _ + toolbar item name
          this.$refs.grid.excelExport();
      }
    },
    loan_filter: function(selected){      
      var new_array =[];      
      for(var i=0; i<this.all_loans.length; i++){
        if(this.all_loans[i].loanstate == `"${selected}"`){          
          new_array.push(this.all_loans[i]);         
        }
      } 
      this.all_loans = new_array;
    }
  } 
};
</script>

<style lang="scss" scoped>
</style>