<template>
	<b-card-text>
		<table class="table table-stripe loan_status_table">
			<tr>
				<th>Loan Status:</th>
				<td>{{loan_status.loan_status}}</td>
			</tr>
			<tr v-if="loan_status.status == 'Cancelled'">
				<th>Cancelled On:</th>
				<td>{{loan_status.cancel}}</td>
			</tr>
			<tr v-if="loan_status.status == 'Funded'">
				<th>Funded On:</th>
				<td>{{loan_status.funded}}</td>
			</tr>
			<tr v-if="loan_status.status == 'Paid Off'">
				<th>Paid Off On:</th>
				<td>{{loan_status.paid_off}}</td>
			</tr>
			<tr>
				<th>Processor:</th>
				<td>{{loan_status.processer}}</td>
			</tr>
			<tr>
				<th>Estimated Funding Date:</th>
				<td>{{loan_status.est_funding_date}}</td>
			</tr>
			<tr>
				<th>Loan Status:</th>
				<td>{{loan_status.funding_memo_date}}</td>
			</tr>
			<tr>
				<th>Document Draft Date:</th>
				<td>{{loan_status.doc_draft_date}}</td>
			</tr>
			<tr>
				<th>PSA Date:</th>
				<td>{{loan_status.psa_date}}</td>
			</tr>
			<tr>
				<th>Loan Status:</th>
				<td>{{loan_status.maturity_date}}</td>
			</tr>
		</table>
	</b-card-text>
</template>

<script>
export default {
	props: ["loan_status"]
};
</script>

<style lang="scss" scoped>
</style>