<template>
  <div v-if="error" class="error">
    <h1>{{ error }}</h1>
    <button @click="closeError" class="btn-link close">&times;</button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Error',
  computed: {
    ...mapGetters({
      error: 'error',
    }),
  },
  methods: {
    closeError() {
      // Убираем значение ошибки, для скрытия окна
      this.$store.commit('setError', null);
    },
  },
};
</script>

<style lang="scss" scoped>
.error {
  position: fixed;
  bottom: 2em;
  background: var(--danger-bg);
  padding: 3em 2.5em 2.5em 2.5em;
  right: 2em;
  display: flex;

  .close {
    position: absolute;
    top: 0;
    right: 0.25em;
  }
}

@media screen and (max-width: 600px) {
  .error {
    right: 0;
    left: 0;
  }
}
</style>
