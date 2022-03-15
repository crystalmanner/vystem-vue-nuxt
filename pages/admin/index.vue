<template>
  <div>
    <b-card title="Admin">
      <b-card-text>
        <ul>
          <li>
            <b-nav-item :to="`/admin/reassign-loan`" exact
              >Reassign Loan</b-nav-item
            >
          </li>
          <li>
            <b-nav-item :to="`/admin/ressign-clients`" exact
              >Ressign Clients</b-nav-item
            >
          </li>
          <li><b-nav-item :to="`/admin/brokers`" exact>Brokers</b-nav-item></li>
          <li>
            <b-nav-item :to="`/admin/call-report`" exact
              >Call Report</b-nav-item
            >
          </li>
          <li>
            <b-nav-item :to="`/admin/doc-types`" exact>Doc Types</b-nav-item>
          </li>
          <li>
            <b-nav-item :to="`/admin/merge-clients`" exact
              >Merge Clients</b-nav-item
            >
          </li>
          <li>
            <b-nav-item :to="`/admin/processing-docs`" exact
              >Processing Docs</b-nav-item
            >
          </li>
          <li><b-nav-item :to="`/admin/users`" exact>Users</b-nav-item></li>
        </ul>
      </b-card-text>
    </b-card>
  </div>
</template>
<script>
export default {};
</script>
