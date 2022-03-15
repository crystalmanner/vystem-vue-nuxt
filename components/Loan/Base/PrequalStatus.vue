<template>
  <table class="table table-striped">
    <thead>
      <th data-sortable="true">Item</th>
      <th data-sortable="true">Status</th>
    </thead>
    <tbody>
      <tr>
        <td v-if="prequal_status.prequal_type === null">
          Prequal App
          <sup class="text-danger">*</sup>
        </td>
        <td v-else>
          <a :href="prequal_status.prequal_url" target="_blank">
            Prequal App
            <sup class="text-danger">*</sup>
          </a>
        </td>
        <td v-if="prequal_status.prequal_all && prequal_status.prequal_all.length > 0">
          <div v-if="prequal_status.prequal_type !== null">
            <span class="label label-success disabled">Approved</span>
          </div>
          <div v-else-if="prequal_status.prequal_app !== null">
            <span class="label label-danger">Declined</span>
          </div>
          <div v-else>
            <span class="label label-default">Pending Review</span>
          </div>
        </td>
        <td v-else>
          <span class="label label-primary">Missing</span>
        </td>
      </tr>
      <tr>
        <td v-if="prequal_status.creditreport_type === null">
          Credit Report
          <sup class="text-danger">*</sup>
        </td>
        <td v-else>
          <a :href="prequal_status.creditreport_url" target="_blank">
            Credit Report
            <sup class="text-danger">*</sup>
          </a>
        </td>
        <td v-if="prequal_status.creditreport_all && prequal_status.creditreport_all.length > 0">
          <div v-if="prequal_status.creditreport_type !== null">
            <span class="label label-success disabled">Approved</span>
          </div>
          <div v-else-if="prequal_status.creditreport_app !== null">
            <span class="label label-danger">Declined</span>
          </div>
          <div v-else>
            <span class="label label-default">Pending Review</span>
          </div>
        </td>
        <td v-else>
          <span class="label label-primary">Missing</span>
        </td>
      </tr>
      <tr>
        <td v-if="prequal_status.sign_type === null">
          Sig Auth
          <sup class="text-danger">*</sup>
        </td>
        <td v-else>
          <a :href="prequal_status.sign_url" target="_blank">
            Sig Auth
            <sup class="text-danger">*</sup>
          </a>
        </td>
        <td v-if="prequal_status.sign_all && prequal_status.sign_all.length > 0">
          <div v-if="prequal_status.sign_type !== null">
            <span class="label label-success disabled">Approved</span>
          </div>
          <div v-else-if="prequal_status.sign_app !== null">
            <span class="label label-danger">Declined</span>
          </div>
          <div v-else>
            <span class="label label-default">Pending Review</span>
          </div>
        </td>
        <td v-else>
          <span class="label label-primary">Missing</span>
        </td>
      </tr>
      <tr>
        <td v-if="prequal_status.government_type === null">
          Government Picture ID
          <sup class="text-danger">*</sup>
        </td>
        <td v-else>
          <a :href="prequal_status.government_url" target="_blank">
            Government Picture ID
            <sup class="text-danger">*</sup>
          </a>
        </td>
        <td v-if="prequal_status.government_all && prequal_status.government_all.length > 0">
          <div v-if="prequal_status.government_type !== null">
            <span class="label label-success disabled">Approved</span>
          </div>
          <div v-else-if="prequal_status.government_app !== null">
            <span class="label label-danger">Declined</span>
          </div>
          <div v-else>
            <span class="label label-default">Pending Review</span>
          </div>
        </td>
        <td v-else>
          <span class="label label-primary">Missing</span>
        </td>
      </tr>
      <tr>
        <td v-if="prequal_status.w9_type === null">
          W9
          <sup class="text-danger">*</sup>
        </td>
        <td v-else>
          <a :href="prequal_status.w9_url" target="_blank">
            W9
            <sup class="text-danger">*</sup>
          </a>
        </td>
        <td v-if="prequal_status.w9_all && prequal_status.w9_all.length > 0">
          <div v-if="prequal_status.w9_type !== null">
            <span class="label label-success disabled">Approved</span>
          </div>
          <div v-else-if="prequal_status.w9_app !== null">
            <span class="label label-danger">Declined</span>
          </div>
          <div v-else>
            <span class="label label-default">Pending Review</span>
          </div>
        </td>
        <td v-else>
          <span class="label label-primary">Missing</span>
        </td>
      </tr>
      <tr>
        <td v-if="prequal_status.communication_type === null">
          Communication Consent
          <sup class="text-danger">*</sup>
        </td>
        <td v-else>
          <a :href="prequal_status.communication_url" target="_blank">
            Communication Consent
            <sup class="text-danger">*</sup>
          </a>
        </td>
        <td v-if="prequal_status.communication_all && prequal_status.communication_all.length > 0">
          <div v-if="prequal_status.communication_type !== null">
            <span class="label label-success disabled">Approved</span>
          </div>
          <div v-else-if="prequal_status.communication_app !== null">
            <span class="label label-danger">Declined</span>
          </div>
          <div v-else>
            <span class="label label-default">Pending Review</span>
          </div>
        </td>
        <td v-else>
          <span class="label label-primary">Missing</span>
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script>
export default {
  props: ["loan"],
  data() {
    return {
      prequal_status: []
    };
  },
  created() {
    this.currentUrl = window.location.pathname;
    this.$axios
      .get(`/v1/loans/prequal-status/` + this.loan.loan_detail.client_id)
      .then(response => {
        this.prequal_status = response.data[0].data;
      })
      .catch(e => {
        this.errors.push(e);
      });
  }
};
</script>

<style lang="scss" scoped>
</style>