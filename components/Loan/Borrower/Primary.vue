<template>
  <b-row>
    <b-col cols="12">
      <table class="table table-stripe">
        <tr>
          <th>First Name</th>
          <td>{{primary.first_name}}</td>
        </tr>
        <tr>
          <th>Last Name</th>
          <td>{{primary.last_name}}</td>
        </tr>
        <tr>
          <th>Phone</th>
          <td>{{primary.phone}}</td>
        </tr>

        <!-- <b-col cols="6">
        <tr>
          <th width="18%">Physical Address</th>
          <td width="32%">{{primary.physical_address}}</td>
        </tr>
        <tr>
          <th>Mailing Address</th>
          <td>{{primary.mailing_address}}</td>
        </tr>

        <tr>
          <th>Email</th>
          <td>{{primary.email}}</td>
        </tr>
        </b-col>-->
      </table>
    </b-col>
  </b-row>
</template>

<script>
export default {
  props: ["primary"]
};
</script>

<style lang="scss" scoped>
</style>