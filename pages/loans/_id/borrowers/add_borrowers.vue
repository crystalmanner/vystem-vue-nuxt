<template>
  <div>
    <ejs-grid 
      :dataSource="all_borrower"
      :allowPaging="true"
      :allowFiltering="true"
      :pageSettings='pageSettings'
    >
      <e-columns>
        <e-column field='firstname' headerText='FIRST NAME' textAlign='Left'></e-column>
        <e-column field='lastname' headerText='LAST NAME' textAlign='Left'></e-column>
        <e-column field='address' headerText='ADDRESS' textAlign='Left'></e-column>
        <e-column field='sales_rep' headerText='SALES' textAlign='Left'></e-column>
        <e-column headerText="ACTION" :commands="commands" textAlign="Center" width="120"></e-column>
      </e-columns>
    </ejs-grid>    
  </div>
</template>

<script>
import "@syncfusion/ej2-base/styles/material.css"
import "@syncfusion/ej2-inputs/styles/material.css"
import "@syncfusion/ej2-buttons/styles/material.css"
import "@syncfusion/ej2-calendars/styles/material.css"
import "@syncfusion/ej2-dropdowns/styles/material.css"
import "@syncfusion/ej2-navigations/styles/material.css"
import "@syncfusion/ej2-popups/styles/material.css"
import "@syncfusion/ej2-splitbuttons/styles/material.css"
import "@syncfusion/ej2-vue-grids/styles/material.css"

import Vue from "vue";
import {
  GridPlugin,
  Page,
  Filter,
  CommandColumn,
  parentsUntil
} from "@syncfusion/ej2-vue-grids";
import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";
import { mapGetters } from "vuex";

Vue.use(GridPlugin);
Vue.use(ButtonPlugin);

export default {
  data() {
    return {
      pageSettings: { pageSizes: [5,10,20,30,50], pageCount:4, pageSize: 20 },
      commands: [{ buttonOption: { cssClass:'e-success', content: '+', click: this.onClick } }]
    }
  },
  async fetch({ store, params }) {
		await store.dispatch("borrowers/GET_ALL_BORROWER");
	},
	computed: mapGetters({
		all_borrower: "borrowers/all_borrower"
	}),
  provide: {
    grid: [Page, Filter, CommandColumn]
  },
  methods: {
    onClick: function(args) {    
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