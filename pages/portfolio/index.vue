<template>
  <div>
    <card title="Veristone Portfolio">
      <h5>Lines</h5>
      <b-row>
        <b-col xl="3" md="6">
          <chart-card :chart-data="pieChart.data" chart-type="Pie">
            <template slot="footer">
              <div class="legend">
                <i class="fa fa-circle text-info"></i> Columbia
                <i class="fa fa-circle text-danger"></i> NW
                <i class="fa fa-circle text-warning"></i> 1st security
              </div>
            </template>
          </chart-card>
        </b-col>
      </b-row>
      <hr>
      <b-card>
        <div class="loan-card-top">
          <b-card-text>
            <b-row>
              <b-col>
                <b-card title="FUND 1 SUMMARY">
                  <b-row>
                    <b-col cols="6" class="left-border">
                      <div class="loan-card-funded-ltv">{{summary.fund_1_total_loans}}</div>
                      <div class="loan-card-label">TOTAL LOANS</div>
                    </b-col>
                    <b-col cols="6" class="left-border">
                      <div class="loan-card-funded-ltv">{{summary.fund_1_total_loans_amount}}</div>
                      <div class="loan-card-label">TOTAL LOAN NOTE AMOUNT</div>
                    </b-col>
                  </b-row>
                </b-card>
              </b-col>
              <b-col>
                <b-card title="FUND 1 UNPLEDGED">
                  <b-row>
                    <b-col cols="3" class="left-border">
                      <div class="loan-card-funded-ltv">{{summary.fund_1_unpledged_total_loans}}</div>
                      <div class="loan-card-label">TOTAL LOANS</div>
                    </b-col>
                    <b-col cols="2" class="left-border">
                      <div class="loan-card-funded-ltv">{{summary.fund_1_pending_pledged}}</div>
                      <div class="loan-card-label">PENDING PLEDGE</div>
                    </b-col>
                    <b-col cols="2" class="left-border">
                      <div class="loan-card-funded-ltv">{{summary.fund_1_unpledged_total_tapes}}</div>
                      <div class="loan-card-label">UNPLEDGED TOTAL TAPES</div>
                    </b-col>
                    <b-col cols="5" class="left-border">
                      <div
                        class="loan-card-funded-ltv"
                      >{{summary.fund_1_unpledged_total_loan_amount}}</div>
                      <div class="loan-card-label">TOTAL LOAN NOTE AMOUNT</div>
                    </b-col>
                  </b-row>
                </b-card>
              </b-col>
            </b-row>
            <b-row>
              <b-col>
                <b-card title="COLUMBIA">
                  <b-row>
                    <b-col cols="3" class="left-border">
                      <div class="loan-card-funded-ltv">{{summary.columbia_pending_loan}}</div>
                      <div class="loan-card-label">PENDING</div>
                    </b-col>
                    <b-col cols="4" class="left-border">
                      <div class="loan-card-funded-ltv">{{summary.columbia_pledged_loan}}</div>
                      <div class="loan-card-label">PLEDGED</div>
                    </b-col>
                    <b-col cols="5" class="left-border">
                      <div class="loan-card-funded-ltv">{{summary.columbia_loans_amount}}</div>
                      <div class="loan-card-label">NOTE AMOUNT</div>
                    </b-col>
                  </b-row>
                </b-card>
              </b-col>
              <b-col>
                <b-card title="NW">
                  <b-row>
                    <b-col cols="3" class="left-border">
                      <div class="loan-card-funded-ltv">{{summary.nw_pending_loan}}</div>
                      <div class="loan-card-label">PENDING</div>
                    </b-col>
                    <b-col cols="4" class="left-border">
                      <div class="loan-card-funded-ltv">{{summary.nw_pledged_loan}}</div>
                      <div class="loan-card-label">PLEDGED</div>
                    </b-col>
                    <b-col cols="5" class="left-border">
                      <div class="loan-card-funded-ltv">{{summary.nw_loans_amount}}</div>
                      <div class="loan-card-label">NOTE AMOUNT</div>
                    </b-col>
                  </b-row>
                </b-card>
              </b-col>
            </b-row>
            <b-row>
              <b-col>
                <b-card title="1ST SECURITY">
                  <b-row>
                    <b-col cols="3" class="left-border">
                      <div class="loan-card-funded-ltv">{{summary.first_security_pending_loan}}</div>
                      <div class="loan-card-label">PENDING</div>
                    </b-col>
                    <b-col cols="4" class="left-border">
                      <div class="loan-card-funded-ltv">{{summary.first_security_pledged_loan}}</div>
                      <div class="loan-card-label">PLEDGED</div>
                    </b-col>
                    <b-col cols="5" class="left-border">
                      <div class="loan-card-funded-ltv">{{summary.first_security_loans_amount}}</div>
                      <div class="loan-card-label">NOTE AMOUNT</div>
                    </b-col>
                  </b-row>
                </b-card>
              </b-col>
              <b-col>
                <b-card title="DV">
                  <b-row>
                    <b-col cols="3" class="left-border">
                      <div class="loan-card-funded-ltv">{{summary.dv_pending_loan}}</div>
                      <div class="loan-card-label">PENDING</div>
                    </b-col>
                    <b-col cols="4" class="left-border">
                      <div class="loan-card-funded-ltv">{{summary.dv_pledged_loan}}</div>
                      <div class="loan-card-label">PLEDGED</div>
                    </b-col>
                    <b-col cols="5" class="left-border">
                      <div class="loan-card-funded-ltv">{{summary.dv_loans_amount}}</div>
                      <div class="loan-card-label">NOTE AMOUNT</div>
                    </b-col>
                  </b-row>
                </b-card>
              </b-col>
            </b-row>
            <b-row>
              <b-col>
                <b-card title="VDV">
                  <b-row>
                    <b-col cols="3" class="left-border">
                      <div class="loan-card-funded-ltv">{{summary.vdv_pending_loan}}</div>
                      <div class="loan-card-label">PENDING</div>
                    </b-col>
                    <b-col cols="4" class="left-border">
                      <div class="loan-card-funded-ltv">{{summary.vdv_pledged_loan}}</div>
                      <div class="loan-card-label">PLEDGED</div>
                    </b-col>
                    <b-col cols="5" class="left-border">
                      <div class="loan-card-funded-ltv">{{summary.vdv_loans_amount}}</div>
                      <div class="loan-card-label">NOTE AMOUNT</div>
                    </b-col>
                  </b-row>
                </b-card>
              </b-col>
              <b-col>
                <b-card title="GEORGE R. OSBORNE">
                  <b-row>
                    <b-col cols="3" class="left-border">
                      <div class="loan-card-funded-ltv">{{summary.george_osborne_pending_loan}}</div>
                      <div class="loan-card-label">PENDING</div>
                    </b-col>
                    <b-col cols="4" class="left-border">
                      <div class="loan-card-funded-ltv">{{summary.george_osborne_pledged_loan}}</div>
                      <div class="loan-card-label">PLEDGED</div>
                    </b-col>
                    <b-col cols="5" class="left-border">
                      <div class="loan-card-funded-ltv">{{summary.george_osborne_loans_amount}}</div>
                      <div class="loan-card-label">NOTE AMOUNT</div>
                    </b-col>
                  </b-row>
                </b-card>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="6">
                <b-card title="DOW">
                  <b-row>
                    <b-col cols="3" class="left-border">
                      <div class="loan-card-funded-ltv">{{summary.dow_pending_loan}}</div>
                      <div class="loan-card-label">PENDING</div>
                    </b-col>
                    <b-col cols="4" class="left-border">
                      <div class="loan-card-funded-ltv">{{summary.dow_pledged_loan}}</div>
                      <div class="loan-card-label">PLEDGED</div>
                    </b-col>
                    <b-col cols="5" class="left-border">
                      <div class="loan-card-funded-ltv">{{summary.dow_loans_amount}}</div>
                      <div class="loan-card-label">NOTE AMOUNT</div>
                    </b-col>
                  </b-row>
                </b-card>
              </b-col>
            </b-row>
          </b-card-text>
        </div>
      </b-card>
      <div class="loan-card-top">
        <b-row>
          <b-col>
            <b-card title="OPM">
              <b-row>
                <b-col cols="6" class="left-border">
                  <div class="loan-card-funded-ltv">{{summary.opm_loans_count}}</div>
                  <div class="loan-card-label">TOTAL LOANS</div>
                </b-col>
                <b-col cols="6" class="left-border">
                  <div class="loan-card-funded-ltv">{{summary.opm_loans_amount}}</div>
                  <div class="loan-card-label">TOTAL LOAN NOTE AMOUNT</div>
                </b-col>
              </b-row>
              <b-row>
                <b-col cols="6" class="left-border">
                  <div class="loan-card-funded-ltv">{{summary.opm_tapes_loans_count}}</div>
                  <div class="loan-card-label">TOTAL ON TAPES</div>
                </b-col>
                <b-col cols="6" class="left-border">
                  <div class="loan-card-funded-ltv">{{summary.opm_tapes_loans_amount}}</div>
                  <div class="loan-card-label">TOTAL TAPE NOTE AMOUNT</div>
                </b-col>
              </b-row>
            </b-card>
          </b-col>
          <b-col>
            <b-card title="SMITH GRAHAM">
              <b-row>
                <b-col cols="6" class="left-border">
                  <div class="loan-card-funded-ltv">{{summary.smith_graham_loans_count}}</div>
                  <div class="loan-card-label">TOTAL LOANS</div>
                </b-col>
                <b-col cols="6" class="left-border">
                  <div class="loan-card-funded-ltv">{{summary.smith_graham_loans_amount}}</div>
                  <div class="loan-card-label">TOTAL LOAN NOTE AMOUNT</div>
                </b-col>
              </b-row>
              <b-row>
                <b-col cols="6" class="left-border">
                  <div class="loan-card-funded-ltv">{{summary.smith_graham_tapes_loans_count}}</div>
                  <div class="loan-card-label">TOTAL ON TAPES</div>
                </b-col>
                <b-col cols="6" class="left-border">
                  <div class="loan-card-funded-ltv">{{summary.smith_graham_tapes_loans_amount}}</div>
                  <div class="loan-card-label">TOTAL TAPE NOTE AMOUNT</div>
                </b-col>
              </b-row>
            </b-card>
          </b-col>
        </b-row>
      </div>
    </card>
  </div>
