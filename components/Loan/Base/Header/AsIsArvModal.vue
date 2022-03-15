<template>
  <div>
    <b-modal
      id="as-is-arv"
      :title="`As-is/FV Calculations for ${loan.loan_detail.loan_number}`"
      ref="modal"
      size="xl"
      ok-only
      scrollable
    >
      <b-card title="LOAN INFORMATION">
        <div class="loan-card-top">
          <b-row>
            <b-col cols="2" class="left -border">
              <div class="loan-card-funded-ltv">{{loan.loan_detail.loan_amount | currency}}</div>
              <div class="loan-card-label">LOAN AMOUNT</div>
            </b-col>
            <b-col cols="3" class="left-border">
              <div class="loan-card-funded-ltv">{{loan.property_information.value_number}}</div>
              <div class="loan-card-label">TOTAL AS-IS</div>
            </b-col>
            <b-col cols="2" class="left-border">
              <div class="loan-card-funded-ltv">{{loan.property_information.ltv_number}}</div>
              <div class="loan-card-label">AS-IS LTV</div>
            </b-col>
            <b-col cols="3" class="left-border">
              <div class="loan-card-funded-ltv">{{loan.property_information.arv_amount}}</div>
              <div class="loan-card-label">TOTAL ARV</div>
            </b-col>
            <b-col cols="2" class="left-border">
              <div class="loan-card-funded-ltv">{{loan.property_information.arv_number}}</div>
              <div class="loan-card-label">ARV LTV</div>
            </b-col>
          </b-row>
        </div>
      </b-card>
      <br>
      <b-row>
        <b-col cols="6">
          <b-card
            :title="`AS-IS PROPERTY INFORMATION (${loan.property_information.existing_buildings_count})`"
            v-if="loan.property_information.existing_buildings_count > 0"
          >
            <table class="table table-striped">
              <thead>
                <tr>
                  <th>SUBJECT ADDRESS</th>
                  <th>TYPE</th>
                  <th>SQFT</th>
                  <th>AS-IS</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="building in loan.property_information.existing_building" :key="building">
                  <td>{{building.existing.address}}</td>
                  <td>{{building.existing.type}}</td>
                  <td v-if="building.existing.type === 'Land'">{{building.existing.lot_sq_ft}}</td>
                  <td v-else>{{building.existing.sq_ft}}</td>
                  <td>{{building.existing.as_is_value | currency}}</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td colspan="2"></td>
                  <td>
                    <strong>Total As is:</strong>
                  </td>
                  <td>
                    <strong>{{loan.property_information.existing_buildings_total | currency}}</strong>
                  </td>
                </tr>
                <tr>
                  <td colspan="2"></td>
                  <td>
                    <strong>Total Collateral:</strong>
                  </td>
                  <td>
                    <strong>{{ loan.property_information.collaterals_total | currency }}</strong>
                  </td>
                </tr>
                <tr>
                  <td colspan="2"></td>
                  <td>
                    <strong>Total AS IS:</strong>
                  </td>
                  <td>
                    <strong>{{ loan.property_information.value_number }}</strong>
                  </td>
                </tr>
              </tfoot>
            </table>
          </b-card>
        </b-col>
        <b-col cols="6">
          <b-card
            :title="`ARV PROPERTY INFORMATION (${loan.property_information.buildings_count})`"
            v-if="loan.property_information.buildings_count > 0"
          >
            <table class="table table-striped">
              <thead>
                <tr>
                  <th>SUBJECT ADDRESS</th>
                  <th>TYPE</th>
                  <th>SQFT</th>
                  <th>ARV</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="building in loan.property_information.building" :key="building">
                  <td>{{building.building.address}}</td>
                  <td>{{building.building.type}}</td>
                  <td v-if="building.building.type === 'Land'">{{building.building.lot_sq_ft}}</td>
                  <td v-else>{{building.building.sq_ft}}</td>
                  <td>{{building.building.final_value | currency}}</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td colspan="2"></td>
                  <td>
                    <strong>Total Final Value:</strong>
                  </td>
                  <td>
                    <strong>{{loan.property_information.buildings_total | currency}}</strong>
                  </td>
                </tr>
                <tr>
                  <td colspan="2"></td>
                  <td>
                    <strong>Total Collateral:</strong>
                  </td>
                  <td>
                    <strong>{{ loan.property_information.collaterals_total | currency }}</strong>
                  </td>
                </tr>
                <tr>
                  <td colspan="2"></td>
                  <td>
                    <strong>Total ARV:</strong>
                  </td>
                  <td>
                    <strong>{{ loan.property_information.arv_amount }}</strong>
                  </td>
                </tr>
              </tfoot>
            </table>
          </b-card>
        </b-col>
      </b-row>
      <br>
      <b-row>
        <b-col>
          <b-card
            :title="`COLLATERAL PROPERTY INFORMATION (${loan.property_information.collaterals_count})`"
            v-if="loan.property_information.collaterals_count > 0"
          >
            <table class="table table-striped">
              <thead>
                <tr>
                  <th>COLLATERAL ADDRESS</th>
                  <th>TYPE</th>
                  <th>POSITION</th>
                  <th>ARV</th>
                  <th>DEBT</th>
                  <th>EQUITY</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="collateral in loan.property_information.loan_collateral"
                  :key="collateral"
                >
                  <td>{{collateral.loan_collateral.address}}</td>
                  <td>{{collateral.loan_collateral.type}}</td>
                  <td>{{collateral.loan_collateral.lien_position}}</td>
                  <td>{{collateral.loan_collateral.final_value | currency }}</td>
                  <td>{{collateral.loan_collateral.estimated_total_debt | currency }}</td>
                  <td>{{equity(collateral.loan_collateral.final_value,collateral.loan_collateral.estimated_total_debt) | currency }}</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td colspan="4"></td>
                  <td>
                    <strong>Total Collateral:</strong>
                  </td>
                  <td>
                    <strong>{{ loan.property_information.collaterals_total | currency }}</strong>
                  </td>
                </tr>
              </tfoot>
            </table>
          </b-card>
        </b-col>
      </b-row>
    </b-modal>
  </div>
</template>

<script>
export default {
  props: ["loan"],
  data() {
    return {};
  },
  methods: {
    resetModal() {},
    handleOk(bvModalEvt) {
      bvModalEvt.preventDefault();
    },
    equity: function(final_value, estimated_total_debt) {
      return final_value - estimated_total_debt;
    }
  }
};
</script>

<style lang="scss" scoped>
.loan-card-funded-ltv {
  font-size: 28px;
  font-weight: bold;
  letter-spacing: -1px;
  color: rgb(119, 119, 119);
}
.loan-card-top .loan-card-label {
  font-size: 12px;
  color: #b4b4b4;
  top: -7px;
  position: relative;
}
.left-border {
  border-left: 1px solid #ddd;
}
</style>