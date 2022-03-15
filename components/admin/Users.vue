<template>
  <div>
    <VerstoneGrid :data="users">
      <e-columns>
        <e-column field="name" headerText="Name" textAlign="Left"></e-column>
        <e-column field="email" headerText="Email" textAlign="Left"></e-column>
        <e-column field="role_name" headerText="Role Name" textAlign="Left"></e-column>
        <e-column field="sales_manager" headerText="Sales Manager" textAlign="Left"></e-column>
        <e-column field="auction_assignable" headerText="Auction Assignable" textAlign="Left"></e-column>
        <e-column headerText="Action" :commands="commands" textAlign="Center" width="150"></e-column>
      </e-columns>
    </VerstoneGrid>
    <EditUserForm :showModal="show" @editForm="editForm" :user="get_user"></EditUserForm>
  </div>
</template>

<script>
import Vue from "vue";
import { CommandColumn, parentsUntil } from "@syncfusion/ej2-vue-grids";
import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";
import VerstoneGrid from "@/components/ldb/Layout/SyncfusionGrid.vue";
import EditUserForm from "@/components/admin/EditUserForm.vue";
Vue.use(ButtonPlugin);
export default {
  props: ["users"],
  components: { VerstoneGrid, EditUserForm },
  data() {
    return {
      commands: [
        {
          buttonOption: {
            cssClass: "e-link btn-success",
            content: "Edit",
            click: this.onClick
          }
        },
        {
          buttonOption: {
            cssClass: "e-link btn-danger",
            content: "Delete",
            click: this.delete
          }
        }
      ],
      show: false,
      get_user: ""
    };
  },
  created() {
    this.data = false;
  },
  methods: {
    onClick: function(args) {
      var rowEle = parentsUntil(event.target, "e-row");
      var rowIndex = parseInt(rowEle.getAttribute("aria-rowindex"));
      var selectedData = this.users[rowIndex];
      this.get_user = selectedData;
      this.show = !this.show;
    },
    editForm: async function(e) {
      await this.$store.dispatch("admin/EDIT_USER", e);
      await this.$store.dispatch("admin/GET_USERS");
    },
    delete: function(args) {
      var rowEle = parentsUntil(event.target, "e-row");
      var rowIndex = parseInt(rowEle.getAttribute("aria-rowindex"));
      var selectedData = this.users[rowIndex];
      this.$axios
        .delete(`/v1/admin/delete/${selectedData.id}`)
        .then(response => {
          this.$axios.get(`/v1/admin/users/?`).then(response => {
            this.users = response.data[0].data;
          });
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>