</template>

<script>
import SummaryCard from "@/components/portfolio/SummaryCard";
import { mapGetters } from "vuex";
export default {
  components: {
    SummaryCard
  },
  async fetch({ store, params }) {
    await store.dispatch("lines/GET_COLUMBIA");
    await store.dispatch("lines/GET_NW");
    await store.dispatch("lines/GET_1ST");
    await store.dispatch("lines/GET_FUND1");
    await store.dispatch("lines/GET_SUMMARY");
  },
  data() {
    return {
      loans: [],
      pieChart: {
        data: {
          labels: [
            this.$store.state.lines.columbia.total_count,
            this.$store.state.lines.nw.total_count,
            this.$store.state.lines.first_security.total_count
          ],
          series: [
            parseFloat(this.$store.state.lines.columbia.total_count),
            parseFloat(this.$store.state.lines.nw.total_count),
            parseFloat(this.$store.state.lines.first_security.total_count)
          ]
        }
      }
    };
  },
  computed: {
    secondary_pending() {
      return this.loans.find(m => m.secondary_status == "Pending");
    },
    ...mapGetters({
      columbia: "lines/columbia",
      nw: "lines/nw",
      first_security: "lines/first_security",
      fund_1: "lines/fund_1",
      summary: "lines/summary"
    })
  }
};
</script>

<style lang="scss" scoped>
.loan-card-funded-ltv {
  font-size: 20px;
  font-weight: bold;
  letter-spacing: -1px;
  color: #b4b4b4;
}
.loan-card-top .loan-card-label {
  font-size: 12px;
  color: #666;
  top: -7px;
  position: relative;
}
.left-border {
  border-left: 1px solid #ddd;
  padding-left: 5px !important;
}
</style>