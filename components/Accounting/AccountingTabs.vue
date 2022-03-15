<template>
  <b-nav tabs small class="mb-3 text-uppercase">
    <b-nav-item :to="`/accounting/commission`" exact>Commission</b-nav-item>
    <b-nav-item :to="`/accounting/draws`">Draws</b-nav-item>
    <b-nav-item :to="`/accounting/escrow_wire_request`">Escrow Wire Requests</b-nav-item>
    <b-nav-item :to="`/accounting/draw-wire-requests`">Draw Wire Requests</b-nav-item>
    <b-nav-item :to="`/accounting/forecasting`">Forecasting</b-nav-item>
    <b-nav-item :to="`/accounting/recently-paid-off`">Recently Paid off</b-nav-item>
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