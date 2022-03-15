<template>
  <div>
    <b-card :title="`Documents (${documentslength})`">
      <b-card-text>
        <VerstoneGrid :data = "this.documents"> 
          <e-columns>
            <e-column field="id" headerText="ID" textAlign="Left"></e-column>                        
            <e-column field="filename" headerText="File Name" textAlign="Left"></e-column>
            <e-column field="type" headerText="Type" textAlign="Left"></e-column>            
            <e-column field="comments" headerText="Comments" textAlign="Left"></e-column>            
            <e-column headerText="Action" :commands='commands' textAlign="Left"></e-column>
          </e-columns>     
        </VerstoneGrid>        
      </b-card-text>
    </b-card>
  </div>
</template>

<script>
import Vue from "vue";
import {
  CommandColumn,
  parentsUntil
} from "@syncfusion/ej2-vue-grids";
import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";
import VerstoneGrid from "@/components/ldb/Layout/SyncfusionGrid.vue"

Vue.use(ButtonPlugin);

export default {
  props: ["borrower"],
  components: { VerstoneGrid },
  data() {
    return {
      commands: [{ buttonOption: { cssClass:'e-link btn-success', content: 'View Detail', click: this.onClick } }],        
      documents: "",
      documentslength:""
    };
  },
  methods: {
    onClick: function(args) {        
      var rowEle = parentsUntil(event.target, 'e-row');
      var rowIndex = parseInt(rowEle.getAttribute('aria-rowindex'));        
      var selectedData = this.documents[rowIndex];                 
      window.open(selectedData.url, '_blank');       
    }
  },
  created() {
    this.$axios
      .get("/v1/borrowers/documents/" + this.borrower.detail.id)
      .then(response => {
        this.documents = response.data[0]["data"];
        this.documentslength = response.data[0].data.length;
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>

<style lang="scss" scoped>
</style>