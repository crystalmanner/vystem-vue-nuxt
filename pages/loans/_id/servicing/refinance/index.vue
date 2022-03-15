<template>
  <div>
    <RefinanceNav></RefinanceNav>
    <div class="input-group">
      <vue-bootstrap-typeahead
        v-model="res"
        :data="loans"
        :serializer="item => item.loan_number"
        placeholder="Enter a Loan Number"
        @hit="selectedLoan($event)"
      ></vue-bootstrap-typeahead>
    </div>
  </div>
</template>

<script>
import RefinanceNav from "@/components/Loan/Servicing/RefinanceNav";
import VueBootstrapTypeahead from "vue-bootstrap-typeahead";
export default {
  components: { RefinanceNav, VueBootstrapTypeahead },
  data() {
    return {
      loans: []
    };
  },
  created() {
    this.$axios
      .get("/v1/portfolio/loan/detail/")
      .then(response => {
        this.loans = response.data[0]["data"].row;
      })
      .catch(error => {
        console.log(error);
      });
  },
  methods: {
    selectedLoan(event) {
      this.$router.push("/loans/" + event.loan_id);
    }
  }
};
</script>

<style lang="scss" scoped>
.capitalize {
  text-transform: capitalize;
}
</style>