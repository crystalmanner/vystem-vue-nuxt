<template>
	<div>
		<div>
			<div class="d-flex justify-content-center justify-content-sm-between flex-wrap">
				<el-select
					class="select-default mb-3"
					style="width: 200px"
					v-model="pagination.perPage"
					placeholder="Per page"
				>
					<el-option
						class="select-default"
						v-for="item in pagination.perPageOptions"
						:key="item"
						:label="item"
						:value="item"
					></el-option>
				</el-select>
				<el-input
					type="search"
					class="mb-3"
					style="width: 200px"
					placeholder="Search records"
					v-model="searchQuery"
					aria-controls="datatables"
				/>
			</div>
			<div>
				<el-table stripe style="width: 100%;" :data="queriedData" border>
					<el-table-column
						v-for="column in tableColumns"
						:key="column.label"
						:min-width="column.minWidth"
						:prop="column.prop"
						:label="column.label"
					></el-table-column>
					<el-table-column label="Actions">
						<div class="td-actions" slot-scope="props">
							<button
								v-tooltip.top-center="'Edit Profile'"
								class="btn btn-warning btn-link btn-xs"
								v-b-modal.edit-holding-charge
								v-if="props.row.id != 0"
								@click="editRow(props, props.row)"
							>
								<TransactionForm v-if="showModal==props.row.id" @editItem="editItem" :formItem="props.row"></TransactionForm>
								<i class="fa fa-edit"></i>
							</button>
							<a
								v-tooltip.top-center="'Delete'"
								class="btn btn-danger btn-link btn-xs"
								v-if="props.row.id != 0"
								@click="deleteRow(props.row.id)"
							>
								<i class="fa fa-close"></i>
							</a>
						</div>
					</el-table-column>
				</el-table>
				<b-table-simple striped responsive>
					<b-tr>
						<b-td width="68%"></b-td>
						<b-td width="32%">{{holding_charge.balance_row.fees}}</b-td>
					</b-tr>
					<b-tr>
						<b-td width="68%"></b-td>
						<b-td width="32%">{{holding_charge.balance_row.total}}</b-td>
					</b-tr>
				</b-table-simple>
			</div>
		</div>
		<div
			slot="footer"
			class="col-12 d-flex justify-content-center justify-content-sm-between flex-wrap"
		>
			<div class>
				<p class="card-category">Showing {{from + 1}} to {{to}} of {{total}} entries</p>
			</div>
			<l-pagination
				class="pagination-no-border"
				v-model="pagination.currentPage"
				:per-page="pagination.perPage"
				:total="pagination.total"
			></l-pagination>
		</div>
	</div>
</template>

<script>
import TransactionForm from "@/components/Loan/Servicing/Transactions/EditHoldingChargeForm.vue";
import { Table, TableColumn, Select, Option } from "element-ui";
import { Pagination as LPagination } from "@/components/ldb/index";
import { mapGetters } from "vuex";
import Fuse from "fuse.js";
import $ from "jquery";

export default {
	props: {
		holding_charge: String
	},
	components: {
		LPagination,
		[Select.name]: Select,
		[Option.name]: Option,
		[Table.name]: Table,
		[TableColumn.name]: TableColumn,
		TransactionForm
	},
	data() {
		return {
			pagination: {
				perPage: 5,
				currentPage: 1,
				perPageOptions: [5, 10, 25, 50],
				total: 0
			},
			searchQuery: "",
			showModal: false,
			tableColumns: [
				{
					prop: "transaction_date",
					label: "Transaction Date",
					minWidth: 100
				},
				{
					prop: "name",
					label: "Type",
					minWidth: 100
				},
				{
					prop: "notes",
					label: "Notes",
					minWidth: 100
				},
				{
					prop: "holdback",
					label: "Holdback",
					minWidth: 100
				},
				{
					prop: "amount",
					label: "Holding Charge Amount",
					minWidth: 100
				}
			],
			fuseSearch: null
		};
	},
	computed: {
		pagedData() {
			return this.holding_charge.rows.slice(this.from, this.to);
		},
		queriedData() {
			let result = this.holding_charge.rows;
			if (this.searchQuery !== "") {
				result = this.fuseSearch.search(this.searchQuery);
				this.pagination.total = result.length;
			}
			return result.slice(this.from, this.to);
		},
		to() {
			let highBound = this.from + this.pagination.perPage;
			if (this.total < highBound) {
				highBound = this.total;
			}
			return highBound;
		},
		from() {
			return this.pagination.perPage * (this.pagination.currentPage - 1);
		},
		total() {
			this.pagination.total = this.holding_charge.rows.length;
			return this.holding_charge.rows.length;
		},
		...mapGetters({
			put_holding_charge: "transaction/put_holding_charge",
			delete_holding_charge: "transaction/delete_holding_charge"
		})
	},
	methods: {
		editItem: async function(data) {
			await this.$store.dispatch("transaction/PUT_HOLDING_CHARGE", data);
			var edit_holding_charge = this.put_holding_charge.rows;
			var a_index = "";

			$.each(this.holding_charge.rows, function(index, value) {
				if (value.id === edit_holding_charge.id) {
					a_index = index;
				}
			});

			this.holding_charge.rows[
				a_index
			].amount = this.put_holding_charge.rows.amount;
			this.holding_charge.rows[
				a_index
			].notes = this.put_holding_charge.rows.notes;
			this.holding_charge.rows[
				a_index
			].date = this.put_holding_charge.rows.date;
			this.holding_charge.rows[
				a_index
			].name = this.put_holding_charge.rows.name;
			this.holding_charge.balance_row = this.put_holding_charge.balance_row;
			this.showModal = false;
		},
		editRow: function(e, i) {
			this.showModal = i.id;
		},
		deleteRow: async function(data) {
			await this.$store.dispatch("transaction/DELETE_HOLDING_CHARGE", data);
			let deleteIndex = this.holding_charge.rows.findIndex(
				item => item.id === this.delete_holding_charge.id
			);
			this.holding_charge.rows.splice(deleteIndex, 1);
			this.holding_charge.balance_row = this.delete_holding_charge.balance_row;
		}
	},
	mounted() {
		this.fuseSearch = new Fuse(this.holding_charge.rows, {
			keys: ["type"]
		});
	}
};
</script>

<style lang="scss" scoped>
</style>