<template>
  <b-col xl="3" md="6">
    <stats-card :title="title" :subTitle="subtitle">
      <div slot="header" class="icon-warning">
        <i class="nc-icon text-warning" :class="icon"></i>
      </div>
    </stats-card>
  </b-col>
</template>

<script>
export default {
	props: {
		title: Number,
		subtitle: String,
		icon: String
	}
}
</script>

<style lang="scss" scoped>
</style>

