<template>
  <div v-if="display == true">
    <hr style="margin-bottom: 3px">
    <div v-if="this.building_type == 'existing'">
      <div class="row">
        <div class="col-md-4">
          <small>
            <strong>Client As-Is</strong>
          </small>
          <br>
          <span>{{data.building.client_estimated_asis | currency}}</span>
        </div>
        <div class="col-md-4" v-if="data.valuations_approved == 'true'">
          <small>
            <strong>As Is Value</strong>
          </small>
          <br>
          <span>{{data.building.as_is_value | currency }}</span>
        </div>
        <div class="col-md-4" v-if="data.valuations_approved == 'true'">
          <small>
            <strong>Replacement Value</strong>
          </small>
          <br>
          <span>{{data.building.replacement_cost | currency}}</span>
        </div>
      </div>
    </div>
    <div v-if="this.building_type == 'building'">
      <div class="row">
        <div class="col-md-4">
          <small>
            <strong>Client As-Is</strong>
          </small>
          <br>
          <span>{{data.building.client_as_is_value | currency}} | {{data.building.client_estimated_asis | currency}}</span>
        </div>
        <div class="col-md-4">
          <small>
            <strong>Client Est ARV/FV</strong>
          </small>
          <br>
          <span>{{data.building.client_arv | currency}}</span>
        </div>
        <div class="col-md-4" v-if="data.valuations_approved == 'true'">
          <small>
            <strong>Final Value</strong>
          </small>
          <br>
          <span>{{data.building.final_value | currency}}</span>
        </div>
      </div>
    </div>
    <div v-if="this.building_type == 'collateral'">
      <div class="row">
        <div class="col-md-2">
          <small>
            <strong>Lien Position</strong>
          </small>
          <p>{{data.building.lien_position}}</p>
        </div>
        <div class="col-md-2" v-if="data.valuations_approved == 'true'">
          <small>
            <strong>Value</strong>
          </small>
          <br>
          <span class="client_value">{{data.building.final_value | currency}}</span>
        </div>
        <div class="col-md-2">
          <small>
            <strong>Final Value</strong>
          </small>
          <p>{{data.building.final_value | currency}}</p>
        </div>
        <div class="col-md-2">
          <small>
            <strong>Debt</strong>
          </small>
          <p>{{data.building.estimated_total_debt | currency}}</p>
        </div>
        <div class="col-md-2">
          <small>
            <strong>Equity</strong>
          </small>
          <p>{{data.building.equity | currency}}</p>
        </div>
      </div>
    </div>
    <hr style="margin-bottom: 10px">
    <span>
      <small class="text-muted">
        <strong>Property Notes/Unique Features</strong>
      </small>
      <br>
      <div v-html="data.building.notes"></div>
    </span>
    <span v-if="data.building.type == 'Land'">
      <small class="text-muted">
        <strong>Why has a permit not been issued?</strong>
      </small>
      <br>
      <div v-html="data.building.reason_land_permit_not_issued"></div>
    </span>
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