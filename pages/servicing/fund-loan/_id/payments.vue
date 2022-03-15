<template>
  <div>
    <b-row>
      <b-col>
        <OutgoingWire :loan="loan"/>
      </b-col>
      <b-col>
        <SetupLoanPayment :loan="loan"/>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import OutgoingWire from "@/components/Loan/Terms/OutgoingWire.vue";
import SetupLoanPayment from "@/components/servicing/SetupLoanPayment.vue";
import { mapGetters } from "vuex";
export default {
  components: { SetupLoanPayment, OutgoingWire },
  async fetch({ store, params }) {
    await store.dispatch("loans/GET_LOAN", params.id);
  },
  computed: mapGetters({
    loan: "loans/loan"
  })
};
</script>

<style lang="scss" scoped>
</style>