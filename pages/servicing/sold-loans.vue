<template>
  <b-card title="Servicing">
    <ServicingNav></ServicingNav>
    <b-card-text>
      <br>
      <strong>
        <SoldLoan :sold_loan="sold_loan"></SoldLoan>
      </strong>
    </b-card-text>
  </b-card>
</template>

<script>
import ServicingNav from "@/components/servicing/ServicingNav";
import SoldLoan from "@/components/servicing/SoldLoan";
import { mapGetters } from "vuex";
export default {
  components: {
    SoldLoan,
    ServicingNav
  },
  async fetch({ store, params }) {
    await store.dispatch("servicing/GET_SOLD_LOAN");
  },
  computed: mapGetters({
    sold_loan: "servicing/sold_loan"
  })
};
</script>
<style lang="scss" scoped>
</style>