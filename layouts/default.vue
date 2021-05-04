<template>
  <div class="app">
    <Header />
    <main>
      <Nuxt />
    </main>
  </div>
</template>

<script>
import Header from '~/components/layout/header/Header';
export default {
  components: { Header },
};
</script>
