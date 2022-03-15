<template>
	<div>
		<b-card title="Loan Details">
			<b-card-text>
				<table class="table striped">
					<tr>
						<td>Outgoing Wire</td>
						<td>{{loan.loan_detail.wire_to_escrow | currency}}</td>
					</tr>
					<tr>
						<td>Max Loan Amount:</td>
						<td>{{loan.loan_detail.loan_amount | currency}}</td>
					</tr>
					<tr>
						<td>Holdback:</td>
						<td>{{loan.loan_detail.holdback_funds | currency}}</td>
					</tr>
					<tr>
						<td>Holdback Disbursement:</td>
						<td>{{loan.loan_detail.holdback_disbursement | currency}}</td>
					</tr>
					<tr>
						<td>Funded Loan Amount (Day 1):</td>
						<td>{{loan.loan_detail.funded_loan_amount | currency}}</td>
					</tr>
					<tr>
						<td>Origination Fee:</td>
						<td>{{loan.loan_detail.origination_fee | currency}}</td>
					</tr>
					<tr>
						<td>Processing Fee:</td>
						<td>{{loan.loan_detail.processing_fee | currency}}</td>
					</tr>
					<tr>
						<td>Per Diem Total</td>
						<td>{{loan.loan_detail.per_diem_total | currency}}</td>
					</tr>
					<tr>
						<td>Funded Date</td>
						<td>{{loan.loan_detail.funded_datetime}}</td>
					</tr>
					<tr>
						<td>Funding Memo Note:</td>
						<td>{{loan.loan_detail.funding_memo_notes | currency}}</td>
					</tr>
				</table>
			</b-card-text>
		</b-card>
	</div>
</template>

<script>
export default {
	props: ["loan"]
};
</script>

<style lang="scss" scoped>
</style>