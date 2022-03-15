<template>
  <b-nav tabs small class="mb-3 text-uppercase">
    <b-nav-item :to="`/loans/${$route.params.id}/servicing`" exact>Dashboard</b-nav-item>
    <b-nav-item :to="`/loans/${$route.params.id}/servicing/extensions`">Extensions</b-nav-item>
    <b-nav-item :to="`/loans/${$route.params.id}/servicing/statements/`">Statements</b-nav-item>
    <b-nav-item :to="`/loans/${$route.params.id}/servicing/payoff`">Payoff</b-nav-item>
    <b-nav-item :to="`/loans/${$route.params.id}/servicing/preferences`">Preferences</b-nav-item>
    <b-nav-item :to="`/loans/${$route.params.id}/servicing/receive-payment/`">Receive Payment</b-nav-item>
    <b-nav-item :to="`/loans/${$route.params.id}/servicing/general_ledger`">General Ledger</b-nav-item>
    <b-nav-item :to="`/loans/${$route.params.id}/servicing/draws`">Draws</b-nav-item>
    <b-nav-item :to="`/loans/${$route.params.id}/servicing/interest_reserve`">Interest Reserve</b-nav-item>
    <b-nav-item :to="`/loans/${$route.params.id}/servicing/interest_rates`">Interest Rates</b-nav-item>
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