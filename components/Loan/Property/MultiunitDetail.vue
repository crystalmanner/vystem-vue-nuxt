<template>
  <div v-if="display == true ">
    <div class="row">
      <div class="col-md-4 col-sm-6">
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
            <td class="text-muted no-wrap">
              <i class="fa fa-usd"></i>Price Per Sq Ft
            </td>
            <td class="no-wrap" style="padding-left: 10px;">
              <strong>{{(data.building.as_is_value / data.building.sq_ft)}}</strong>
            </td>
          </tr>
          <tr>
            <td class="text-muted no-wrap">Confidence</td>
            <td class="no-wrap" style="padding-left: 10px;">
              <strong>{{data.building.confidence}}</strong>
            </td>
          </tr>
        </table>
      </div>
      <div class="col-md-4 col-sm-6">
        <table class="table-striped property-detail-table">
          <tr>
            <td class="text-muted no-wrap">
              <i class="fa fa-bars"></i> Number of Floors
            </td>
            <td class="no-wrap" style="padding-left: 10px;">
              <strong>{{data.building.number_of_floors}}</strong>
            </td>
          </tr>
          <tr>
            <td class="text-muted no-wrap">
              <i class="fa fa-square"></i> Number of Units
            </td>
            <td class="no-wrap" style="padding-left: 10px;">
              <strong>{{data.building.units_num}}</strong>
            </td>
          </tr>
        </table>
      </div>
      <div class="col-md-4 col-sm-6">
        <table class="table-striped property-detail-table">
          <tr>
            <td class="text-muted no-wrap">
              <i class="fa fa-cube"></i> Building SQ FT
            </td>
            <td class="no-wrap" style="padding-left: 10px;">
              <strong>
                <span class="sqft">{{data.building.building_sq_ft | numeral('0,0') }}</span>
              </strong>
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