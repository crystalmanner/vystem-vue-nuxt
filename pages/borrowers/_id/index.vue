<template>
  <div>
    <b-row>
      <b-col>
        <b-card title>
          <b-card-text>
            <b-row>
              <b-col>
                <div>
                  <span
                    class="pt-0 mt-0 mb-0 font-weight-bold lead"
                  >{{borrower.detail.first_name}} {{borrower.detail.last_name}}</span>
                </div>
                <div>Email: {{borrower.detail.email}}</div>
                <div>Phone: {{borrower.detail.phone}}</div>
                <div>Physical Address: {{borrower.detail.address_1}} {{borrower.detail.address_2}} {{borrower.detail.city}}, {{borrower.detail.state}} {{borrower.detail.zip_code}}</div>
                <div>Mailing Address: {{borrower.detail.mailing_address_1}} {{borrower.detail.mailing_address_2}} {{borrower.detail.mailing_city}}, {{borrower.detail.mailing_state}} {{borrower.detail.mailing_zip_code}}</div>
                <div>
                  <SalesName :borrower="borrower"/>
                </div>
              </b-col>
            </b-row>
          </b-card-text>
        </b-card>
      </b-col>
      <b-col cols="3">
        <CreditScore :borrower="borrower"/>
      </b-col>
    </b-row>
    <b-card-text>
      <b-button
        variant="succes"
        size="md"
        :to="`/borrowers/${$route.params.id}/credit_pull`"
      >Request Credit Pull</b-button>
    </b-card-text>
    <BorrowerLoanTable :borrower="borrower"/>
  </div>
</template>

<script>
import CreditScore from "@/components/Borrowers/Base/CreditScore";
import BorrowerLoanTable from "@/components/Borrowers/Base/BorrowerLoanTable";
export default {
  props: ["borrower"],
  components: {
    CreditScore,
    BorrowerLoanTable
  }
};
</script>

<style lang="scss" scoped>
</style>