<template>
  <b-card title="Conversation">
    <b-row>
      <b-col cols="8">
        <div v-for="conversation in conversations" :key="conversation">
          <div class="row">
            <div class="col-md-2" v-if="conversation.cloudinary == null">
              <b-img thumbnail rounded src="~/assets/images/avatar.png" width="90" height="90"></b-img>
            </div>
            <div class="col-md-2" v-else>
              <b-img
                thumbnail
                rounded
                :src="'https://res.cloudinary.com/veristone/image/upload/q_80,c_limit,w_250,h_80/v1515698402/'+ conversation.cloudinary +' .jpg'"
                alt="NO IMAGE"
              ></b-img>
            </div>
            <div class="col-md-10">
              <b-card>
                <div class="row">
                  <div class="col-md-6">
                    <small>
                      <strong class="text-muted text-uppercase">{{conversation.user}}</strong>
                    </small>
                  </div>
                  <div class="col-md-6 text-right">
                    <small class="text-muted">{{conversation.created_date}}</small>
                  </div>
                </div>
                <p>
                  <em>{{conversation.note}}</em>
                </p>
              </b-card>
            </div>
          </div>
        </div>
      </b-col>
      <b-col cols="4">
        <b-form class="conversation_add_note">
          <label for="add_note">
            Add Note
            <span>*</span>
          </label>
          <b-form-textarea id="add_note" required v-model="add_note" rows="3" max-rows="10"></b-form-textarea>
          <b-button variant="success" cols="4" class="pull-right" block size="md" @click="addnote">
            <i class="fa fa-check"></i>Submit
          </b-button>
        </b-form>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: ["conversations"],
  data() {
    return {
      add_note: ""
    };
  },
  methods: {
    addnote() {
      this.$axios
        .post(`/v1/conversation-note/${this.$route.params.id}`, {
          note: this.add_note
        })
        .then(response => {
          this.$axios
            .get(`/v1/header-conversation/${this.$route.params.id}`)
            .then(response => {
              this.conversations = response.data[0].data;
              this.add = "";
            });
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>