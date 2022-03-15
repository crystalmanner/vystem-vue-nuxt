<template>
  <div>
    <VerstoneGrid :data="brokers">
      <e-columns>
        <e-column field="name" headerText="Name" textAlign="Left"></e-column>
        <e-column field="status" headerText="Status" textAlign="Left"></e-column>
        <e-column field="sales" headerText="Sales Name" textAlign="Left"></e-column>
      </e-columns>
    </VerstoneGrid>
  </div>
</template>

<script>
import Vue from "vue";
import { CommandColumn, parentsUntil } from "@syncfusion/ej2-vue-grids";
import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";
import VerstoneGrid from "@/components/ldb/Layout/SyncfusionGrid.vue";
Vue.use(ButtonPlugin);
export default {
  props: ["brokers"],
  components: { VerstoneGrid },
  data() {}
};
</script>

<style lang="scss" scoped>
</style>