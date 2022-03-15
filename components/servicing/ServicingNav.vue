<template>
  <b-nav tabs small>
    <b-nav-item to="/servicing/" exact>Dashboard</b-nav-item>
    <b-nav-item to="/servicing/recently-funded-loans">Recently Funded Loans</b-nav-item>
    <b-nav-item to="/servicing/maturity-notices">Maturity Notices</b-nav-item>
    <b-nav-item to="/servicing/monthly-invoices">Monthly Statements</b-nav-item>
    <b-nav-item to="/servicing/pending-modifications">Pending Modifications</b-nav-item>
    <b-nav-item to="/servicing/recent-payoffs">Recent Payoff</b-nav-item>
    <b-nav-item to="/servicing/sold-loans">Sold Loans</b-nav-item>
    <b-nav-item to="/servicing/blacklist">Blacklist</b-nav-item>
    <b-nav-item to="/servicing/report">Report</b-nav-item>
    <b-nav-item to="/servicing/draw-requests">Draw Requests</b-nav-item>
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