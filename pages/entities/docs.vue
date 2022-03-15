<template>
	<div>
    <EntitiesNav></EntitiesNav>    
      <b-row>
        <b-col cols="8">
          <DocsTable :docs = "docs"></DocsTable>
        </b-col>
        <b-col cols="4">
          <b-card title="Entity Status"></b-card>
          <EntitiesStatusTable :entities = "entities" ></EntitiesStatusTable>
        </b-col>
      </b-row>
    
	</div>
</template>

<script>
import EntitiesNav from "@/components/Entities/EntitiesNav"
import DocsTable from "@/components/Entities/DocsTable"
import EntitiesStatusTable from "@/components/Entities/EntitiesStatusTable"
import { mapGetters } from "vuex";
export default {
  components:{
    EntitiesNav,
    DocsTable,
    EntitiesStatusTable
  },
  async fetch({ store, params }) {   
    await store.dispatch("entity/GET_DOCS");
    await store.dispatch("entity/GET_ENTITIES");
  },
  computed: mapGetters({
    entities: "entity/docs",
    entities: "entity/entities"
  })
};
</script>

<style lang="scss" scoped>
</style>