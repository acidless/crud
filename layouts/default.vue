<template>
  <div class="app">
    <Header />
    <main>
      <Nuxt />
    </main>
    <Error />
  </div>
</template>

<script>
import Header from '~/components/layout/header/Header';
import Error from '~/components/layout/error/Error';
export default {
  components: { Error, Header },
};
</script>
