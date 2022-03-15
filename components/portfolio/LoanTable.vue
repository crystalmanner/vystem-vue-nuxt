<template>
  <div class="col-md-12">
    <div>
      <div class="col-12 d-flex justify-content-center justify-content-sm-between flex-wrap">
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
      <div class="col-sm-12">
        <el-table stripe style="width: 100%;" :data="queriedData" border>
          <el-table-column
            v-for="column in tableColumns"
            :key="column.label"
            :min-width="column.minWidth"
            :prop="column.prop"
            :label="column.label"
          ></el-table-column>
          <el-table-column label="Actions">
            <template slot-scope="props">
              <n-link
                :to="'/portfolio/loans/' + props.row.loan_id"
                class="btn-info btn-simple btn-link"
              >View Detail</n-link>
            </template>
          </el-table-column>
        </el-table>
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
import { Table, TableColumn, Select, Option } from 'element-ui'
import { Pagination as LPagination } from '@/components/ldb/index'
import Fuse from 'fuse.js'

export default {
	props: {
		summary: String
	},
	components: {
		LPagination,
		[Select.name]: Select,
		[Option.name]: Option,
		[Table.name]: Table,
		[TableColumn.name]: TableColumn
	},
	data() {
		return {
			pagination: {
				perPage: 5,
				currentPage: 1,
				perPageOptions: [5, 10, 25, 50],
				total: 0
			},
			searchQuery: '',
			tableColumns: [
				{
					prop: 'loan_number',
					label: 'Loan Number',
					minWidth: 100
				},
				{
					prop: 'loan_state',
					label: 'State',
					minWidth: 100
				},
				{
					prop: 'loan_amount',
					label: 'Loan Amount',
					minWidth: 100
				},
				{
					prop: 'holdback',
					label: 'Holdback Funds',
					minWidth: 100
				},
				{
					prop: 'maturity_date',
					label: 'Maturity Date',
					minWidth: 100
				},
				{
					prop: 'loan_type',
					label: 'Loan Type',
					minWidth: 100
				}
			],
			fuseSearch: null
		}
	},
	computed: {
		pagedData() {
			return this.summary.row.slice(this.from, this.to)
		},
		queriedData() {
			let result = this.summary.row
			if (this.searchQuery !== '') {
				result = this.fuseSearch.search(this.searchQuery)
				this.pagination.total = result.length
			}
			return result.slice(this.from, this.to)
		},
		to() {
			let highBound = this.from + this.pagination.perPage
			if (this.total < highBound) {
				highBound = this.total
			}
			return highBound
		},
		from() {
			return this.pagination.perPage * (this.pagination.currentPage - 1)
		},
		total() {
			this.pagination.total = this.summary.row.length
			return this.summary.row.length
		}
	},
	mounted() {
		this.fuseSearch = new Fuse(this.summary.row, {
			keys: [
				'loan_number',
				'loan_state',
				'loan_amount',
				'holdback',
				'maturity_date',
				'loan_type'
			]
		})
	}
}
</script>

<style lang="scss" scoped>
</style>