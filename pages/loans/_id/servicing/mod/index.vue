<template>
  <div>
    <ServicingLoanNav></ServicingLoanNav>
    <b-row>
      <b-col>
        <b-card title="ORIGINAL LOAN TERMS">
          <b-row>
            <b-col cols="6">
              <table class="table table-striped">
                <tr>
                  <th>Current Max Loan</th>
                  <td>{{mods.rows.mod_original_loan_amount}}</td>
                </tr>
                <tr>
                  <th>Original Holdback</th>
                  <td>{{mods.rows.mod_original_holdback}}</td>
                </tr>
                <tr>
                  <th>Original Interest Reserve</th>
                  <td>{{mods.rows.mod_original_ir}}</td>
                </tr>
                <tr>
                  <th>Original Interest Rate</th>
                  <td>{{mods.rows.mod_previous_interest_rate}}</td>
                </tr>
                <tr>
                  <th>Original Maturity Date</th>
                  <td>{{mods.rows.mod_previous_maturity_date}}</td>
                </tr>
              </table>
            </b-col>
            <b-col cols="6">
              <table class="table table-striped">
                <tr>
                  <th valign="top">Reason for Modification</th>
                  <td valign="top">{{mods.rows.reason_for_modification}}</td>
                </tr>
                <tr>
                  <th valign="top">New Exit Strategy</th>
                  <td valign="top">{{mods.rows.new_exit_strategy}}</td>
                </tr>
                <tr>
                  <th valign="top">Purpose for new funds</th>
                  <td valign="top">{{mods.rows.purpose_for_new_funds}}</td>
                </tr>
              </table>
            </b-col>
          </b-row>
        </b-card>
        <b-card title="For Servicing">
          <b-row>
            <b-col>
              <fg-input
                v-model="mods.rows.mod_previous_loan_amount"
                label="CURRENT MAX NOTE AMOUNT"
                type="text"
              />
            </b-col>
            <b-col>
              <fg-input
                v-model="mods.rows.mod_previous_holdback"
                label="CURRENT HOLDBACK"
                type="text"
              />
            </b-col>
            <b-col>
              <fg-input
                v-model="mods.rows.mod_previous_ir"
                label="CURRENT INTEREST RESERVE"
                type="text"
              />
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <fg-input
                v-model="mods.rows.mod_past_due_interest"
                label="ACCURED INTEREST DUE"
                type="text"
              />
            </b-col>
            <b-col>
              <fg-input v-model="mods.rows.mod_late_fees" label="LATE FEE(S)" type="text"/>
            </b-col>
            <b-col>
              <fg-input v-model="mods.rows.mod_misc_fee" label="MISC FEE(S)/COSTS" type="text"/>
            </b-col>
          </b-row>
          <b-row v-if="mods.summary != ''">
            <b-col>
              <table class="table table-striped" width="100%">
                <tr>
                  <th>File Name</th>
                  <th>Download</th>
                </tr>
                <tr v-for="item in mods.summary" :key="item.index">
                  <td>{{item.new_sow}}</td>
                  <td>
                    <a :href="item.download" class="btn btn-fill btn-sm btn-block" target="_blank">
                      <i class="fa fa-cloud-download"></i> View Doc
                    </a>
                  </td>
                </tr>
              </table>
            </b-col>
          </b-row>
        </b-card>
      </b-col>
      <b-col cols="4">
        <div>
          <!-- Escrow -->
          <div v-if="loan.loan_detail.escrow_or_auction == 1">
            <!-- Purchase -->
            <div v-if="loan.loan_detail.loan_type_id == 0">
              <EscrowTerms :loan="loan"></EscrowTerms>
            </div>
            <!-- Refi -->
            <div v-if="loan.loan_detail.loan_type_id == 1">
              <RefiTerms :loan="loan"></RefiTerms>
            </div>
            <!-- Mod -->
            <div v-if="loan.loan_detail.loan_type_id == 2">
              <ModTerms :loan="loan"></ModTerms>
            </div>
          </div>
          <!-- Auction -->
          <div v-else>
            <AuctionTerms :loan="loan"></AuctionTerms>
          </div>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import ServicingLoanNav from "@/components/Loan/Servicing/ServicingLoanNav.vue";
import AuctionTerms from "@/components/Loan/Terms/Views/AuctionTerms.vue";
import EscrowTerms from "@/components/Loan/Terms/Views/EscrowTerms.vue";
import ModTerms from "@/components/Loan/Terms/Views/ModTerms.vue";
import RefiTerms from "@/components/Loan/Terms/Views/RefiTerms.vue";
import { mapGetters } from "vuex";
export default {
  props: ["loan"],
  components: {
    ServicingLoanNav,
    AuctionTerms,
    EscrowTerms,
    ModTerms,
    RefiTerms
  },
  data() {
    return {
      mod_previous_loan_amount: "",
      mod_previous_holdback: "",
      mod_previous_ir: "",
      mod_past_due_interest: "",
      mod_late_fees: "",
      mod_misc_fee: ""
    };
  },
  async fetch({ store, params }) {
    await store.dispatch("loan_servicing/GET_MODS", params.id);
  },
  computed: mapGetters({
    mods: "loan_servicing/mods"
  }),
  methods: {
    createItem: async function(e) {
      await this.$store.dispatch("loan_servicing/ADD_PAYOFF_STATEMENT", {
        id: this.$route.params.id,
        form: e
      });
      window.open(`${this.payoff_statement}`, "_blank");
    }
  }
};
</script>

<style lang="scss" scoped></style>
