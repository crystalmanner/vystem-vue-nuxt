<template>
  <footer class="footer">
    <div class="container-fluid d-flex flex-wrap justify-content-between">
      <div class="copyright">
        &copy; Veristone {{ new Date().getFullYear() }} | {{ api_url }}
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      api_url: process.env.api_url
    };
  }
};
</script>
<style></style>
