import Vue from "vue";
import Card from "@/components/ldb/Cards/Card.vue";
import TopNavbar from "@/components/ldb/Layout/TopNavbar.vue";
import ContentFooter from "@/components/ldb/Layout/ContentFooter.vue";
import DashboardContent from "@/components/ldb/Layout/Content.vue";
import MobileMenu from "@/components/ldb/Layout/MobileMenu.vue";
import UserMenu from "@/components/ldb/Layout/UserMenu.vue";
import SideBar from "@/components/ldb/SidebarPlugin";
import NotificationPlugin from "@/components/ldb/NotificationPlugin";
// import SideBar from '@/components/ldb/SidebarPlugin/SideBar.vue'
// import SidebarItem from '@/components/ldb/SidebarPlugin/SidebarItem.vue'
import DropDown from "@/components/ldb/Dropdown.vue";
import ChartCard from "@/components/ldb/Cards/ChartCard.vue";
import StatsCard from "@/components/ldb/Cards/StatsCard.vue";
import Button from "@/components/ldb/Button.vue";
import Pagination from "@/components/ldb/Pagination.vue";
import {
  Input,
  InputNumber,
  Table,
  TableColumn,
  Select,
  Option,
  DatePicker
} from "element-ui";
import VueTabs from "vue-nav-tabs";
import VeeValidate from "vee-validate";
import fgInput from "@/components/ldb/Inputs/formGroupInput.vue";
import l_radio from "@/components/ldb/Inputs/Radio.vue";
import lcheckbox from "@/components/ldb/Inputs/Checkbox.vue";
import {
  directive as vClickOutside
} from "vue-clickaway";
import VTooltip from "v-tooltip";

import lang from "element-ui/lib/locale/lang/en";
import locale from "element-ui/lib/locale";
locale.use(lang);
import LDB from "@/components/ldb/index.js";
import Datepicker from 'vuejs-datepicker';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import money from 'v-money'
import ToggleButton from 'vue-js-toggle-button'
import {
  InPlaceEditorPlugin
} from "@syncfusion/ej2-vue-inplace-editor";
import VueFilterDateFormat from 'vue-filter-date-format';
import vue2Dropzone from "vue2-dropzone";
import 'vue2-dropzone/dist/vue2Dropzone.min.css'


Vue.component("card", Card);
Vue.component("TopNavbar", TopNavbar);
Vue.component("ContentFooter", ContentFooter);
Vue.component("DashboardContent", DashboardContent);
Vue.component("MobileMenu", MobileMenu);
Vue.component("UserMenu", UserMenu);
// Vue.component('SideBar', SideBar)
// Vue.component('SidebarItem', SidebarItem)
Vue.component("DropDown", DropDown);
Vue.component("StatsCard", StatsCard);
Vue.component("ChartCard", ChartCard);
Vue.component(Button.name, Button);
Vue.component("Pagination", Pagination);
Vue.component(Input.name, Input);
Vue.component(
  InputNumber.name,
  InputNumber,
  Select,
  Option,
  Table,
  TableColumn,
  DatePicker
);
Vue.component("datepicker", Datepicker);
Vue.component('loading', Loading);
Vue.component('vueDropzone', vue2Dropzone);
Vue.use(SideBar);
Vue.use(NotificationPlugin);
Vue.use(VueTabs);
Vue.use(VeeValidate);
Vue.component("fg-input", fgInput);
Vue.component("l-checkbox", lcheckbox);
Vue.component("l_radio", l_radio);
Vue.directive("click-outside", vClickOutside);
Vue.use(VTooltip);
Vue.use(LDB);
Vue.use(money, {
  precision: 4
})
Vue.use(ToggleButton)
Vue.use(InPlaceEditorPlugin)
Vue.use(VueFilterDateFormat);