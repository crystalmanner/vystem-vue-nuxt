<template>
  <div>
    <b-row>
      <b-col>
        <b-card title>
          <b-card-text></b-card-text>
        </b-card>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="8">
        <b-card title="Loan Stats">
          <b-card-text></b-card-text>
        </b-card>
        <b-card title="Summary">
          <b-card-text></b-card-text>
        </b-card>
        <b-card title="Exit Strategy">
          <b-card-text>{{loan.loan_detail.exit_strategy}}</b-card-text>
        </b-card>
        <b-card title="Photos">
          <b-card-text>
            <Photos :underwriting_photos="underwriting_photos"></Photos>
          </b-card-text>
        </b-card>
        <b-card title="Termsheet">
          <b-card-text></b-card-text>
        </b-card>
        <b-card title="Comments">
          <b-card-text></b-card-text>
        </b-card>
        <b-card title="Approval" class="approval-container">
          <b-card-text>
            <Approval/>
          </b-card-text>
        </b-card>
        <b-card title="Loan Info">
          <b-card-text>{{loan}}</b-card-text>
        </b-card>
      </b-col>
      <b-col cols="4">
        <b-card title>
          <b-card-text>
            <LoanCard :loan="loan"></LoanCard>
          </b-card-text>
        </b-card>
        <b-card title="LTV's">
          <b-card-text></b-card-text>
        </b-card>
        <b-card title="Status">
          <b-card-text></b-card-text>
        </b-card>
        <b-card title="Borrowers">
          <b-card-text></b-card-text>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import LoanCard from "@/components/Loan/Base/LoanCard.vue";
import Approval from "@/components/Loan/UnderWriting/Approval.vue";
import Photos from "@/components/Loan/UnderWriting/Photos.vue";
import { mapGetters } from "vuex";
export default {
  props: ["loan"],
  components: {
    LoanCard,
    Approval,
    Photos
  },
  async fetch({ store, params }) {
    await store.dispatch("loan/GET_UNDERWRITING_PHOTO", params.id);
  },
  computed: mapGetters({
    underwriting_photos: "loan/underwriting_photos"
  })
};
</script>

<style lang="scss" scoped>
</style>