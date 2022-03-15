<template>
  <div class="mb-3">
    <div class="row">
      <div class="col">
        <span class="pt-0 mt-0 mb-0 font-weight-bold lead">{{loan.loan_detail.loan_number}}</span>

        <div class="font-weight-light">
          <span
            class="font-weight-bold text-muted"
          >{{loan.borrower.primary.first_name}} {{loan.borrower.primary.last_name}}</span>
          <small class="text-muted">({{loan.sales.name}})</small>
          <br>
          <LoanSubjectProperty :loan="loan"/>
          <br>
        </div>
      </div>
      <div class="col text-right">
        <div>
          <LoanType :loan="loan"/>
          <LoanStatus :loan="loan"/>
        </div>
        <div class="pt-2">
          <LoanWorkflow :loan="loan" v-if="loan.status == 'Pending'"/>
          <LoanAmounts :loan="loan"/>
        </div>
        <div class="pt-2">
          <AsIsArv :loan="loan"/>
          <LoanSecondary :loan="loan"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LoanType from "@/components/Loan/Base/Header/LoanType";
import LoanHoldback from "@/components/Loan/Base/Header/LoanHoldback";
import LoanAmounts from "@/components/Loan/Base/Header/LoanAmounts";
import LoanStatus from "@/components/Loan/Base/Header/LoanStatus";
import LoanWorkflow from "@/components/Loan/Base/Header/LoanWorkflow";
import LoanSecondary from "@/components/Loan/Base/Header/LoanSecondary";
import AsIsArv from "@/components/Loan/Base/Header/AsIsArv";
import LoanSubjectProperty from "@/components/Loan/Base/Header/LoanSubjectProperty";
export default {
  props: ["loan"],
  components: {
    LoanType,
    LoanAmounts,
    LoanHoldback,
    LoanStatus,
    LoanWorkflow,
    LoanSecondary,
    AsIsArv,
    LoanSubjectProperty
  }
};
</script>

<style lang="scss" scoped>
</style>