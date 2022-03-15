<template>
  <div>
    <PropertyLoanNav :loan="loan"></PropertyLoanNav>
    <div v-for="row in loan.property_information.existing_building" :key="row.id">
      <b-card>
        <div class="row">
          <div class="col-md-2">
            <PropertyThumbnail :building_id="row.existing.id" building_type="existing"></PropertyThumbnail>
            <div style="margin-bottom: 8px;">
              <PropertyZillow :building_id=" row.existing.id" building_type="existing"></PropertyZillow>
            </div>
            <div style="margin-bottom: 8px;">
              <PropertyRedfine :building_id="row.existing.id" building_type="existing"></PropertyRedfine>
            </div>
            <div style="margin-bottom: 8px;" v-if="row.existing.link_1 != null">
              <a :href="row.existing.link_1" class="text-muted" target="_blank">
                <i class="fa fa-external-link"></i> Link 1
              </a>
            </div>
            <div style="margin-bottom: 8px;" v-if="row.existing.link_2 != null">
              <a :href="row.existing.link_2" class="text-muted" target="_blank">
                <i class="fa fa-external-link"></i> Link 2
              </a>
            </div>
            <div style="margin-bottom: 8px;" v-if="row.existing.link_3 != null">
              <a :href="row.existing.link_3" class="text-muted" target="_blank">
                <i class="fa fa-external-link"></i> Link 3
              </a>
            </div>
          </div>
          <div class="col-md-8">
            <div>
              <ExtendedDetails :building_id="row.existing.id" building_type="existing"></ExtendedDetails>
            </div>
            <br>
            <div
              v-if="row.existing.type == 'SFR' || row.existing.type == 'Manufactured' || row.existing.type == 'Mobile' || row.existing.type == 'Townhomes' || row.existing.type == 'Condo - attached' || row.existing.type == 'Condo - detached'"
            >
              <PropertyDetail :building_id="row.existing.id" building_type="existing"></PropertyDetail>
            </div>
            <div v-if="row.existing.type == 'Land'">
              <LandDetail :building_id="row.existing.id" building_type="existing"></LandDetail>
            </div>
            <div v-if="row.existing.type == 'Multi-Unit'">
              <MultiunitDetail :building_id="row.existing.id" building_type="existing"></MultiunitDetail>
            </div>
            <div
              v-if="row.existing.type == 'office' || row.existing.type == 'industrial' || row.existing.type=='retail'"
            >
              <CommercialDetail :building_id="row.existing.id" building_type="existing"></CommercialDetail>
            </div>
          </div>
        </div>
      </b-card>
    </div>
  </div>
</template>

<script>
import PropertyLoanNav from "@/components/Loan/Property/PropertyLoanNav.vue";
import PropertyThumbnail from "@/components/Loan/Property/PropertyThumbnail";
import PropertyZillow from "@/components/Loan/Property/PropertyZillow";
import PropertyRedfine from "@/components/Loan/Property/PropertyRedfine";
import ExtendedDetails from "@/components/Loan/Property/ExtendedDetails";
import PropertyDetail from "@/components/Loan/Property/PropertyDetail";
import LandDetail from "@/components/Loan/Property/LandDetail";
import MultiunitDetail from "@/components/Loan/Property/MultiunitDetail";
import CommercialDetail from "@/components/Loan/Property/CommercialDetail";
export default {
  props: ["loan"],
  components: {
    PropertyLoanNav,
    PropertyThumbnail,
    PropertyZillow,
    PropertyRedfine,
    ExtendedDetails,
    PropertyDetail,
    LandDetail,
    MultiunitDetail,
    CommercialDetail
  }
};
</script>

<style lang="scss" scoped>
</style>