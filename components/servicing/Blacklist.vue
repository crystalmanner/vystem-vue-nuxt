<template>
  <div>
    <VerstoneGrid :data="blacklist">
      <e-columns>
        <e-column field="id" headerText="ID" textAlign="Left"></e-column>
        <e-column field="first_name" headerText="First Name" textAlign="Left"></e-column>
        <e-column field="middle_name" headerText="Middle Name" textAlign="Left"></e-column>
        <e-column field="last_name" headerText="Last Name" textAlign="Left"></e-column>
        <e-column field="phone" headerText="Phone" textAlign="Left"></e-column>
        <e-column field="email" headerText="Email" textAlign="Left"></e-column>
        <e-column headerText="Action" :commands="commands" textAlign="Left"></e-column>
      </e-columns>
    </VerstoneGrid>
  </div>
</template>

<script>
import Vue from "vue";
import { parentsUntil, CommandColumn } from "@syncfusion/ej2-vue-grids";
import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";
import VerstoneGrid from "@/components/ldb/Layout/SyncfusionGrid.vue";
Vue.use(ButtonPlugin);

export default {
  props: ["blacklist"],
  components: { VerstoneGrid },
  data() {
    return {
      editSettings: {
        allowEditing: true,
        allowAdding: true,
        allowDeleting: true,
        mode: "Normal",
        allowEditOnDblClick: false
      },
      commands: [
        {
          type: "Delete",
          buttonOption: {
            iconCss: "e-icons e-delete",
            cssClass: "e-flat",
            click: this.onClick
          }
        }
      ]
    };
  },
  methods: {
    onClick: function(args) {
      var rowEle = parentsUntil(event.target, "e-row");
      var rowIndex = parseInt(rowEle.getAttribute("aria-rowindex"));
      var selectedData = this.blacklist[rowIndex];
      this.$axios
        .post("/v1/borrowers/blacklist/" + selectedData.id + "/clear")
        .then(response => {
          this.$axios.get("/v1/borrowers/blacklist/?").then(response => {
            this.blacklist = response.data[0]["data"];
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