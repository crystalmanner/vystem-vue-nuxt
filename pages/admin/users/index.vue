<template>
  <b-card title="Users">
    <b-card-text>
      <b-button variant="secondary" size="md" v-b-modal.add-user>Create User</b-button>
      <UserForm @createForm="createForm"></UserForm>
      <strong>
        <Users :users="users"></Users>
      </strong>
    </b-card-text>
  </b-card>
</template>

<script>
import Users from "@/components/admin/Users";
import UserForm from "@/components/admin/AddUserForm";
import { mapGetters } from "vuex";
export default {
  components: {
    Users,
    UserForm
  },
  async fetch({ store, params }) {
    await store.dispatch("admin/GET_USERS");
  },
  computed: mapGetters({
    users: "admin/users"
  }),
  methods: {
    createForm: async function(e) {
      await this.$store.dispatch("admin/ADD_USER", {
        form: e
      });
      await this.$store.dispatch("admin/GET_USERS");
    }
  }
};
</script>
<style lang="scss" scoped>
</style>