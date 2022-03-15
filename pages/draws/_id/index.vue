<template>
  <div>
    <b-button variant="secondary" size="md" :to="`/loans/${draw.loan_id}`">View Loan</b-button>
    <b-row>
      <b-col cols="9">
        <b-card title="Request Details">
          <b-card-text>
            <b-row>
              <b-col cols="6">
                <label>Asking Amount</label>
                <money
                  type="text"
                  v-model.number="draw.asking_amount"
                  v-bind="money"
                  class="form-control"
                ></money>
                <!-- <fg-input label="Asking Amount" v-model="draw.asking_amount" type="number"/> -->
              </b-col>
              <b-col cols="6">
                <label>File Upload</label>
                <FileUpload/>
              </b-col>
            </b-row>
            <div class="pull-right">
              <b-button class="btn btn-fill btn-success" @click="onSubmit">Submit</b-button>
            </div>
            <br>
            <h4 class="card-title">Previous Draw Uploaded</h4>
            <br>
            <table class="table table-striped">
              <tr>
                <th>Date</th>
                <th>File Name</th>
                <th>Type</th>
                <th>Document</th>
              </tr>
              <tr v-for="draw in this.uploads" :key="draw.id">
                <td>{{draw.date}}</td>
                <td>{{draw.filename}}</td>
                <td>{{draw.type}}</td>
                <td>
                  <b-button variant="secondary" size="sm" :href="draw.s3_path" target="_blank">
                    <i class="fa fa-cloud-download"></i>
                  </b-button>
                </td>
              </tr>
            </table>
          </b-card-text>
        </b-card>
        <b-card title="Details">
          <b-card-text>
            <div class="loan-card-top">
              <b-row>
                <b-col>
                  <div class="loan-card-loan-amount">{{draw.total_holdback_amount}}</div>
                  <div class="loan-card-label">Remaining Holdback</div>
                </b-col>
              </b-row>
            </div>
            <table class="table table-striped">
              <tr>
                <td>Loan Number</td>
                <td>{{draw.loan_number}}</td>
              </tr>
              <tr>
                <td>Borrower</td>
                <td>{{draw.borrower}}</td>
              </tr>
              <tr>
                <td>Address</td>
                <td>{{draw.address}}</td>
              </tr>
              <tr>
                <td>Asking Amount</td>
                <td>{{draw.asking_amount | currency}}</td>
              </tr>
              <tr>
                <td>Status</td>
                <td>{{draw.status}}</td>
              </tr>
              <tr>
                <td>Total Holdback Amount</td>
                <td>{{draw.total_holdback_amount}}</td>
              </tr>
            </table>
          </b-card-text>
        </b-card>
        <b-card title="Scopes">
          <b-card-text>
            <b-button variant="success" size="md" v-b-modal.scope-upload>Upload Scope</b-button>
            <ScopeUpload @scopeUpload="scopeUpload" :draw_id="this.$route.params.id"></ScopeUpload>
            <hr>
            {table of scopes for this draw }
            <hr>
            <strong>Previous Scopes</strong>
            {table of scopes for previous draws}
          </b-card-text>
        </b-card>
        <b-card title="Inspection">
          <b-card-text>
            <h5>
              <b>Inspection Status :</b>
              {{draw.inspection_status}}
            </h5>
            <b-button variant="success" size="md" @click="requested">Inspection requested</b-button>

            <b-button variant="success" size="md" @click="approved">Inspection Approved</b-button>

            <b-button
              variant="success"
              size="md"
              v-b-modal.inspection-upload
            >Inspection Report Upload</b-button>
            <InspectionUpload @inspectionUpload="inspectionUpload" :draw_id="this.$route.params.id"></InspectionUpload>
            <table class="table table-striped">
              <tr>
                <th>Date</th>
                <th>File Name</th>
                <th>Type</th>
                <th>Document</th>
              </tr>
              <tr v-for="draw in this.inspection_uploads" :key="draw.id">
                <td>{{draw.date}}</td>
                <td>{{draw.filename}}</td>
                <td>{{draw.type}}</td>
                <td>
                  <b-button variant="secondary" size="sm" :href="draw.s3_path" target="_blank">
                    <i class="fa fa-cloud-download"></i>
                  </b-button>
                </td>
              </tr>
            </table>
          </b-card-text>
        </b-card>

        <b-card title="Photos">
          <b-card-text>
            <b-button variant="success" size="md" v-b-modal.photo-upload>Upload</b-button>
            <PhotoUpload @photoUpload="photoUpload" :draw_id="this.$route.params.id"></PhotoUpload>
            <gallery :images="images" :index="index" @close="index = null"></gallery>
            <div
              class="image"
              v-for="(image, imageIndex) in images"
              :key="imageIndex"
              @click="index = imageIndex"
              :style="{ backgroundImage: 'url(' + image + ')', width: '170px', height: '143px' }"
            ></div>
          </b-card-text>
        </b-card>
        <b-card title="Previous Draws">
          <b-card-text>
            <table class="table table-striped">
              <tr>
                <th>Note</th>
                <th>Transaction Date</th>
                <th>Amount</th>
              </tr>
              <tr v-for="previous_draw in this.previous_draws" :key="previous_draw.id">
                <td>
                  <nuxt-link :to="`/draws/${previous_draw.id}`">{{previous_draw.note}}</nuxt-link>
                </td>
                <td>{{previous_draw.transaction_date}}</td>
                <td>{{previous_draw.amount}}</td>
              </tr>
            </table>
          </b-card-text>
        </b-card>
      </b-col>
      <b-col cols="3">
        <b-button
          variant="success"
          size="md"
          block
          v-b-modal.request-draw-approval
        >Request Draw Approval</b-button>
        <b-button variant="success" size="md" block v-b-modal.request-wire>Request Wire</b-button>
        <b-button variant="success" size="md" block v-b-modal.approve-wire>Approve Wire</b-button>
        <RequestDrawApproval @requestDraw="requestDraw" :draw_id="this.$route.params.id"></RequestDrawApproval>
        <RequestWire @requestWire="requestWire" :draw_id="this.$route.params.id"></RequestWire>
        <ApproveWire @approveWire="approveWire" :draw_id="this.$route.params.id"></ApproveWire>
        <hr>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import RequestDrawApproval from "@/components/Draw/RequestDrawApproval.vue";
