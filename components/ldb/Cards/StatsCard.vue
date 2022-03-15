<template>
  <card class="card-stats">
    <div class="row">
      <div class="col-3" v-if="$slots.header">
        <div class="icon-medium text-center">
          <slot name="header"></slot>
        </div>
      </div>
      <div class="col-9" v-if="$slots.content || title">
        <div class="numbers">
          <slot name="content">
            <p v-if="subTitle" class="card-category">{{subTitle}}</p>
            <h5 v-if="title" class="card-title">{{title}}</h5>
          </slot>
        </div>
        <b-button variant="success" to="/loans/5258/servicing">See detail</b-button>  
      </div>
    </div>
    <div class="stats" slot="footer" v-if="$slots.footer">
      <slot name="footer"></slot>
    </div>
  </card>
</template>
<script>
import Card from './Card.vue'
export default {
	name: 'stats-card',
	components: {
		Card
	},
	props: ['title', 'subTitle']
}
</script>
<style>
</style>
