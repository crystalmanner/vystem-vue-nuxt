<template>
  <b-nav tabs small class="mb-3 text-uppercase">
    <b-nav-item :to="`/loans/${$route.params.id}/property`" exact>Summary</b-nav-item>
    <b-nav-item :to="`/loans/${$route.params.id}/property/existing_building`" exact>
      Existing Building
      <b-badge variant="primary">{{loan.property_information.existing_building.length}}</b-badge>
    </b-nav-item>
    <b-nav-item :to="`/loans/${$route.params.id}/property/building`">
      Building
      <b-badge variant="primary">{{loan.property_information.building.length}}</b-badge>
    </b-nav-item>
    <b-nav-item :to="`/loans/${$route.params.id}/property/loan_collateral`">
      Loan Collateral
      <b-badge variant="primary">{{loan.property_information.loan_collateral.length}}</b-badge>
    </b-nav-item>
  </b-nav>
</template>

<script>
export default {
  props: ["loan"]
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