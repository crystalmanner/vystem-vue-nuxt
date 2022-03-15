<template>
  <div>
    <b-modal
      id="request-wire"
      title="Request Wire"
      ref="modal"
      @show="resetModal"
      @ok="handleOk"
      ok-title="Submit"
      scrollable
    >
      <b-form @submit.prevent="onSubmit">
        <fg-input label="Amount" v-model="amount" type="number"/>
        <fg-input label="Wire Requested Sent" v-model="wire_requested_sent_on" type="date"/>
        <fg-input label="Email Notes" v-model="email_notes_to_servicing" type="text"/>
        <label class="request-wire-label">
          File Upload
          <br>
          <FileUpload />
        </label>
        <br>
        <input type="checkbox" v-model="exclude_fee"> Exclude Fee
      </b-form>
    </b-modal>
  </div>
</template>

<script>
import FileUpload from "@/components/ldb/FileUpload.vue";

export default {
  props: ["draw_id"],
  components:{
    FileUpload
  },
  data() {
    return {
      amount: "",
      wire_requested_sent_on: "",
      exclude_fee: false,
      email_notes_to_servicing: "",
      file: ""
    };
  },
  methods: {
    resetModal() {
      this.amount = "";
      this.wire_requested_sent_on = "";
      this.exclude_fee = false;
      this.email_notes_to_servicing = "";
    },
    handleOk(bvModalEvt) {
      bvModalEvt.preventDefault();
      this.onSubmit();
    },
    onSubmit() {
      let formData = new FormData();
      formData.append("file", this.file);
      formData.append("amount", this.amount);
      formData.append("wire_requested_sent_on", this.wire_requested_sent_on);
      formData.append("exclude_fee", this.exclude_fee);
      formData.append(
        "email_notes_to_servicing",
        this.email_notes_to_servicing
      );
      formData.append("draw_id", this.draw_id);
      this.$emit("requestWire", formData);
      this.$nextTick(() => {
        this.$refs.modal.hide();
      });
    },
    handleFileUpload() {
      this.file = this.$refs.file.files[0];
    }
  }
};
</script>

<style lang="scss" scoped></style>
