<template>
  <div class="columns">
    <div class="column is-three-fifths is-offset-one-fifth">
      <div class="box">
        <b-field label="Qual temperatura você deseja sua cerveja?">
          <b-input placeholder="Digite a temperatura" value=""></b-input>
        </b-field>
        <b-button class="has-text-weight-bold" type="is-primary" expanded>
          Servir cerveja
        </b-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FormBeer',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
