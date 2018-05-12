<template>
<div class="bphr4k">
  <h3>{{msg}} %</h3>
  <table width="300px" >
    <tr>
      <td>Name</td>
      <td>Size</td>
      <td>Ratio</td>
    </tr>
    <tr v-for="b in bp" v-bind:class="b.V_COLOR" v-bind:key="b.MINHR">
      <td>{{b.BP_NAME}}</td>
      <td>{{b.BP_CUR_BUFFSZ}}</td>
      <td>{{b.TOTAL_HIT_RATIO_PERCENT}}</td>
    </tr>
  </table>
</div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'bphr4k',
  data () {
    return {
      msg: 'BP HIT RATIO',
      bp: [],
      counter: 0
    }
  },
  mounted: function () {
    this.fetchData()
  },
  created: function () {
    setInterval(() => {
      this.fetchData()
    }, 60000)
  },
  updated: function () {
    console.log() // 'BP Hit Ratio ' + this.counter
  },
  methods: {
    onFinish () {
      this.fetchData()
    },
    fetchData () {
      axios.get(`http://10.254.58.110:1337/bpHitRt`)
        .then(response => {
          this.bp = response.data
        })
        .catch(e => {
          this.errors.push(e)
        })
    }
  }
}
</script>

<style scoped>
  table{
    padding: 10px;
  }
  tr{
    border: 1px;
  }
  td{
    border: 1px;
  }
  h3{
    text-decoration-line: underline;
    text-underline: black;
  }
  .red {
    background-color: salmon;
    color: blue;
  }
  .yellow {
    background-color: yellow;
    color: blue;
  }
  .green {
    background-color: darkgreen;
    color: yellow;
  }
</style>
