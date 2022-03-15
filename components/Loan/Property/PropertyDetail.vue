<template>
  <div v-if="display == true ">
    <div class="row">
      <div class="col-md-4 col-sm-6">
        <table class="table table-striped property-detail-table">
          <tr>
            <td class="text-muted no-wrap">
              <i class="fa fa-home"></i> Type
            </td>
            <td class="no-wrap" style="padding-left: 10px;">
              <strong>{{data.building.type}}</strong>
            </td>
          </tr>
        </table>
      </div>
      <div class="col-md-4 col-sm-6">
        <table class="table table-striped property-detail-table">
          <tr>
            <td class="text-muted no-wrap">
              <i class="fa fa-bed"></i> Beds / Bathrooms
            </td>
            <td class="no-wrap" style="padding-left: 10px;">
              <strong>{{data.building.bedrooms}} | {{data.building.full_bathrooms}}{{data.building.bathrooms}}</strong>
            </td>
          </tr>
          <tr>
            <td class="text-muted no-wrap">
              <i class="fa fa-car"></i> Garage Size
            </td>
            <td class="no-wrap" style="padding-left: 10px;">
              <strong>{{data.building.garage_cars}}</strong>
            </td>
          </tr>
          <tr>
            <td class="text-muted no-wrap">
              <i class="fa fa-car"></i> Garage Type
            </td>
            <td class="no-wrap" style="padding-left: 10px;">
              <strong>{{data.building.garage_type}}</strong>
            </td>
          </tr>
        </table>
      </div>
      <div class="col-md-4 col-sm-6">
        <table class="table table-striped property-detail-table">
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
              <i class="fa fa-cube"></i>Unfinished
            </td>
            <td class="no-wrap" style="padding-left: 10px;">
              <strong>{{data.building.unfinished_sq_ft | numeral('0,0') }}</strong>
            </td>
          </tr>
          <tr>
            <td class="text-muted no-wrap">
              <i class="fa fa-arrows-alt"></i> Lot Sq Ft
            </td>
            <td class="no-wrap" style="padding-left: 10px;">
              <strong
                v-if="this.building_type == 'collateral'"
              >{{data.building.lot_sqft | numeral('0,0')}}</strong>
              <strong v-else>{{data.building.lot_sq_ft | numeral('0,0')}}</strong>
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