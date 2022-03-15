<template>
  <b-card title="Servicing">
    <ServicingNav></ServicingNav>
    <b-card-text>
      <br>
      <strong>
        <MonthlyInvoice :monthly_invoices="monthly_invoices"></MonthlyInvoice>
      </strong>
    </b-card-text>
  </b-card>
</template>

<script>
import ServicingNav from "@/components/servicing/ServicingNav";
import MonthlyInvoice from "@/components/servicing/MonthlyInvoice";
import { mapGetters } from "vuex";
export default {
  components: {
    MonthlyInvoice,
    ServicingNav
  },
  async fetch({ store, params }) {
    await store.dispatch("servicing/GET_MONTHLY_INVOICES");
  },
  computed: mapGetters({
    monthly_invoices: "servicing/monthly_invoices"
  })
};
</script>
<style lang="scss" scoped>
</style>