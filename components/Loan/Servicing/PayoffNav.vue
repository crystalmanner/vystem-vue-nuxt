<template>
  <b-nav tabs small class="mb-3 text-uppercase">
    <b-nav-item :to="`/loans/${$route.params.id}/servicing/payoff`" exact>Generate Payoff</b-nav-item>
    <b-nav-item :to="`/loans/${$route.params.id}/servicing/payoff/previous-payoffs`">Previous Payoffs</b-nav-item>
    <b-nav-item :to="`/loans/${$route.params.id}/servicing/payoff/payoff-loan`">Payoff loan</b-nav-item>
  </b-nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
a.nav-link {
  color: #ccc;
}
a.nav-link:hover {
  color: #000;
}
</style>