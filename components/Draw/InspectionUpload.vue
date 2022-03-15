<template>
  <div>
    <b-modal
      id="inspection-upload"
      title="Inspection Upload"
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
            class="form-control file dropify"
            id="file"
            ref="file"
            v-on:change="handleFileUpload()"
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
      file: ""
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
      formData.append("file", this.file);
      formData.append("draw_id", this.draw_id);
      this.$emit("inspectionUpload", formData);
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
