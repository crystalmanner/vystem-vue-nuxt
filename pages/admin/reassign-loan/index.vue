<template>
  <div>
    <b-card>
      <b-row>
        <b-col cols="6">
          <fg-input label="Loan Number">
            <b-form-select v-model="loan_id" :options="this.loans"></b-form-select>
          </fg-input>
        </b-col>
        <b-col cols="6">
          <fg-input label="User Name">
            <b-form-select v-model="user_id" :options="this.users"></b-form-select>
          </fg-input>
        </b-col>
      </b-row>
      <div class="row">
        <div class="col-md-12">
          <div class="pull-right">
            <b-button class="btn btn-fill btn-success" @click="filter()">Submit</b-button>
          </div>
        </div>
      </div>
    </b-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loan_id: "",
      user_id: "",
      loans: "",
      users: ""
    };
  },
  created() {
    this.$axios.get(`/v1/loan/detail/`).then(response => {
      this.loans = response.data[0]["data"].row;
    });
    this.$axios.get(`/v1/user/detail/`).then(response => {
      this.users = response.data[0]["data"].row;
    });
  },
  methods: {
    filter() {
      this.$axios
        .get(`/v1/admin/reassign-loan/`, {
          params: {
            loan_id: this.loan_id,
            user_id: this.user_id
          }
        })
        .then(response => {
          this.$router.push("/admin");
        });
    }
  }
};
</script>