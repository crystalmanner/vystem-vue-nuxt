<template>
  <table class="table table-stripe">
    <b-row>
      <b-col cols="6">
        <tr>
          <th width="18%">First Name</th>
          <td width="32%">{{entity.first_name}}</td>
        </tr>
        <tr>
          <th>Phone</th>
          <td>{{entity.phone}}</td>
        </tr>
        <tr>
          <th>Email</th>
          <td>{{entity.email}}</td>
        </tr>
      </b-col>
      <b-col cols="6">
        <tr>
          <th width="18%">Physical Address</th>
          <td width="32%">{{entity.physical_address}}</td>
        </tr>
        <tr>
          <th>Mailing Address</th>
          <td>{{entity.mailing_address}}</td>
        </tr>
      </b-col>
    </b-row>
  </table>
</template>

<script>
export default {
  props: ["entity"]
};
</script>

<style lang="scss" scoped>
</style>