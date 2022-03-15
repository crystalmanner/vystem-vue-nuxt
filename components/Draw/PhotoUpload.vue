<template>
  <div>
    <b-modal
      id="photo-upload"
      title="Photo Upload"
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
          <input
            type="file"
            accept="image/*"
            class="form-control file dropify"
            id="files"
            multiple
            v-on:change="handleFileUpload()"
            ref="files"
          >
        </label>
      </b-form>
    </b-modal>
  </div>
</template>

<script>
export default {
  props: ["draw_id"],
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
      this.$emit("photoUpload", formData);
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
