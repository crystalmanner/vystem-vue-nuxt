<template>
<div>
      <b-row>
        <b-col>
          <div class="card">
            <div class="header ">
              <h4 class="title pull-left">Loan Status/Flow</h4>
              <div class="pull-right title_right"> </div>
              <div class="clearfix"></div>
              <p class="category"></p>
            </div>
            <div class="content">
                <div v-if="loan.loan_workflow.valuations_open == true || loan.loan_workflow.valuations_approved == true">
                  <div v-if="loan.loan_workflow.underwriting_approved != true">
                    <a :href="'/sales/flow/pull_back/'+ loan.loan_detail.id" class="btn btn-fill btn-info btn-block" onclick="return confirm('Are you sure you want to pull loan back?')" style="margin-top: 10px;"><i class="fa fa-rotate-left"></i>
                    Pull loan back
                    </a>
                  </div>
                </div>
              <hr>
              <b-row>
                <b-col>
                  <table class="table table-striped">
                    <tbody>
                      <tr>
                        <td>Valuation</td>
                        <td>
                          <div v-if="loan.loan_workflow != '' && loan.loan_workflow.valuations_open == true">
                            <a href="#" class="btn btn-default btn-fill disabled btn-block"><i class="fa fa-circle-o-notch"></i>
                              In Progress
                                ({{ loan.loan_workflow.valuations_open_on }})
                            </a>
                          </div>
                          <div v-else-if="loan.loan_workflow.valuations_approved == true">
                            <a href="#" class="btn btn-info btn-fill disabled btn-block"><i class="fa fa-check"></i>
                              Complete
                              ({{ loan.loan_workflow.valuations_approved_on }})
                            </a>
                          </div>
                          <div v-else-if="loan.existing_building_count == 0">
                            <a href="#" class="btn btn-info btn-fill disabled btn-block"><i class="fa fa-exclamation"></i>
                              Needs Existing Property Information
                            </a>
                          </div>
                          <div v-else>
                            <a :href="'/sales/flow/valuation/'+loan_id" class="btn btn-info btn-fill btn-block" :class="loan.loan_locked ?  'disabled' : '' + loan.can_sales_promote_to_valuation == '' ? '' : 'disabled' ">
                              <div v-if="loan.can_sales_promote_to_valuation == '' ">
                                <i class="fa fa-paper-plane-o"></i>
                                Send
                              </div>
                              <div v-else>
                                {{ loan.can_sales_promote_to_valuation }}
                              </div>
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr v-if="loan.loan_program_id == 12 || loan.loan_program_id == 11">
                        <td>Construction</td>
                        <td>
                          <div v-if="loan.loan_workflow != '' && loan.loan_workflow.construction_open == true">
                            <a href="#" class="btn btn-default btn-fill disabled btn-block"><i class="fa fa-circle-o-notch"></i>
                              In Progress
                              ({{ loan.construction_open_on  }})
                            </a>
                          </div>
                          <div v-else-if="loan.loan_workflow.construction_approved == true">
                            <a href="#" class="btn btn-info btn-fill disabled btn-block"><i class="fa fa-check"></i>
                              Complete
                              ({{ loan.construction_approved_on }})
                            </a>
                          </div>
                          <div v-else-if="loan.existing_building_count == 0">
                            <a href="#" class="btn btn-info btn-fill disabled btn-block"><i class="fa fa-exclamation"></i>
                              Needs Existing Property Information
                            </a>
                          </div>
                          <div v-else-if="loan.loan_workflow.valuations_approved == false">
                            <a href="#" class="btn btn-info btn-fill disabled btn-block"><i class="fa fa-exclamation"></i>
                              Needs Valuation Approval
                            </a>
                          </div>
                          <div v-else>
                            <a :href="'/sales/flow/construction/'+ loan_id" class="btn btn-info btn-fill btn-block" :class="loan.loan_locked ? 'disabled' : '' + loan.can_sales_promote_to_construction == '' ? '' : 'disabled' ">

                              <div v-if="loan.can_sales_promote_to_construction == '' ">
                                <i class="fa fa-paper-plane-o"></i>
                                Send
                              </div>
                              <div v-else>
                                {{ loan.can_sales_promote_to_construction }}
                              </div>
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>Underwriting</td>
                        <td>
                          <div v-if="loan.loan_workflow != '' && loan.loan_workflow.underwriting_open == true">
                            <a href="#" class="btn btn-default btn-fill disabled btn-block"><i class="fa fa-circle-o-notch"></i>
                              In Progress
                              ({{ loan.underwriting_open_on  }})
                            </a>
                            <a :href="'/sales/flow/underwriting/remove_loan/'+ loan_id"><small>Pull Back From Underwriting</small></a>
                          </div>
                          <div v-else-if="loan.loan_workflow.underwriting_approved == true">
                            <a href="#" class="btn btn-info btn-fill disabled btn-block"><i class="fa fa-check"></i>
                              Complete
                              ({{ loan.underwriting_approved_on  }})
                            </a>
                          </div>
                          <div v-else>
                            <a :href="'/sales/flow/underwriting/'+ loan_id" class="btn btn-fill btn-block" :class="loan.loan_workflow.manager_approved ? 'btn-info' : 'btn-default disabled' "><i class="fa fa-paper-plane-o"></i> 
                              {{ loan.loan_workflow.manager_approved ? 'Send' : 'Needs Manager Approval' }}
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr v-if="loan.loan_type_id == 2">
                        <td>Servicing</td>
                        <td>
                          <div v-if="loan.loan_workflow != '' && loan.loan_workflow.servicing_open == true">
                            <a href="#" class="btn btn-default btn-fill disabled btn-block"><i class="fa fa-circle-o-notch"></i>
                              In Progress
                              ({{ loan.servicing_open_on }})
                            </a>
                          </div>
                          <div v-else-if="loan.loan_workflow.servicing_approved == true">
                            <a href="#" class="btn btn-info btn-fill disabled btn-block"><i class="fa fa-check"></i>
                              Complete
                              ({{ loan.servicing_approved_on }})
                            </a>
                          </div>
                          <div v-else-if="loan.loan_workflow.valuations_approved == false">
                            <a :href="'/sales/flow/servicing/'+ loan_id" class="btn btn-fill btn-block disabled"><i class="fa fa-paper-plane-o"></i>
                              Needs Valuation
                            </a>
                          </div>
                          <div v-else>
                            {{ can_sales_promote_to_manager }}
                            <a :href="'/sales/flow/servicing/'+ loan_id" class="btn btn-info btn-fill btn-block" :class="loan.loan_locked ? 'disabled' : '' + loan.can_sales_promote_to_manager == '' ? '' : 'disabled' ">

                              <div v-if="can_sales_promote_to_manager == '' ">
                                <i class="fa fa-paper-plane-o"></i>
                                Send
                              </div>
                              <div v-else>
                                {{ can_sales_promote_to_manager }}
                              </div>

                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr v-else>
                        <td>Manager</td>
                        <td>
                          <div v-if="loan.loan_workflow != '' && loan.loan_workflow.manager_open == true ">
                            <a href="#" class="btn btn-default btn-fill disabled btn-block"><i class="fa fa-circle-o-notch"></i>
                              In Progress
                              ({{ loan.manager_open_on  }})
                            </a>
                          </div>
                          <div v-else-if="loan.loan_workflow.manager_approved == true">
                            <a href="#" class="btn btn-info btn-fill disabled btn-block"><i class="fa fa-check"></i>
                              Complete
                              ({{ loan.manager_approved_on  }})
                            </a>
                          </div>
                          <div v-else-if="loan.loan_workflow.valuations_approved == false">
                            <a :href="'/sales/flow/manager/'+ loan_id" class="btn btn-fill btn-block disabled"><i class="fa fa-paper-plane-o"></i>
                              Needs Valuation
                            </a>
                          </div>
                          <div v-else>
                            <a :href="'/sales/flow/manager/'+ loan_id" class="btn btn-info btn-fill btn-block" :class="loan.loan_locked ? 'disabled' : '' + loan.can_sales_promote_to_manager == '' ? '' : 'disabled' ">

                              <div v-if="loan.can_sales_promote_to_manager == ''">
                                <i class="fa fa-paper-plane-o"></i>
                                Send
                              </div>
                              <div v-else>
                                {{ loan.can_sales_promote_to_manager }}
                              </div>

                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr v-if="loan.session_sales_manager == true && loan.loan_workflow != '' && loan.loan_workflow.manager_open == true ">
                        <td nowrap="nowrap">Manager Approval</td>
                        <td>
                          <div v-if="loan.loan_workflow && loan.loan_workflow.manager_approved == false">
                            <a :href="'/sales/flow/manager/approve/'+ loan_id" class="btn btn-fill btn-block btn-info"><i class="fa fa-paper-plane-o"></i>
                              Manager Approval
                            </a>
                            <a :href="'/sales/question/'+ loan_id" class="btn btn-danger btn-fill btn-block"><i class="fa fa-paper-plane"></i>
                              Send back to Sales
                            </a>
                          </div>
                          <div v-else>
                            <a href="#" class="btn btn-info btn-fill disabled btn-block"><i class="fa fa-check"></i>
                              Complete
                              ({{ loan.manager_approved_on  }})
                            </a>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </b-col>
              </b-row>
            </div>
          </div>
        </b-col>
      </b-row>
  </div>
</template>

<script>
  export default {
    props: ['loan']
    
  }
</script>

<style lang="scss" scoped>

</style>