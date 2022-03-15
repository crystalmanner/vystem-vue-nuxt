<template>
  <div>
    <VerstoneGrid :data = "general_ledger.rows" :rowData='rowDataBound'> 
      <e-columns>
        <e-column field="id" headerText="ID" width="100"></e-column>
        <e-column field="transaction_date" headerText="Date" width="150" format="MM/dd/y" type="date"></e-column>
        <e-column field="type" headerText="Type" width="100"></e-column>
        <e-column field="note" headerText="Note" width></e-column>
        <e-column field="amount" headerText="Charge" :format="formatOptions" width="150"></e-column>
        <e-column field="payment" headerText="Payment" :format="formatOptions" width="150"></e-column>
        <e-column field="balance" headerText="Balance" :format="formatOptions"  width="150" ></e-column>     
        <e-column headerText="Action" :commands='commands' textAlign="Center" width="150"></e-column>   
      </e-columns>     
    </VerstoneGrid>
    
    <CreditModalForm :showModal = "show" @createItem="createItem"></CreditModalForm>

    <div id="summary" class="pull-right">
      <table class="table">
        <tr v-if="general_ledger.summary">
          <th>Unpaid Interest:</th>
          <td>{{ general_ledger.summary.unpaid_interest | currency }}</td>
        </tr>
        <tr v-if="general_ledger.summary">
          <th>Unpaid Fees:</th>
          <td>{{ general_ledger.summary.unpaid_fees | currency }}</td>
        </tr>
        <tr v-if="general_ledger.summary">
          <th>Balance:</th>
          <td>{{ general_ledger.summary.balance | currency }}</td>
        </tr>
      </table>
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
import CreditModalForm from "@/components/Loan/Servicing/Transactions/CreditModalForm.vue"

Vue.use(ButtonPlugin);

export default {
  props: ["general_ledger"],
  components: { 
    VerstoneGrid,
    CreditModalForm
  },
  data(){
    return{
      commands: [{ buttonOption: { cssClass:'e-link btn-success', content: 'Credit', click: this.onClick } }],
      show: false,
      formatOptions: { format:'C2' , currency:'USD' }
    }
  },
  methods: {
    onClick: function(args) {     
      this.show=!this.show;
    },
    createItem: async function(e) {
      await this.$store.dispatch("transaction/POST_ADD_CREDIT", {
        id: this.$route.params.id,
        form: e
      });
    },
    rowDataBound: function(args) {
      if ((args.data['type'] != 'Fee') && (args.data['type'] != 'Interest' ) && (args.data['type'] != 'Draw Fee')) {
        args.row.classList.add('showbtn');
      } 
    }
  }
};
</script>
