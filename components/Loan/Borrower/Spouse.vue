<template>
  <table class="table table-stripe">
    <b-row>
      <b-col cols="6">
        <tr>
          <th width="18%">First Name</th>
          <td width="32%">{{spouse.spouse_first_name}}</td>
        </tr>
        <tr>
          <th>Last Name</th>
          <td>{{spouse.spouse_last_name}}</td>
        </tr>
        <tr>
          <th>Phone</th>
          <td>{{spouse.spouse_phone}}</td>
        </tr>
      </b-col>
      <b-col cols="6">
        <tr>
          <th width="18%">Physical Address</th>
          <td width="32%">{{spouse.spouse_physical_address}}</td>
        </tr>
        <tr>
          <th>Mailing Address</th>
          <td>{{spouse.spouse_mailing_address}}</td>
        </tr>

        <tr>
          <th>Email</th>
          <td>{{spouse.spouse_email}}</td>
        </tr>
      </b-col>
    </b-row>
  </table>
</template>

<script>
export default {
  props: ["spouse"]
};
</script>

<style lang="scss" scoped>
</style>