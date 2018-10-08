<template>
<div class="bphr4k">
  <h3>{{msg}} %</h3>
  <table class="table table-striped" width="300px" >
    <tr align="center">
      <td>Name</td>
      <td>Size</td>
      <td>Ratio</td>
    </tr>
    <tr v-for="b in bp" v-bind:class="b.V_COLOR"  v-bind:key="b.MINHR">
      <td>{{b.BP_NAME}}</td>
      <td>{{b.BP_CUR_BUFFSZ}}</td>
      <td >{{b.TOTAL_HIT_RATIO_PERCENT}}</td>
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
      axios.get(this.$store.getters.getIP + '/bpHitRt')
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
    border: solid 1px;
    border-collapse: collapse;
  }
  tr{
    border: 1px;
  }
  td{
    border: 1px;
    border: 1px solid black;
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

</style>
