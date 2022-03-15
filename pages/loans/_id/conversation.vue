<template>
  <div>
    <Conversation :conversations="conversation"></Conversation>
  </div>
</template>

<script>
import Conversation from "@/components/Loan/Conversation/Conversation";
import { mapGetters } from "vuex";
export default {
  components: {
    Conversation
  },
  async fetch({ store, params }) {
    await store.dispatch("loans/GET_CONVERSATION", params.id);
  },
  computed: mapGetters({
    conversation: "loans/conversation"
  })
};
</script>

<style lang="scss" scoped>
</style>