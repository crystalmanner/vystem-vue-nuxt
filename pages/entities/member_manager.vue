<template>
	<div>
    <EntitiesNav></EntitiesNav>    
    <MemberManagerTable :member_manager = "member_manager"></MemberManagerTable>
	</div>
</template>

<script>
import EntitiesNav from "@/components/Entities/EntitiesNav"
import DocsTable from "@/components/Entities/DocsTable"
import MemberManagerTable from "@/components/Entities/MemberManagerTable"
import { mapGetters } from "vuex";
export default {
  components:{
    EntitiesNav,
    DocsTable,
    MemberManagerTable
  },
  async fetch({ store, params }) {   
    await store.dispatch("entity/GET_ENTITIES");
  },
  computed: mapGetters({
    member_manager: "entity/entities"
  })
};
</script>

<style lang="scss" scoped>
</style>