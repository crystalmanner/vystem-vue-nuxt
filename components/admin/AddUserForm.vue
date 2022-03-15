  <template>
  <div>
    <b-modal
      id="add-user"
      title="Add User"
      ref="modal"
      size="xl"
      @show="resetModal"
      @ok="handleOk"
      ok-title="Submit"
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
  props: [],
  data() {
    return {
      form: {
        name: "",
        email: "",
        role_name: "",
        role_homepage: "",
        conversation_role: "",
        sales_manager: false,
        sales_assignable: false,
        pull_credit: false,
        locked_out: false,
        auction_assignable: false,
        request_auction_money: false,
        active: true
      }
    };
  },
  methods: {
    resetModal() {
      this.form.name = "";
      this.form.email = "";
      this.form.role_name = "";
      this.form.role_homepage = "";
      this.form.conversation_role = "";
      this.form.sales_manager = false;
      this.form.sales_assignable = false;
      this.form.pull_credit = false;
      this.form.locked_out = false;
      this.form.auction_assignable = false;
      this.form.request_auction_money = false;
      this.form.active = true;
    },
    handleOk(bvModalEvt) {
      bvModalEvt.preventDefault();
      this.onSubmit();
    },
    onSubmit(e) {
      this.$emit("createForm", this.form);
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