<template>
  <div>
    <vue-dropzone
      ref="files"
      id="files"
      :options="dropzoneOptions"
      v-on:change="handleFileUpload()"
      :useCustomSlot="true"
    >
      <div class="dropzone-custom-content">                    
        <div class="subtitle">
          Drag and drop to upload content!<br>
          ...or click to select a file from your computer
        </div>
      </div>
    </vue-dropzone>
  </div>
</template>
<script>
export default {
  data(){
    return{
      dropzoneOptions: {
        url: "https://httpbin.org/post",
        thumbnailWidth: 150,
        maxFilesize: 0.5,
        headers: { "My-Awesome-Header": "header value" }
      }
    }
  }
}
</script>