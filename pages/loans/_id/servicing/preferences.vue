<template>
  <div>
    <ServicingLoanNav></ServicingLoanNav>
    <b-card>
      <b-row>
        <b-col cols="2">
          <l-checkbox
            label="Payment Receipts"
            v-model="loan_detail.payment_receipts"
            @input="submitForm({payment_receipts: loan_detail.payment_receipts})"
          />
        </b-col>
        <b-col cols="2">
          <l-checkbox
            label="Send Statements"
            v-model="loan_detail.send_statements"
            @input="submitForm({send_statements: loan_detail.send_statements})"
          />
        </b-col>
        <b-col cols="2">
          <l-checkbox
            label="Manually Enter Statements"
            v-model="loan_detail.manually_enter_statements"
            @input="submitForm({manually_enter_statements: loan_detail.manually_enter_statements})"
          />
        </b-col>
        <b-col cols="2">
          <l-checkbox
            label="Don't Send Statements"
            v-model="loan_detail.do_not_send_statements"
            @input="submitForm({do_not_send_statements: loan_detail.do_not_send_statements})"
          />
        </b-col>
        <b-col cols="2">
          <l-checkbox
            label="Don't Send 1098's"
            v-model="loan_detail.do_not_send_1098s"
            @input="submitForm({do_not_send_1098s: loan_detail.do_not_send_1098s})"
          />
        </b-col>
      </b-row>
    </b-card>
    <br>
    <b-card title="Mailing Address">
      <br>
      <b-card-text>
        <b-button variant="secondary" size="md" v-b-modal.add-mailing-address>Add Mailing Address</b-button>
        <MailingAddressForm @mailingAddress="mailingAddress"></MailingAddressForm>
        <strong>
          <MailingAddress :mailing_address="mailing_address"></MailingAddress>
        </strong>
      </b-card-text>
    </b-card>
    <b-card title="Email statements">
      <br>
      <b-card-text>
        <b-button variant="secondary" size="md" v-b-modal.add-email-statement>Add Email statements</b-button>
        <EmailStatementForm @emailStatement="emailStatement"></EmailStatementForm>
        <strong>
          <EmailStatement :email_statement="email_statement"></EmailStatement>
        </strong>
      </b-card-text>
    </b-card>
  </div>
</template>

<script>
import ServicingLoanNav from "@/components/Loan/Servicing/ServicingLoanNav.vue";
import MailingAddress from "@/components/Loan/Servicing/MailingAddress";
import EmailStatement from "@/components/Loan/Servicing/EmailStatement";
import MailingAddressForm from "@/components/Loan/Servicing/AddMailingAddress.vue";
import EmailStatementForm from "@/components/Loan/Servicing/AddEmailStatement.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    MailingAddress,
    EmailStatement,
    ServicingLoanNav,
    MailingAddressForm,
    EmailStatementForm
  },
  props: ["loan"],
  data() {
    return {
      loan_detail: this.loan.loan_detail
    };
  },
  async fetch({ store, params }) {
    await store.dispatch("loan_servicing/GET_MAILING_ADDRESS", params.id);
    await store.dispatch("loan_servicing/GET_EMAIL_STATEMENT", params.id);
  },
  computed: mapGetters({
    mailing_address: "loan_servicing/mailing_address",
    email_statement: "loan_servicing/email_statement",
    add_mailing_address: "loan_servicing/add_mailing_address",
    add_email_statement: "loan_servicing/add_email_statement"
  }),
  methods: {
    mailingAddress: async function(e) {
      await this.$store.dispatch("loan_servicing/POST_ADD_MAILING_ADDRESS", {
        id: this.$route.params.id,
        form: e
      });
      this.mailing_address.push(this.add_mailing_address);
    },
    emailStatement: async function(e) {
      await this.$store.dispatch("loan_servicing/POST_ADD_EMAIL_STATEMENT", {
        id: this.$route.params.id,
        form: e
      });
      this.email_statement.push(this.add_email_statement);
    },

    submitForm: function(data) {
      this.$axios
        .post(`/v1/servicing/payments/reference/${this.$route.params.id}`, {
          data
        })
        .then(response => {
          // this.$router.push(`/loans/${this.$route.params.id}/servicing`);
        })
        .catch(e => {
          this.formErrors.push(e);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>