<template>
  <div>
    <PropertyLoanNav :loan="loan"></PropertyLoanNav>
    <div v-for="row in loan.property_information.loan_collateral" :key="row.id">
      <b-card>
        <div class="row">
          <div class="col-md-2">
            <PropertyThumbnail :building_id="row.loan_collateral.id" building_type="collateral"></PropertyThumbnail>
            <div style="margin-bottom: 8px;">
              <PropertyZillow :building_id=" row.loan_collateral.id" building_type="collateral"></PropertyZillow>
            </div>
            <div style="margin-bottom: 8px;">
              <PropertyRedfine :building_id="row.loan_collateral.id" building_type="collateral"></PropertyRedfine>
            </div>
          </div>
          <div class="col-md-8">
            <div>
              <ExtendedDetails :building_id="row.loan_collateral.id" building_type="collateral"></ExtendedDetails>
            </div>
            <br>
            <div
              v-if="row.loan_collateral.type == 'SFR' || row.loan_collateral.type == 'Manufactured' || row.loan_collateral.type == 'Mobile' || row.loan_collateral.type == 'Townhomes' || row.loan_collateral.type == 'Condo - attached' || row.loan_collateral.type == 'Condo - detached'"
            >
              <PropertyDetail :building_id="row.loan_collateral.id" building_type="collateral"></PropertyDetail>
            </div>
            <div v-if="row.loan_collateral.type == 'Land'">
              <LandDetail :building_id="row.loan_collateral.id" building_type="collateral"></LandDetail>
            </div>
            <div v-if="row.loan_collateral.type == 'Multi-Unit'">
              <MultiunitDetail :building_id="row.loan_collateral.id" building_type="collateral"></MultiunitDetail>
            </div>
            <div
              v-if="row.loan_collateral.type == 'office' || row.loan_collateral.type == 'industrial' || row.loan_collateral.type=='retail'"
            >
              <CommercialDetail :building_id="row.loan_collateral.id" building_type="collateral"></CommercialDetail>
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