<template>
  <b-card>
    <AccountingTabs></AccountingTabs>
    <b-card-text>
      <EscrowWireRequest :escrow_wire_request="escrow_wire_request"></EscrowWireRequest>
    </b-card-text>
  </b-card>
</template>
<script>
import AccountingTabs from "@/components/Accounting/AccountingTabs";
import EscrowWireRequest from "@/components/Accounting/EscrowWireRequest";
import { mapGetters } from "vuex";
export default {
  components: {
    AccountingTabs,
    EscrowWireRequest
  },
  async fetch({ store, params }) {
    await store.dispatch("accounting/GET_ESCROW_WIRE_REQUEST");
  },
  computed: mapGetters({
    escrow_wire_request: "accounting/escrow_wire_request"
  })
};
</script>