<template>
  <header>
    <h1>
      <nuxt-link to="/"> Tasks </nuxt-link>
    </h1>
  </header>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style lang="scss" scoped>
header {
  padding: 2em;
  background: var(--header-bg);
  margin-bottom: 2em;

  h1 {
    font-weight: bold;
    font-size: 3rem;
  }
}
</style>
