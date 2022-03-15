<template>
  <div>
    <ServicingLoanNav></ServicingLoanNav>
    <b-card title="Maturity Date">
      <b-card-text>
        <p>
          <strong>Current Maturity Date:</strong>
          {{ loan.loan_detail.current_maturity_date }}
        </p>
        <p>
          <strong>Original Maturity Date:</strong>
          {{ loan.loan_detail.loan_maturity_date }}
        </p>
      </b-card-text>
    </b-card>
    <b-card>
      <b-card-text>
        <b-button variant="secondary" size="md" v-b-modal.add-extension
          >Add Extension</b-button
        >
        <ExtensionForm @createItem="createItem"></ExtensionForm>
        <Extensions :loan_extensions="loan_extensions"></Extensions>
      </b-card-text>
    </b-card>
  </div>
</template>

<script>
import ServicingLoanNav from "@/components/Loan/Servicing/ServicingLoanNav.vue";
import Extensions from "@/components/Loan/Servicing/Transactions/Extensions.vue";
import ExtensionForm from "@/components/Loan/Servicing/Transactions/AddExtensionForm.vue";
import { mapGetters } from "vuex";
export default {
  props: ["loan"],
  components: {
    ServicingLoanNav,
    Extensions,
    ExtensionForm
  },
  async fetch({ store, params }) {
    await store.dispatch("loan_servicing/GET_LOAN_EXTENSIONS", params.id);
  },
  computed: mapGetters({
    loan_extensions: "loan_servicing/all_loan_extensions",
    add_loan_extension: "loan_servicing/add_loan_extension"
  }),
  methods: {
    createItem: async function(e) {
      await this.$store.dispatch("loan_servicing/ADD_LOAN_EXTENSION", {
        id: this.$route.params.id,
        form: e
      });
      await this.$store.dispatch(
        "loan_servicing/GET_LOAN_EXTENSIONS",
        this.$route.params.id
      );
    }
  }
};
</script>

<style lang="scss"></style>
