<template>
  <table class="table table-striped">
    <tbody>
      <tr>
        <td>Client Approved:</td>
        <td>
          <x-boolean-icon :value="item_needed.has_approved_client"></x-boolean-icon>
        </td>
      </tr>
      <tr>
        <td>Existing Property:</td>
        <td>
          <x-boolean-icon :value="item_needed.has_existing"></x-boolean-icon>
        </td>
      </tr>
      <tr v-if="item_needed.loan_type_id !== 2">
        <td>Third Party Information:</td>
        <td>
          <x-boolean-icon :value="item_needed.has_all_third_party"></x-boolean-icon>
        </td>
      </tr>
      <tr>
        <td>Terms Complete:</td>
        <td>
          <x-boolean-icon :value="item_needed.has_loan_terms_complete"></x-boolean-icon>
        </td>
      </tr>
      <tr>
        <td v-if="item_needed.loan_type_id === 2">MLS/Pics</td>
        <td v-else>Photos</td>
        <td>
          <x-boolean-icon :value="item_needed.has_required_photos"></x-boolean-icon>
        </td>
      </tr>
      <tr v-if="item_needed.is_purchase === true && loan.is_escrow_loan === true">
        <td>PSA:</td>
        <td>
          <x-boolean-icon :value="item_needed.has_psa"></x-boolean-icon>
        </td>
      </tr>
      <tr v-if="item_needed.has_holdback === true">
        <td>SOW/Budget:</td>
        <td>
          <x-boolean-icon :value="item_needed.has_sow"></x-boolean-icon>
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script>
import XBooleanIcon from "@/components/Loan/XBooleanIcon.vue";
export default {
  props: ["loan"],
  components: {
    XBooleanIcon
  },
  data() {
    return {
      item_needed: []
    };
  },
  created() {
    this.currentUrl = window.location.pathname;
    this.$axios
      .get(`/v1/loans/item-needed/` + this.loan.loan_detail.id)
      .then(response => {
        this.item_needed = response.data[0].data;
      })
      .catch(e => {
        this.errors.push(e);
      });
  }
};
</script>

<style lang="scss" scoped>
</style>