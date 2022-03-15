<template>
  <div class="container-fluid property_summary_container">
    <b-form @submit.prevent="onSubmit">
      <b-card>
        <b-row>
          <b-col cols="3">
            <fg-input label="Projected Funding Date" v-model="form.projected_funding_date" type="date" required="true"/>        
          </b-col>
          <b-col cols="3">
            <fg-input label="Apn" v-model="form.apn" type="text"/>        
          </b-col>
          <b-col cols="3">
            <fg-input label="Mls(Current/last listed)" v-model="form.mls" type="text"/>        
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="3">
            <fg-input label="Property address" type="text" v-model="form.property_address" required="true"/>        
          </b-col>
          <b-col cols="3">
            <fg-input label="City" type="text" v-model="form.city" required="true"/>        
          </b-col>
          <b-col cols="2">
            <fg-input label="State" required="true">
              <b-form-select v-model="form.state" :options="state"></b-form-select>
            </fg-input>           
          </b-col>
          <b-col cols="2">
            <fg-input label="Zip code" type="number" v-model="form.zipcode" required="true"/>        
          </b-col>
          <b-col cols="2">
            <fg-input label="country" type="text" v-model="form.country" required="true"/>        
          </b-col>
        </b-row>
      </b-card>
      <b-card>
        <b-row>
          <b-col cols="3">  
            <fg-input label="Loan Type" required="true">
              <b-form-select v-model="form.loan_type" :options="loan_type"></b-form-select>
            </fg-input>    
          </b-col>
          <b-col cols="3">        
            <fg-input label="Loan Program" required="true">
              <b-form-select v-model="form.loan_program" :options="loan_program"></b-form-select>
            </fg-input>         
          </b-col>
          <b-col cols="3">
            <fg-input label="Purchase Price" v-money="money" v-model="form.money" type="text" required="true"/>        
          </b-col>
        </b-row>
      </b-card>
      <b-card>
        <b-row>
          <b-col cols="2">  
            <fg-input label="Completed Investment Re Projects" required="true">
              <b-form-select v-model="form.projects" :options="projects"></b-form-select>
            </fg-input>     
          </b-col>
          <b-col cols="4">          
            <label for="borrower_experience">Borrower Experience</label>
            <b-form-textarea id="borrower_experience" v-model="form.borrower_experience" rows="2" max-rows="10"></b-form-textarea>
          </b-col>
          <b-col cols="2">
            <fg-input label="Exit Strategy" required="true">
              <b-form-select v-model="form.exit_strategy" :options="exit_strategy"></b-form-select>
            </fg-input>     
          </b-col>
          <b-col cols="4">
            <label for="please_describe">Please Describe<span class="property_summary_required_symbol">*</span></label>
            <b-form-textarea id="please_describe" v-model="form.please_describe" required rows="2" max-rows="10"></b-form-textarea>               
          </b-col>                    
        </b-row>      
      </b-card> 
      <b-card>
        <b-row>
          <b-col cols="3">
            <label>Rehab of existing structure(s)?</label><br>
            <toggle-button color="#87CB16" :value="true" :labels="{checked: 'on', unchecked: 'off'}"/>
          </b-col>
          <b-col cols="3">
            <label>New Construction/Adding Structure(s)?</label><br>
            <toggle-button color="#87CB16" :value="true" :labels="{checked: 'on', unchecked: 'off'}"/>
          </b-col>
          <b-col cols="3">
            <label>Additional Collateral</label><br>  
            <toggle-button color="#87CB16" :value="true" :labels="{checked: 'on', unchecked: 'off'}"/>
          </b-col>          
        </b-row>   
      </b-card>   
      <buttton class="property_summary_btn btn btn-fill btn-success" @click="submitSave"><i class="fa fa-check"></i>Save</buttton>
    </b-form>
  </div>  
</template>
<script>
export default {
  data(){
    return{
      form:{
        projected_funding_date: "",
        apn: "",
        mls: "",  
        property_address: "",
        city: "",
        state: "WA",
        zipcode: "",
        country: "",
        loan_type: "Purchase",
        loan_program: "Bridge",
        money: "",
        projects: "3-5",
        exit_strategy: "Sell"
      },
      money: {
				decimal: ".",
				thousands: ",",
				prefix: "$ ",
				precision: 2,
				masked: true /* doesn't work with directive */
      },
      state: [
        { value: "WA", text: "WA" }
      ],
      loan_type:[
        { value: "Purchase", text: "Purchase" }
      ],
      loan_program:[
        { value: "Bridge", text: "Bridge" }
      ],
      projects: [
        { value: "3-5", text: "3-5" }
      ],
      exit_strategy:[
        { value: "Sell", text: "Sell" }
      ]      
    }
  },
  methods:{
    submitSave: function(){

    }
  }
}
</script>