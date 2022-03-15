<template>
  <table class="table table-stripe">
    <tr>
      <th width="18%">First Name</th>
      <td width="32%">{{guarantor.legal_name}}</td>
    </tr>
    <tr>
      <th>Phone</th>
      <td>{{guarantor.physical_address}}</td>
    </tr>
    <tr>
      <th>Email</th>
      <td>{{guarantor.mailing_address}}</td>
    </tr>
  </table>
</template>

<script>
export default {
  props: ["guarantor"]
};
</script>

<style lang="scss" scoped>
</style>