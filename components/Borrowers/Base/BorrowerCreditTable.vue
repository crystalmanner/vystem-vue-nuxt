<template>
	<div>
		<b-card :title="`Credit Reports (${this.credit.length})`">
			<b-card-text>
        <VerstoneGrid :data = "this.credit"> 
          <e-columns>
            <e-column field="id" headerText="ID" textAlign="Left"></e-column>                        
            <e-column field="credit_pull_date" headerText="Credit Pull Date" textAlign="Left"></e-column>
            <e-column field="client1_tri_merge_score" headerText="Tri Merge" textAlign="Left"></e-column>            
            <e-column field="client1_bankruptcy" headerText="Bankcruptcy" textAlign="Left"></e-column>  
            <e-column field="client1_ofac" headerText="OFAC" textAlign="Left"></e-column>            
            <e-column headerText="Action" :commands='commands' textAlign="Left"></e-column>
          </e-columns>     
        </VerstoneGrid>        
			</b-card-text>
		</b-card>
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
  props: ["borrower"],
  components: { VerstoneGrid },
  data() {
    return {
      commands: [{ buttonOption: { cssClass:'e-link btn-success', content: 'View Detail', click: this.onClick } }],        
      credit: ""
    };
  },
  methods: {
    onClick: function(args) {        
      var rowEle = parentsUntil(event.target, 'e-row');
      var rowIndex = parseInt(rowEle.getAttribute('aria-rowindex'));        
      var selectedData = this.credit[rowIndex];           
      location.replace(selectedData.s3_path); 
    }
  },
	created() {
		this.credit = this.borrower.credit;
	}
};
</script>

<style lang="scss" scoped>
</style>