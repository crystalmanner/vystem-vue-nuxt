<template>
	<div>
		<b-card>
      <b-card-text>
        <div>
          <b-button variant="success" to="/loans/5258/servicing">+ Add Member/Manager</b-button>
        </div>
      </b-card-text>
			<b-card-text>
        <VerstoneGrid :data = "this.memeber_manager"> 
          <e-columns>
            <e-column field="firstname" headerText="First Name" textAlign="Left"></e-column>                                    
            <e-column field="lastname" headerText="Last Name" textAlign="Left"></e-column>            
            <e-column field="email" headerText="Email" textAlign="Left"></e-column>                     
            <e-column field="client" headerText="Client" textAlign="Left"></e-column>                             
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
  props: ["memeber_manager"],
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
  },
};
</script>

<style lang="scss" scoped>
</style>