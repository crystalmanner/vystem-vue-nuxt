<template>
  <table class="table table-stripe">
    <b-row>
      <b-col cols="6">
        <tr>
          <th width="18%">First Name</th>
          <td width="32%">{{co_borrower.first_name}}</td>
        </tr>
        <tr>
          <th>Last Name</th>
          <td>{{co_borrower.last_name}}</td>
        </tr>
        <tr>
          <th>Phone</th>
          <td>{{co_borrower.phone}}</td>
        </tr>
      </b-col>
      <b-col cols="6">
        <tr>
          <th width="18%">Physical Address</th>
          <td width="32%">{{co_borrower.physical_address}}</td>
        </tr>
        <tr>
          <th>Mailing Address</th>
          <td>{{co_borrower.mailing_address}}</td>
        </tr>

        <tr>
          <th>Email</th>
          <td>{{co_borrower.email}}</td>
        </tr>
      </b-col>
    </b-row>
  </table>
</template>

<script>
export default {
  props: ["co_borrower"]
};
</script>

<style lang="scss" scoped>
</style>