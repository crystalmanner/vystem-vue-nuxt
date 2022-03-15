<template>
  <div>
    <ServicingLoanNav></ServicingLoanNav>
    <ReceivePaymentNav></ReceivePaymentNav>
    <b-button
      variant="secondary"
      size="md"
      v-b-modal.add-payment-reference-item
    >Add Payment Reference Item</b-button>
    <AddPaymentReferenceItem @createItem="createItem"></AddPaymentReferenceItem>
    <PaymentReferenceItem :payment_reference_item="payment_reference_item"></PaymentReferenceItem>
  </div>
</template>

<script>
import ServicingLoanNav from "@/components/Loan/Servicing/ServicingLoanNav.vue";
import ReceivePaymentNav from "@/components/Loan/Servicing/ReceivePaymentNav.vue";
import PaymentReferenceItem from "@/components/servicing/PaymentReferenceItem";
import AddPaymentReferenceItem from "@/components/Loan/Servicing/AddPaymentReferenceItem";
import { mapGetters } from "vuex";
export default {
  props: ["payment_reference"],
  components: {
    ServicingLoanNav,
    ReceivePaymentNav,
    PaymentReferenceItem,
    AddPaymentReferenceItem
  },
  async fetch({ store, params }) {
    await store.dispatch(
      "loan_servicing/GET_PAYMENT_REFERENCE_ITEM",
      params.previous_payment_id
    );
  },
  computed: mapGetters({
    payment_reference_item: "loan_servicing/payment_reference_item"
  }),
  methods: {
    createItem: async function(e) {
      await this.$store.dispatch(
        "loan_servicing/POST_ADD_PAYMENT_REFERENCE_ITEM",
        {
          id: this.$route.params.previous_payment_id,
          form: e
        }
      );
      await this.$store.dispatch(
        "loan_servicing/GET_PAYMENT_REFERENCE_ITEM",
        this.$route.params.previous_payment_id
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