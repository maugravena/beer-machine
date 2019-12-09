<template>
  <section id="app" class="section">
    <div class="container">
      <h1 class="name has-text-centered">Máquina Cervejeira</h1>
      <FormBeer />
    </div>
  </section>
</template>

<script>
import FormBeer from './components/FormBeer.vue'

export default {
  name: 'App',
  components: {
    FormBeer
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Share:700&display=swap');

  .section {
    height: 100vh;
    background-color: #FFFB1F;
  }

  .name {
    font-family: 'Share', cursive;
    font-size: 60px;
    color: rgb(0, 0, 0);
    text-shadow: 2px 2px 2px rgb(117, 117, 117);
  }
</style>
