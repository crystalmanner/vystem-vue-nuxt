<template>
  <div v-if="display == true ">
    <div class="row">
      <div class="col-md-4 col-sm-6">
        <table class="table-striped property-detail-table">
          <tr>
            <td class="text-muted">
              <i class="fa fa-home"></i> Type
            </td>
            <td style="padding-left: 10px;">
              <strong>{{data.building.type}}</strong>
            </td>
          </tr>
          <tr>
            <td class="text-muted no-wrap">Do you have a permit?</td>
            <td style="padding-left: 10px;">
              <strong v-if="data.building.have_a_land_permit == 1">Yes</strong>
              <strong v-else-if="data.building.have_a_land_permit == 2">No</strong>
              <strong v-else>Permit Not Required</strong>
            </td>
          </tr>
          <tr>
            <td class="text-muted">Construction Loan</td>
            <td style="padding-left: 10px;">
              <strong v-if="data.building.vertical_construction_loan == true">Yes</strong>
              <strong v-else>No</strong>
            </td>
          </tr>
        </table>
      </div>
      <div class="col-md-4 col-sm-6">
        <table class="table-striped property-detail-table">
          <tr>
            <td class="text-muted">Current Zoning</td>
            <td style="padding-left: 10px;">
              <strong>{{data.building.zoning}}</strong>
            </td>
          </tr>
          <tr>
            <td class="text-muted">
              <i class="fa fa-arrows-alt"></i> Lot Sq Ft
            </td>
            <td style="padding-left: 10px;">
              <strong
                v-if="this.building_type == 'collateral'"
              >{{data.building.lot_sqft | numeral('0,0')}}</strong>
              <strong v-else>{{data.building.lot_sq_ft | numeral('0,0')}}</strong>
            </td>
          </tr>
          <tr>
            <td class="text-muted no-wrap">Price Per Sq Ft</td>
            <td style="padding-left: 10px;">
              <strong>{{data.building.as_is_value / data.building.sq_ft}}</strong>
            </td>
          </tr>
        </table>
      </div>
      <div class="col-md-4 col-sm-6">
        <table class="table-striped property-detail-table">
          <tr>
            <td class="text-muted no-wrap">
              <i class="fa fa-cube"></i>Single Lot
            </td>
            <td class="no-wrap" style="padding-left: 10px;">
              <strong v-if="data.building.type_of_lot == true">Yes</strong>
              <strong v-else>No</strong>
            </td>
          </tr>
          <tr>
            <td class="text-muted no-wrap">
              <i class="fa fa-arrows-alt"></i> Lot Developed?
            </td>
            <td class="no-wrap" style="padding-left: 10px;">
              <strong v-if="data.building.lot_already_developed == true">Yes</strong>
              <strong v-else>No</strong>
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    building_id: "",
    building_type: ""
  },
  data: function() {
    return {
      data: [],
      display: false
    };
  },
  created() {
    this.$axios
      .get(`/v1/loans/property/` + this.building_type + `/` + this.building_id)
      .then(response => {
        this.data = response.data[0].data;
        this.display = true;
      });
  }
};
</script>

<style>
</style>