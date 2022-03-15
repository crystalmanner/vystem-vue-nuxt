<template>
	<b-card title="Insurance">
		<b-card-text>Hi Insurance List</b-card-text>    
    <b-button variant="success" size="md" v-b-modal.add-insurance>Add Insurance</b-button>    
    <AddInsuranceForm @addinsurance="addinsurance"></AddInsuranceForm>    
	</b-card>
</template>

<script>
import AddInsuranceForm from "@/components/Loan/Insurance/AddInsurance.vue"
export default {
  components:{
    AddInsuranceForm
  },
  methods: {
		addinsurance: async function(e) {
			await this.$store.dispatch("loan_servicing/POST_ADD_MAILING_ADDRESS", {
				id: this.$route.params.id,
				form: e
			});
			this.mailing_address.push(this.add_mailing_address);
		}
	}
};
</script>

<style lang="scss" scoped>
</style>