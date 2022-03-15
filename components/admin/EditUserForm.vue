  <template>
  <div>
    <b-modal
      id="edit_user_modal"
      v-model="this.showModal"
      ref="modal"
      size="xl"
      title="Edit User"
      ok-title="Submit"
      @show="resetModal"
      @ok="handleOk"
      scrollable
    >
      <b-form @submit.prevent="onSubmit">
        <b-row>
          <b-col cols="6">
            <fg-input label="Login Name" v-model="form.name" required="true"/>
          </b-col>
          <b-col cols="6">
            <fg-input label="Email" v-model="form.email" required="true"/>
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="6">
            <fg-input label="Role">
              <b-form-select v-model="form.role_name" :options="roles"></b-form-select>
            </fg-input>
          </b-col>
          <b-col cols="6">
            <fg-input label="Homepage">
              <b-form-select v-model="form.role_homepage" :options="role_hompages"></b-form-select>
            </fg-input>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <fg-input label="Conversation Role">
              <b-form-select v-model="form.conversation_role" :options="roles_conversation"></b-form-select>
            </fg-input>
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="2">
            <l-checkbox label="Sales Manager" v-model="form.sales_manager"/>
          </b-col>
          <b-col cols="2">
            <l-checkbox label="Sales Assignable" v-model="form.sales_assignable"/>
          </b-col>
          <b-col cols="2">
            <l-checkbox label="Pull Credit" v-model="form.pull_credit"/>
          </b-col>
          <b-col cols="2">
            <l-checkbox label="Locked Out" v-model="form.locked_out"/>
          </b-col>
          <b-col cols="2">
            <l-checkbox label="Auction Rep" v-model="form.auction_assignable"/>
          </b-col>
          <b-col cols="2">
            <l-checkbox label="Auction Money" v-model="form.request_auction_money"/>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <l-checkbox label="Active" v-model="form.active"/>
          </b-col>
        </b-row>
      </b-form>
    </b-modal>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: ["showModal", "user"],
  data() {
    return {
      form: {
        name: "",
        email: "",
        role_name: "",
        role_homepage: "",
        conversation_role: "",
        sales_manager: "",
        sales_assignable: "",
        pull_credit: "",
        locked_out: "",
        auction_assignable: "",
        request_auction_money: "",
        active: "",
        id: ""
      }
    };
  },
  methods: {
    resetModal() {
      this.form.name = this.user.name;
      this.form.email = this.user.email;
      this.form.role_name = this.user.role_name;
      this.form.role_homepage = this.user.role_homepage;
      this.form.conversation_role = this.user.conversation_role;
      this.form.sales_manager = this.user.sales_manager;
      this.form.sales_assignable = this.user.sales_assignable;
      this.form.pull_credit = this.user.pull_credit;
      this.form.locked_out = this.user.locked_out;
      this.form.auction_assignable = this.user.auction_assignable;
      this.form.request_auction_money = this.user.request_auction_money;
      this.form.active = this.user.active;
      this.form.id = this.user.id;
    },
    handleOk(bvModalEvt) {
      bvModalEvt.preventDefault();
      this.onSubmit();
    },
    onSubmit(e) {
      this.$emit("editForm", this.form);
      // Hide the modal manually
      this.$nextTick(() => {
        this.$refs.modal.hide();
      });
    }
  },
  computed: mapGetters({
    roles: "constants/getRoles",
    role_hompages: "constants/getRoleHomepage",
    roles_conversation: "constants/getRoleConversation"
  })
};
</script>

<style lang="scss" scoped></style>