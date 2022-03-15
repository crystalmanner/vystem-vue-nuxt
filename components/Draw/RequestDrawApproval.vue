<template>
  <div>
    <b-modal
      id="request-draw-approval"
      title="Request Draw Approval"
      ref="modal"
      @show="resetModal"
      @ok="handleOk"
      ok-title="Submit"
      scrollable
    >
      <b-form @submit.prevent="onSubmit">
        <fg-input label="Asking Amount" v-model="asking_amount" type="number"/>
        <fg-input label="Client Requested On" v-model="client_requested_on" type="date"/>
        <label class="request-draw-approval-lable">
          File Upload
          <FileUpload />
        </label>
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
      asking_amount: "",
      client_requested_on: "",
      file: ""
    };
  },
  methods: {
    resetModal() {
      this.asking_amount = "";
      this.client_requested_on = "";
    },
    handleOk(bvModalEvt) {
      bvModalEvt.preventDefault();
      this.onSubmit();
    },
    onSubmit() {
      let formData = new FormData();
      formData.append("file", this.file);
      formData.append("asking_amount", this.asking_amount);
      formData.append("client_requested_on", this.client_requested_on);
      formData.append("draw_id", this.draw_id);
      this.$emit("requestDraw", formData);
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
