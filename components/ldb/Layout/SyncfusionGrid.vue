<template>
  <ejs-grid
    :dataSource="data"
    :allowPaging="true"
    :allowSorting="true"
    :allowFiltering="true"
    :pageSettings='pageSettings'
    :toolbar="toolbar"
    :allowExcelExport='true'
    :allowPdfExport='true'
    :toolbarClick='toolbarClick'
    :contextMenuItems="contextMenuItems"    
    :allowGrouping='true'
    :rowDataBound='rowData'
    :load="loadData"
    :rowSelected='rowSelectedData'    
  > 
    <slot></slot>
  </ejs-grid>
</template>
<script>
import "@syncfusion/ej2-base/styles/material.css"
import "@syncfusion/ej2-inputs/styles/material.css"
import "@syncfusion/ej2-buttons/styles/material.css"
import "@syncfusion/ej2-calendars/styles/material.css"
import "@syncfusion/ej2-dropdowns/styles/material.css"
import "@syncfusion/ej2-navigations/styles/material.css"
import "@syncfusion/ej2-popups/styles/material.css"
import "@syncfusion/ej2-splitbuttons/styles/material.css"
import "@syncfusion/ej2-vue-grids/styles/material.css"

import Vue from "vue";
import {
  GridPlugin,
  Page,
  Sort,
  Filter,
  ExcelExport, 
  PdfExport,
  CommandColumn,
  parentsUntil,
  Toolbar,
  ContextMenu
} from "@syncfusion/ej2-vue-grids";

Vue.use(GridPlugin);

export default {
  props:[
    'data',
    'rowData',
    'loadData',
    'rowSelectedData'    
  ],
  data() {
    return {     
      toolbar: ["Search", "ExcelExport", "PdfExport"],
      pageSettings: { pageSizes: [5,10,20,30,50], pageCount:4, pageSize: 20 },
      contextMenuItems: ['AutoFit', 'AutoFitAll', 'SortAscending', 'SortDescending',
                'Copy', 'Edit', 'Delete', 'Save', 'Cancel',
                'PdfExport', 'ExcelExport', 'CsvExport', 'FirstPage', 'PrevPage',
                'LastPage', 'NextPage', 'Group', 'Ungroup'],
    };
  },
  provide: {
    grid: [Page, ContextMenu, Toolbar, Sort, CommandColumn, ExcelExport, PdfExport]
  },
  methods:{
    toolbarClick: function(args) {      
      if (args.item.id === 'Grid_excelexport') { // 'Grid_excelexport' -> Grid component id + _ + toolbar item name
          this.$refs.grid.excelExport();
      }
      if (args.item.id === 'Grid_pdfexport') { // 'Grid_pdfexport' -> Grid component id + _ + toolbar item name
            this.$refs.grid.pdfExport();
        }
    }
  }
}
</script>
<style>
  
</style>