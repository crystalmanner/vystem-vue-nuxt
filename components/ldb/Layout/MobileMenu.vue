<template>
  <ul class="nav nav-mobile-menu">
    <form class="navbar-form navbar-left navbar-search-form" role="search">
      <div class="input-group">
        <i class="nc-icon nc-zoom-split"></i>
        <input type="text" value class="form-control" placeholder="Search...">
      </div>
    </form>
    <drop-down>
      <i slot="title" class="nc-icon nc-bullet-list-67"></i>
      <nuxt-link to="/profile" class="dropdown-item text-danger">
        <i class="nc-icon nc-circle-09"></i> Profile
      </nuxt-link>
      <nuxt-link to="/auth/logout" class="dropdown-item text-danger">
        <i class="nc-icon nc-button-power pt-1"></i> Log out
      </nuxt-link>
    </drop-down>
  </ul>
</template>
<script>
export default {}
</script>
<style>
</style>
