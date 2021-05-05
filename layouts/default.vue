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
import Header from '@/components/Layout/Header/Header';
import Error from '@/components/Layout/Error/Error';

export default {
  components: { Error, Header },
};
</script>