import RequestWire from "@/components/Draw/RequestWire.vue";
import ApproveWire from "@/components/Draw/ApproveWire.vue";
import InspectionUpload from "@/components/Draw/InspectionUpload";
import ScopeUpload from "@/components/Draw/ScopeUpload";
import FileUpload from "@/components/ldb/FileUpload.vue";
import PhotoUpload from "@/components/Draw/PhotoUpload";
import VueGallery from "vue-gallery";
import _ from "lodash";
import $ from "jquery";
import { mapGetters } from "vuex";
export default {
  props: ["draw"],
  data() {
    return {
      files: [],
      uploads: "",
      inspection_uploads: "",
      previous_draws: "",
      index: null,
      money: {
        decimal: ".",
        thousands: ",",
        prefix: "$ ",
        precision: 1,
        masked: false
      }
    };
  },
  components: {
    InspectionUpload,
    ScopeUpload,
    RequestDrawApproval,
    RequestWire,
    ApproveWire,
    FileUpload,
    PhotoUpload,
    gallery: VueGallery
  },
  async fetch({ store, params }) {
    await store.dispatch("draw/GET_DRAW_PHOTO", params.id);
  },
  computed: mapGetters({
    images: "draw/get_draw_photos"
  }),
  created() {
    this.$axios.get(`/v1/draws/upload/${this.draw.id}`).then(response => {
      this.uploads = response.data[0].data;
    });
    this.$axios
      .get(`/v1/draws/inspection/upload/${this.draw.id}`)
      .then(response => {
        this.inspection_uploads = response.data[0].data;
      });
    this.$axios
      .get(`/v1/loan/previous_draws/${this.draw.id}`)
      .then(response => {
        this.previous_draws = response.data[0].data;
      });
  },
  methods: {
    requestDraw: async function(e) {
      await this.$store.dispatch("draw/POST_REQUEST_DRAW", e);
    },
    requestWire: async function(e) {
      await this.$store.dispatch("draw/POST_REQUEST_WIRE", e);
    },
    approveWire: async function(e) {
      await this.$store.dispatch("draw/POST_APPROVE_WIRE", e);
    },
    inspectionUpload: async function(e) {
      await this.$store.dispatch("draw/INSPECTION_UPLOAD", e);
      this.$axios
        .get(`/v1/draws/inspection/upload/${this.draw.id}`)
        .then(response => {
          this.inspection_uploads = response.data[0].data;
        });
    },
    scopeUpload: async function(e) {
      await this.$store.dispatch("draw/SCOPE_UPLOAD", e);
    },
    photoUpload: async function(e) {
      await this.$store.dispatch("draw/PHOTO_UPLOAD", e);
      await this.$store.dispatch("draw/GET_DRAW_PHOTO", this.$route.params.id);
    },
    handleFileUpload() {
      this.files = this.$refs.files.files;
    },
    onSubmit() {
      let formData = new FormData();
      for (var i = 0; i < this.files.length; i++) {
        let file = this.files[i];
        formData.append("files[" + i + "]", file);
      }
      formData.append("amount", this.draw.asking_amount);
      this.$axios
        .post(`/v1/draws/upload/${this.draw.id}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        })
        .then(response => {
          this.$router.push(`/draws/${this.draw.id}`);
          this.$axios.get(`/v1/draws/upload/${this.draw.id}`).then(response => {
            this.uploads = response.data[0].data;
          });
        })
        .catch(e => {
          this.formErrors.push(e);
        });
    },
    requested() {
      this.$axios
        .post(`/v1/draws/inspection-requested/${this.draw.id}`)
        .then(response => {
          this.draw = response.data[0].data;
          this.$router.push(`/draws/${this.draw.id}`);
        })
        .catch(e => {
          this.formErrors.push(e);
        });
    },
    approved() {
      this.$axios
        .post(`/v1/draws/inspection-approved/${this.draw.id}`)
        .then(response => {
          this.draw = response.data[0].data;
          this.$router.push(`/draws/${this.draw.id}`);
        })
        .catch(e => {
          this.formErrors.push(e);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.loan-card-top {
  border-bottom: 1px solid #e7e7e7;
}
.loan-card-top .loan-card-label {
  font-size: 12px;
  color: #b4b4b4;
  top: -7px;
  position: relative;
}
.loan-card-loan-amount {
  font-size: 28px;
  font-weight: bold;
  letter-spacing: -1px;
}
.image {
  float: left;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  border: 1px solid #ebebeb;
  margin: 5px;
}
</style>