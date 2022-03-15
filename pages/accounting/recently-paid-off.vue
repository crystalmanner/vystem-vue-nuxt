<template>
  <b-card>
    <AccountingTabs></AccountingTabs>
    <RecentlyPaidOffTable :recently_paid_off="recently_paid_off" />
  </b-card>
</template>
<script>
import AccountingTabs from "@/components/Accounting/AccountingTabs";
import RecentlyPaidOffTable from "@/components/Accounting/RecentlyPaidOffTable"
import { mapGetters } from "vuex";
export default {
  components: {
    AccountingTabs,
    RecentlyPaidOffTable
  },
  async fetch({ store, params }) {
    await store.dispatch("accounting/GET_RECENTLY_PAID_OFF");
  },
  computed: mapGetters({
    recently_paid_off: "accounting/get_recently_paid_off"
  })
};
</script>