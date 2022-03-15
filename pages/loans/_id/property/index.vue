<template>
  <div>
    <PropertyLoanNav></PropertyLoanNav>
    <PropertySummaryForm></PropertySummaryForm>
  </div>
</template>

<script>
import PropertyLoanNav from "@/components/Loan/Property/PropertyLoanNav.vue";
import PropertySummaryForm from "@/components/Loan/Property/PropertySummaryForm.vue";
export default {
  props: ["loan"],
  components: {
    PropertyLoanNav,
    PropertySummaryForm
  }
};
</script>

<style lang="scss" scoped>
</style>