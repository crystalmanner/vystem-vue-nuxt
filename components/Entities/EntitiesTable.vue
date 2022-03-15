<template>
	<div>
		<b-card>
			<b-card-text>
        <VerstoneGrid :data = "this.entities"> 
          <e-columns>
            <e-column field="id" headerText="ID" textAlign="Left"></e-column>                                    
            <e-column field="legal_business_name" headerText="Legal Business Name" textAlign="Left"></e-column>            
            <e-column field="address1" headerText="Address1" textAlign="Left"></e-column>                     
            <e-column field="city" headerText="City" textAlign="Left"></e-column>         
            <e-column field="state" headerText="State" textAlign="Left"></e-column>         
            <e-column field="zipcode" headerText="Zipcode" textAlign="Left"></e-column>                     
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
Vue.use(GridPlugin);

export default {
  props: ["entities"],
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
      var selectedData = this.entities[rowIndex];           
      this.$router.push("/entities/" + selectedData.id); 
       
    }
  }
};
</script>

<style lang="scss" scoped>
</style>