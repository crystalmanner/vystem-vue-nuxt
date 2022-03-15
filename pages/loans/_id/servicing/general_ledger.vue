<template>
  <div>
    <ServicingLoanNav></ServicingLoanNav>
    <b-button variant="secondary" size="md" v-b-modal.add-general-ledger>Apply Fee</b-button>
    <b-button variant="secondary" size="md" @click="pdf()">PDF</b-button>
    <TransactionForm @createFeeItem="createFeeItem"></TransactionForm>
    <!-- <TransactionCreditForm @createCreditItem="createCreditItem"></TransactionCreditForm> -->
    <GeneralLedger :general_ledger="general_ledger"></GeneralLedger>
  </div>
</template>

<script>
import { GridPlugin, Page, Sort, Filter } from "@syncfusion/ej2-vue-grids";
import { Dialog, Select, MessageBox, Option } from "element-ui";
import ServicingLoanNav from "@/components/Loan/Servicing/ServicingLoanNav.vue";
import GeneralLedger from "@/components/Loan/Servicing/Transactions/GeneralLedger.vue";
import TransactionForm from "@/components/Loan/Servicing/Transactions/AddGeneralLedgerForm.vue";
import TransactionCreditForm from "@/components/Loan/Servicing/Transactions/AddGeneralLedgerForm.vue";
import { mapGetters } from "vuex";
import Vue from "vue";
Vue.prototype.$confirm = MessageBox.confirm;
export default {
  components: {
    ServicingLoanNav,
    GeneralLedger,
    TransactionForm,
    TransactionCreditForm
  },
  async fetch({ store, params }) {
    await store.dispatch("transaction/GET_GENERAL_LEDGER", params.id);
  },
  computed: mapGetters({
    general_ledger: "transaction/general_ledger",
    add_genaral_ledger: "transaction/add_general_ledger"
  }),
  data() {
    return {
      formItem: {}
    };
  },
  methods: {
    createFeeItem: async function(e) {
      await this.$store.dispatch("transaction/POST_ADD_GENERAL_LEDGER", {
        id: this.$route.params.id,
        form: e
      });
      await this.$store.dispatch(
        "transaction/GET_GENERAL_LEDGER",
        this.$route.params.id
      );
    },
    pdf() {
      this.$axios
        .get(
          `/v1/servicing/pdfs/general-ledger-pdf/loans/${this.$route.params.id}`
        )
        .then(response => {
          window.open(`${response.data[0].data}`, "_blank");
        })
        .catch(e => {
          this.formErrors.push(e);
        });
    }
  }
};
</script>

<style lang="scss"></style>
