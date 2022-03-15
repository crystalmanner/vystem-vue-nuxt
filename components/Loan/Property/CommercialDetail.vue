<template>
  <div v-if="display == true ">
    <div class="row">
      <div class="col-md-4 col-sm-4">
        <table class="table-striped property-detail-table">
          <tr>
            <td class="text-muted no-wrap">
              <i class="fa fa-home"></i> Type
            </td>
            <td class="no-wrap" style="padding-left: 10px;">
              <strong>{{data.building.type}}</strong>
            </td>
          </tr>
          <tr>
            <td class="text-muted no-wrap">Price Per Sq Ft</td>
            <td class="no-wrap" style="padding-left: 10px;">
              <strong>{{data.building.as_is_value / data.building.sq_ft}}</strong>
            </td>
          </tr>
          <tr>
            <td class="text-muted no-wrap">AS Is</td>
            <td class="no-wrap" style="padding-left: 10px;">
              <strong>{{data.building.as_is_value | currency}}</strong>
            </td>
          </tr>
        </table>
      </div>
      <div class="col-md-4 col-sm-8">
        <table class="table-striped property-detail-table">
          <tr>
            <td class="text-muted no-wrap">
              <i class="fa fa-bed"></i>Bedrooms
            </td>
            <td class="no-wrap" style="padding-left: 10px;">
              <strong>{{data.building.bedrooms}}</strong>
            </td>
          </tr>
          <tr>
            <td class="text-muted no-wrap">
              <i class="fa fa-bath"></i>Bathrooms Full | 3/4 | 1/2
            </td>
            <td class="no-wrap" style="padding-left: 10px;">
              <strong>{{data.building.full_bathrooms}} | {{data.building.three_quarter_bathrooms}} | {{data.building.half_bathrooms}}</strong>
            </td>
          </tr>
        </table>
      </div>
      <div class="col-md-4 col-sm-6">
        <table class="table-striped property-detail-table">
          <tr>
            <td class="text-muted no-wrap">
              <i class="fa fa-cube"></i>Current Sq Ft
            </td>
            <td class="no-wrap" style="padding-left: 10px;">
              <strong>{{data.building.sq_ft | numeral('0,0') }}</strong>
            </td>
          </tr>
          <tr>
            <td class="text-muted no-wrap">
              <i class="fa fa-arrows-alt"></i> Lot Sq Ft
            </td>
            <td class="no-wrap" style="padding-left: 10px;">
              <strong>{{data.building.lot_sq_ft | numeral('0,0') }}</strong>
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