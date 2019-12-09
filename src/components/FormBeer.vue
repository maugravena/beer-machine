<template>
  <div class="columns">
    <div class="column is-three-fifths is-offset-one-fifth">
      <div class="box">
        <b-field label="Qual temperatura você deseja sua cerveja?">
          <form @submit.prevent="getStyle">
            <input class="input"
              type="number" 
              placeholder="Digite a temperatura" 
              v-model="temperature">
            <button class="button">
              Servir cerveja
            </button>
          </form>
        </b-field>
      </div>
      <p v-if="errored">Pedimos desculpas, não estamos conseguindo recuperar as informações no momento. Por favor, tente novamente mais tarde.</p>
      <div v-else>
        <div v-if="loading"></div>
        <div class="box" v-else>
          <p class="text">Aqui está, a melhor cerveja para <strong>{{temperature2}}º</strong> é:</p>
          <p class="style">{{ style }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Beer from '../services/beer'

export default {
  name: 'FormBeer',

  data() {
    return {
      temperature: null,
      temperature2: null,
      style: null,
      loading: true,
      errored:false
    }
  },

  methods: {
    getStyle() {
      this.temperature2 = this.temperature
      Beer.get(this.temperature)
        .then(res => (this.style = res.data.style))
        .catch(error => {
          console.log(error)
          this.errored = true
      })
      .finally(() => this.loading = false)
    }    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Share:700&display=swap');

  .button {
    background-color: #9a48ff;
    color: #fff;
    font-weight: bold;
    margin-top: 10px;
  }

  .text {
    font-size: 20px;
  }

  .style {
    font-family: 'Share', cursive;
    font-size: 60px;
  }
</style>
