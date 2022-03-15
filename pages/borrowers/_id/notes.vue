<template>
  <div>
    <!-- {{borrower}} -->
    <b-card title="Notes">
      <b-row>
        <b-col cols="8">
          <div v-for="borrower in borrower_notes" :key="borrower">
            <div class="row">
              <div class="col-md-2" v-if="borrower.cloudinary == null">
                <b-img thumbnail rounded src="~/assets/images/avatar.png" width="90" height="90"></b-img>
              </div>
              <div class="col-md-2" v-else>
                <b-img
                  thumbnail
                  rounded
                  :src="'https://res.cloudinary.com/veristone/image/upload/q_80,c_limit,w_250,h_80/v1515698402/'+ borrower.cloudinary +' .jpg'"
                  alt="NO IMAGE"
                ></b-img>
              </div>
              <div class="col-md-10">
                <b-card>
                  <div class="row">
                    <div class="col-md-6">
                      <small>
                        <strong class="text-muted text-uppercase">{{borrower.user}}</strong>
                      </small>
                    </div>
                    <div class="col-md-6 text-right">
                      <small class="text-muted">{{borrower.created_date}}</small>
                    </div>
                  </div>
                  <p>
                    <em>{{borrower.note}}</em>
                  </p>
                </b-card>
              </div>
            </div>
          </div>
        </b-col>
        <b-col cols="4">
          <b-form>
            <label for="add_note">
              Add Note
              <span>*</span>
            </label>
            <b-form-textarea id="add_note" required v-model="add_note" rows="3" max-rows="10"></b-form-textarea>
            <br>
            <b-button variant="success" cols="4" class="pull-right" size="md" @click="addnote">
              <i class="fa fa-check"></i>Submit
            </b-button>
          </b-form>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
import VerstoneGrid from "@/components/ldb/Layout/SyncfusionGrid.vue";
import { mapGetters } from "vuex";
export default {
  props: ["borrower"],
  async fetch({ store, params }) {
    await store.dispatch("borrower/GET_BORROWER_NOTES", params.id);
  },
  computed: mapGetters({
    borrower_notes: "borrower/borrower_notes"
  }),
  data() {
    return {
      add_note: ""
    };
  },
  methods: {
    async addnote() {
      await this.$axios
        .post(`/v1/borrower-note/${this.borrower.detail.id}`, {
          note: this.add_note
        })
        .then(response => {
          this.add_note = "";
        });
      await this.$store.dispatch(
        "borrower/GET_BORROWER_NOTES",
        this.$route.params.id
      );
    }
  }
};
</script>

<style lang="scss" scoped>
</style>