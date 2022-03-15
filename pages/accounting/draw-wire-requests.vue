<template>
  <b-card>
    <AccountingTabs></AccountingTabs>
    <DrawWireRequestsTable :draw_wire_requests="draw_wire_requests" />
  </b-card>
</template>
<script>
import AccountingTabs from "@/components/Accounting/AccountingTabs";
import DrawWireRequestsTable from "@/components/Accounting/DrawWireRequestsTable";
import { mapGetters } from "vuex";
export default {
  components: {
    AccountingTabs,
    DrawWireRequestsTable
  },
  async fetch({ store, params }) {
    await store.dispatch("accounting/GET_DRAW_WIRE_REQUEST");
  },
  computed: mapGetters({
    draw_wire_requests: "accounting/draw_wire_requests"
  })
};
</script>