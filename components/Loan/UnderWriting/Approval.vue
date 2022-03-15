<template>
  <div>
    <b-row>    
      <b-col cols="4">
        <label for="underwriting_processing">Underwriting notes to processing</label>
        <b-form-textarea id="underwriting_processing" rows="2" placeholder="Empty" max-rows="10"></b-form-textarea>
      </b-col>
      <b-col cols="4">
        <label for="underwriting_servicing">Underwriting notes to servicing</label>
        <b-form-textarea id="underwriting_servicing" rows="2" placeholder="Empty" max-rows="10"></b-form-textarea>
      </b-col>
      <b-col cols="4">
        <label for="underwriting_construction">Underwriting notes to construction</label>
        <b-form-textarea id="underwriting_construction" rows="2" placeholder="Empty" max-rows="10"></b-form-textarea>
      </b-col>
      <div class="divider"></div>
    </b-row>
    <b-row class="approval-bottom-wrapper">
      <b-col cols="4">
        <b-button class="btn-success approval_loan">
          <i class="fa fa-check"></i>Approval Loan
        </b-button>
      </b-col>
      <b-col cols="3">
        <label>Exclude Per Diem</label><br>
        <toggle-button color="#87CB16" :value="true" :labels="{checked: 'on', unchecked: 'off'}"/>
      </b-col>
      <b-col cols="5">
        <label>Collateral on seperalte deeds</label><br>
        <toggle-button color="#87CB16" :value="true" :labels="{checked: 'on', unchecked: 'off'}"/>        
      </b-col>
    </b-row>
    <b-row class="approval-bottom-btn-wrapper">
      <b-button class="btn-success send_back_to_sales">
        Send back to Sales
      </b-button>
      <b-button class="btn-success send_back_to_valuation">
        Send back to Valuation
      </b-button>
      <b-button class="btn-success send_back_to_construction">
        Send back to Construction
      </b-button>
    </b-row>
  </div>    
</template>
<script>
export default {
  
}
</script>