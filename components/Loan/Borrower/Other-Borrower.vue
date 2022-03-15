<template>
  <table class="table table-stripe">
    <tr>
      <th width="18%">First Name</th>
      <td width="32%">{{other_borrower.name}}</td>
    </tr>
    <tr>
      <th>Phone</th>
      <td>{{other_borrower.physical_address}}</td>
    </tr>
    <tr>
      <th>Email</th>
      <td>{{other_borrower.mailing_address}}</td>
    </tr>
    <tr>
      <th>Phone</th>
      <td>{{other_borrower.phone}}</td>
    </tr>
  </table>
</template>

<script>
export default {
  props: ["other_borrower"]
};
</script>

<style lang="scss" scoped>
</style>