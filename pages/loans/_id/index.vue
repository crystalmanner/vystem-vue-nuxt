<template>
  <div>
    <b-card title="Loan">
      <b-card-text>
        <b-row>
          <b-col cols="8">
            <b-card title="Loan Info">
              <b-card-text>
                <b-row>
                  <b-col>
                    <b-card title="Prequal Status">
                      <b-card-text></b-card-text>
                      <PrequalStatus :loan="loan"></PrequalStatus>
                    </b-card>
                  </b-col>
                  <b-col>
                    <b-card title="Items Needed">
                      <b-card-text>
                        <ItemNeeded :loan="loan"></ItemNeeded>
                      </b-card-text>
                    </b-card>
                  </b-col>
                </b-row>
                <b-row>
                  <b-col>
                    <b-card title="Broker">
                      <b-card-text></b-card-text>
                    </b-card>
                  </b-col>
                  <b-col>
                    <b-card title="Missing Photos">
                      <b-card-text>
                        <MissingPhoto :loan="loan"></MissingPhoto>
                      </b-card-text>
                    </b-card>
                  </b-col>
                </b-row>
              </b-card-text>
            </b-card>
          </b-col>
          <b-col cols="4">
            <b-card title>
              <b-card-text>
                <LoanCard :loan="loan"></LoanCard>
              </b-card-text>
            </b-card>
            <b-card title="Actions">
              <b-card-text>
                <b-button variant="success" block @click="bpo()">BPO</b-button>
                <b-button variant="success" block @click="termSheet()">Termsheet</b-button>
                <b-button
                  variant="success"
                  block
                  :to="`/loans/${loan.loan_detail.id}/underwriting_approval`"
                >Underwriting Approval</b-button>
              </b-card-text>
            </b-card>
            <b-card title="Modify/Clone">
              <b-card-text>
                <b-button variant="danger" block @click="pushbackLoan()">Push Back to Sales</b-button>
                <b-button
                  variant="danger"
                  block
                  :to="`/loans/${loan.loan_detail.id}/modify_loan`"
                >Modify Loan</b-button>
                <b-button variant="danger" block @click="cloneLoan()">Cloan Loan</b-button>
                <b-button variant="danger" block @click="internalRefi()">Internal Refi</b-button>
                <b-button
                  variant="danger"
                  block
                  :to="`/loans/${loan.loan_detail.id}/cancel_loan`"
                >Cancel Loan</b-button>
              </b-card-text>
            </b-card>
            <b-card title="Status">
              <LoanStatus :loan_status="loan_status" :loan="loan"></LoanStatus>
            </b-card>
            <b-card title="Borrowers">
              <b-card-text class="borrower_card_wrapper">
                <b-card sub-title="Primary" class="mt-2" v-if="loan.borrower.primary">
                  <Primary :primary="loan.borrower.primary"></Primary>
                </b-card>
                <b-card sub-title="Spouse" v-if="loan.borrower.spouse">
                  <Spouse :spouse="loan.borrower.spouse"></Spouse>
                </b-card>
                <b-card sub-title="Co-borrower" v-if="loan.borrower.co_borrower">
                  <Co-Borrower :co_borrower="loan.borrower.co_borrower"></Co-Borrower>
                </b-card>
                <b-card sub-title="Entity(s)" v-if="loan.borrower.entity">
                  <Entity :entity="loan.borrower.entity"></Entity>
                </b-card>
              </b-card-text>
            </b-card>

            <LoanWarnings :loan="loan"/>
            <LoanSecondaryWarnings :loan="loan"/>
          </b-col>
        </b-row>
      </b-card-text>
    </b-card>
  </div>
</template>

<script>
import MissingPhoto from "@/components/Loan/Base/MissingPhoto.vue";
import LoanWarnings from "@/components/Loan/Base/LoanWarnings";
import LoanSecondaryWarnings from "@/components/Loan/Base/LoanSecondaryWarnings";
import Primary from "@/components/Loan/Borrower/Primary";
import Spouse from "@/components/Loan/Borrower/Spouse";
import CoBorrower from "@/components/Loan/Borrower/Co-Borrower";
import Entity from "@/components/Loan/Borrower/Entity";
import LoanStatus from "@/components/Loan/LoanStatus.vue";
import LoanCard from "@/components/Loan/Base/LoanCard.vue";
import ItemNeeded from "@/components/Loan/Base/ItemNeeded.vue";
import PrequalStatus from "@/components/Loan/Base/PrequalStatus.vue";
import { mapGetters } from "vuex";
export default {
  props: ["loan"],
  components: {
    MissingPhoto,
    LoanWarnings,
    LoanSecondaryWarnings,
    Primary,
    Spouse,
    CoBorrower,
    Entity,
    LoanStatus,
    LoanCard,
    ItemNeeded,
    PrequalStatus
  },
  async fetch({ store, params }) {
    await store.dispatch("loans/GET_LOAN_STATUS", params.id);
  },
  computed: mapGetters({
    loan_status: "loans/loan_status"
  }),
  methods: {
    notifyVue(type, message) {
      this.$notify({
        title: message,
        type: type
      });
    },
    internalRefi() {
      this.$axios
        .get("/v1/loans/internal-refi/clone/" + this.loan.loan_detail.id)
        .then(response => {
          this.$router.push(`/loans/${this.loan.loan_detail.id}`);
          this.notifyVue("success", response.data[0].message);
        })
        .catch(e => {
          this.formErrors.push(e);
        });
    },
    cloneLoan() {
      this.$axios
        .get("/v1/loans/clone/" + this.loan.loan_detail.id)
        .then(response => {
          this.notifyVue("success", response.data[0].message);
        })
        .catch(e => {
          this.formErrors.push(e);
        });
    },
    pushbackLoan() {
      this.$axios
        .get("/v1/loans/pull_back/" + this.loan.loan_detail.id)
        .then(response => {
          this.notifyVue("success", response.data[0].message);
        })
        .catch(e => {
          this.formErrors.push(e);
        });
    },
    termSheet() {
      this.$axios
        .get("/v1/loans/termsheet/" + this.loan.loan_detail.id)
        .then(response => {
          window.open(`${response.data[0].data}`, "_blank");
        })
        .catch(e => {
          this.formErrors.push(e);
        });
    },
    bpo() {
      this.$axios
        .get("/v1/loans/bpo/" + this.loan.loan_detail.id)
        .then(response => {
          window.open(`${response.data[0].data}`, "_blank");
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