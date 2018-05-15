<template>
<div class="bphitratio">
  <h3>{{msg}} %</h3>
  <table width="300px" >
    <tr v-for="b in bp" v-bind:class="b.V_COLOR" v-bind:key="b.MINHR">
      <td>{{b.MINHR}}</td>
    </tr>
  </table>
</div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'BufferPoolHitRatio',
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
    this.fetchData()
  },
  updated: function () {
    console.log() // 'BP Hit Ratio ' + this.counter
  },
  methods: {
    onFinish () {
      this.fetchData()
    },
    fetchData () {
      axios.get(`http://10.254.58.110:1337/bphitratio`)
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
