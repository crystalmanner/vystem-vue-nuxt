<template>
  <div>
    <div v-if="value === true">
      <i class="fa fa-check text-success"></i>
    </div>
    <div v-else>
      <i class="fa fa-ban text-danger"></i>
    </div>
  </div>
</template>
<script>
export default {
  props: ["value"]
};
</script>

<style lang="scss" scoped>
</style>