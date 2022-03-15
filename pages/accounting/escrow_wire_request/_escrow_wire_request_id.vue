<template>
  <b-card>
    <AccountingTabs></AccountingTabs>
    <b-card title="Uploaded Documents">
      <UploadedDcouments :uploaded_documents="uploaded_documents"></UploadedDcouments>
    </b-card>
    <hr>
    <b-card title="Insurance Documents">
      <InsuranceDcouments :insurance_documents="insurance_documents"></InsuranceDcouments>
    </b-card>
    <hr>
    <b-card title="Outgoing Wire">
      <table class="table table-striped">
        <tr>
          <td nowrap width="50%">
            <strong>Max Loan Amount:</strong>
          </td>
          <td width="50%">
            <strong>{{outgoing_wire.loan_number}}</strong>
          </td>
        </tr>
        <tr v-if="outgoing_wire.vmax_fund !=  null">
          <td>Potential vMax Funds:</td>
          <td>{{outgoing_wire.vmax_fund}}</td>
        </tr>
        <tr v-if="outgoing_wire.v100 !=  null">
          <td>Potential v100 Funds:</td>
          <td>{{outgoing_wire.v100}}</td>
        </tr>
        <tr v-if="outgoing_wire.holdback != 0">
          <td nowrap>Holdback:</td>
          <td>{{outgoing_wire.holdback}}</td>
        </tr>
        <tr v-if="outgoing_wire.holdback != 0">
          <td nowrap>Holdback Disbursement:</td>
          <td>{{outgoing_wire.holdback_disbursement}}</td>
        </tr>
        <tr>
          <td>Funded Loan Amount (Day 1):</td>
          <td>{{outgoing_wire.loan_amount}}</td>
        </tr>
        <tr v-if="outgoing_wire.mod_loan_number">
          <td nowrap>Funding Memo Note:</td>
          <td>{{outgoing_wire.mod_loan_number}}</td>
        </tr>
        <tr v-if="outgoing_wire.payoff_amount > 0">
          <td nowrap>Internal Refinance:</td>
          <td>{{outgoing_wire.payoff_amount}}</td>
        </tr>
        <tr>
          <td nowrap>Origination Fee:</td>
          <td>{{outgoing_wire.origination_fee}}</td>
        </tr>
        <tr>
          <td nowrap>Processing Fee:</td>
          <td>{{outgoing_wire.processing_fee}}</td>
        </tr>
        <tr>
          <td nowrap>Interest (prepaid) to be collected at close:</td>
          <td>{{outgoing_wire.per_diem_total}}</td>
        </tr>
        <tr>
          <td>Lender Credit (balancing)</td>
          <td>{{outgoing_wire.lender_credit}}</td>
        </tr>
        <tr>
          <td nowrap>Interest Reserve Amount:</td>
          <td>{{outgoing_wire.interest_reserve}}</td>
        </tr>
        <tr>
          <td>Doc Prep Fee</td>
          <td>{{outgoing_wire.doc_prep_fee}}</td>
        </tr>
        <tr>
          <td>Redraw Fee</td>
          <td>{{outgoing_wire.redraw_fee}}</td>
        </tr>
        <tr>
          <td>
            <strong>Outgoing Wire:</strong>
          </td>
          <td>
            <strong>{{outgoing_wire.outgoing_wire}}</strong>
          </td>
        </tr>
      </table>
    </b-card>
  </b-card>
</template>
<script>
import AccountingTabs from "@/components/Accounting/AccountingTabs";
import UploadedDcouments from "@/components/Accounting/UploadedDcouments";
import InsuranceDcouments from "@/components/Accounting/InsuranceDcouments";
import { mapGetters } from "vuex";
export default {
  components: {
    AccountingTabs,
    UploadedDcouments,
    InsuranceDcouments
  },
  async fetch({ store, params }) {
    await store.dispatch(
      "accounting/GET_UPLOADED_DOCUMENTS",
      params.escrow_wire_request_id
    );
    await store.dispatch(
      "accounting/GET_INSURANCE_DOCUMENTS",
      params.escrow_wire_request_id
    );
    await store.dispatch(
      "accounting/GET_OUTGOING_WIRE",
      params.escrow_wire_request_id
    );
  },
  computed: mapGetters({
    uploaded_documents: "accounting/uploaded_documents",
    insurance_documents: "accounting/insurance_documents",
    outgoing_wire: "accounting/outgoing_wire"
  })
};
</script>