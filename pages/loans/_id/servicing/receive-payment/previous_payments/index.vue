<template>
  <div>
    <ServicingLoanNav></ServicingLoanNav>
    <ReceivePaymentNav></ReceivePaymentNav>
    <b-button variant="secondary" size="md" v-b-modal.add-payment-reference>Add Payment Reference</b-button>
    <AddPaymentReference @createItem="createItem"></AddPaymentReference>
    <PaymentReference :loan="loan" :payment_reference="payment_reference"></PaymentReference>
  </div>
</template>

<script>
import ServicingLoanNav from "@/components/Loan/Servicing/ServicingLoanNav.vue";
import ReceivePaymentNav from "@/components/Loan/Servicing/ReceivePaymentNav.vue";
import PaymentReference from "@/components/servicing/PaymentReference";
import AddPaymentReference from "@/components/Loan/Servicing/AddPaymentReference.vue";
import { mapGetters } from "vuex";
export default {
  props: ["loan"],
  components: {
    ServicingLoanNav,
    ReceivePaymentNav,
    PaymentReference,
    AddPaymentReference
  },
  async fetch({ store, params }) {
    await store.dispatch("loan_servicing/GET_PAYMENT_REFERENCE", params.id);
  },
  computed: mapGetters({
    payment_reference: "loan_servicing/payment_reference"
  }),
  methods: {
    createItem: async function(e) {
      await this.$store.dispatch("loan_servicing/POST_ADD_PAYMENT_REFERENCE", {
        id: this.$route.params.id,
        form: e
      });
      await this.$store.dispatch(
        "loan_servicing/GET_PAYMENT_REFERENCE",
        this.$route.params.id
      );
    },
    sendInfo(e) {
      this.formItem = e;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>