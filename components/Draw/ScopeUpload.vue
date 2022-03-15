<template>
  <div>
    <b-modal
      id="scope-upload"
      title="Scope Upload"
      ref="modal"
      @show="resetModal"
      @ok="handleOk"
      ok-title="Submit"
      scrollable
    >
      <b-form @submit.prevent="onSubmit">
        <label>
          File Upload
          <br>
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
      files: []
    };
  },
  methods: {
    resetModal() {},
    handleOk(bvModalEvt) {
      bvModalEvt.preventDefault();
      this.onSubmit();
    },
    onSubmit() {
      let formData = new FormData();
      for (var i = 0; i < this.files.length; i++) {
        let file = this.files[i];
        formData.append("files[" + i + "]", file);
      }
      formData.append("draw_id", this.draw_id);
      this.$emit("scopeUpload", formData);
      this.$nextTick(() => {
        this.$refs.modal.hide();
      });
    },
    handleFileUpload() {      
      this.files = this.$refs.files.files;
    }
  }
};
</script>

<style lang="scss" scoped></style>
