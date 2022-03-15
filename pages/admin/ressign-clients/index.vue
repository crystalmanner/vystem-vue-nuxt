<template>
  <div>
    <b-card>
      <b-row>
        <b-col cols="6">
          <fg-input label="User Name">
            <b-form-select v-model="user_id" :options="this.users"></b-form-select>
          </fg-input>
        </b-col>
        <b-col cols="6">
          <fg-input label="User Name">
            <b-form-select v-model="update_user_id" :options="this.users"></b-form-select>
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
      user_id: "",
      update_user_id: "",
      users: ""
    };
  },
  created() {
    this.$axios.get(`/v1/user/detail/`).then(response => {
      this.users = response.data[0]["data"].row;
    });
  },
  methods: {
    filter() {
      this.$axios
        .get(`/v1/admin/reassign-client/`, {
          params: {
            user_id: this.user_id,
            update_user_id: this.update_user_id
          }
        })
        .then(response => {
          this.$router.push("/admin");
        });
    }
  }
};
</script>