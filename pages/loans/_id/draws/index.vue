<template>
  <div>
    <div v-if="this.loan.loan_detail.holdback_funds != 0">
      <b-button variant="secondary" size="md" v-b-modal.add-draw>Add Draw</b-button>
      <b-button variant="secondary" size="md" @click="back">Back</b-button>
      <TransactionForm @createItem="createItem" :loan="loan" :draws="draws"></TransactionForm>
    </div>
    <Draws :draws="draws" :loan="loan"></Draws>

    <div id="summary" class="pull-right">
      <table class="table">
        <tr>
          <th>Total Holdback:</th>
          <td>{{ draws.summary.beginning_balance | currency }}</td>
        </tr>
        <tr>
          <th>Total Draws:</th>
          <td>{{ draws.summary.total_withdrawls | currency }}</td>
        </tr>
        <tr>
          <th>Remaining:</th>
          <td>{{ draws.summary.remaining | currency }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import Draws from "@/components/Loan/Servicing/Transactions/Draws.vue";
import TransactionForm from "@/components/Draw/AddDrawForm.vue";
import { mapGetters } from "vuex";
export default {
  props: ["loan"],
  components: {
    Draws,
    TransactionForm
  },
  async fetch({ store, params }) {
    await store.dispatch("transaction/GET_DRAWS", params.id);
  },
  computed: mapGetters({
    draws: "transaction/draws",
    add_draw: "transaction/add_draw"
  }),
  methods: {
    createItem: async function(e) {
      await this.$store.dispatch("draw/POST_DRAW", {
        id: this.$route.params.id,
        form: e
      });
      await this.$store.dispatch(
        "transaction/GET_DRAWS",
        this.$route.params.id
      );
    },
    back() {
      window.history.back();
    }
  }
};
</script>

<style lang="scss" scoped></style>