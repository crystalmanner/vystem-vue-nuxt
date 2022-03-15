<template>
  <b-card>
    <LoanHeader :loan="loan"></LoanHeader>
    <b-nav tabs small class="mb-3 text-uppercase">
      <b-nav-item :to="`/loans/${$route.params.id}/`" exact>Detail</b-nav-item>
      <b-nav-item :to="`/loans/${$route.params.id}/property`">Property</b-nav-item>
      <b-nav-item :to="`/loans/${$route.params.id}/terms`">Terms</b-nav-item>
      <b-nav-item :to="`/loans/${$route.params.id}/documents`" :document="document">Documents</b-nav-item>
      <b-nav-item :to="`/loans/${$route.params.id}/borrowers`">Borrowers</b-nav-item>
      <b-nav-item :to="`/loans/${$route.params.id}/insurance`">Insurance</b-nav-item>
      <b-nav-item :to="`/loans/${$route.params.id}/third-party`">Third Party</b-nav-item>
      <b-nav-item :to="`/loans/${$route.params.id}/conversation`">Conversation</b-nav-item>
      <b-nav-item :to="`/loans/${$route.params.id}/draws`">Draws</b-nav-item>
      <b-nav-item :to="`/loans/${$route.params.id}/underwriting`">Underwriting</b-nav-item>
      <b-nav-item :to="`/loans/${$route.params.id}/servicing`">Servicing</b-nav-item>
      <b-nav-item :to="`/loans/${$route.params.id}/timeline`">Timeline</b-nav-item>
      <b-nav-item-dropdown id="my-nav-dropdown" text="Actions" toggle-class="nav-link-custom">
        <label class="dropdown-action-title">PDFs:</label>
        <b-dropdown-item @click="bpo()">Generate BPO</b-dropdown-item>
        <b-dropdown-item @click="termSheet()">Generate Termsheet</b-dropdown-item>
        <b-dropdown-item
          :to="`/loans/${$route.params.id}/underwriting_approval`"
        >Generate Underwriting Approval</b-dropdown-item>
        <b-dropdown-divider></b-dropdown-divider>
        <label class="dropdown-action-title">Actions:</label>
        <b-dropdown-item>Clone Loan</b-dropdown-item>
        <b-dropdown-item>Internal Modification</b-dropdown-item>
        <b-dropdown-item :to="`/loans/${$route.params.id}/cancel_loan`">Cancel</b-dropdown-item>
      </b-nav-item-dropdown>
    </b-nav>

    <nuxt-child :key="$route.params.id" :loan="loan"/>
  </b-card>
</template>

<script>
import { mapGetters } from "vuex";
import LoanHeader from "@/components/Loan/Base/LoanHeader.vue";
export default {
  components: { LoanHeader },
  data() {
    return {
      isLoading: false
    };
  },
  async fetch({ store, params }) {
    this.isLoading = true;
    await store.dispatch("loan/GET_LOAN", params.id);
    await store.dispatch("loans/GET_DOCUMENTS", params.id);
    this.isLoading = false;
  },
  computed: mapGetters({
    loan: "loan/loan",
    document: "loans/documents"
  }),
  methods: {
    termSheet() {
      this.$axios
        .get("/v1/loans/termsheet/" + this.$route.params.id)
        .then(response => {
          window.open(`${response.data[0].data}`, "_blank");
        })
        .catch(e => {
          this.formErrors.push(e);
        });
    },
    bpo() {
      this.$axios
        .get("/v1/loans/bpo/" + this.$route.params.id)
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

<style lang="scss" scoped>
a.nav-link {
  color: #ccc;
}
a.nav-link:hover {
  color: #000;
}
</style>