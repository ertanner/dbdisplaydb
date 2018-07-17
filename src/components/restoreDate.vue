<template>
  <div class="restoreDate">
    <h3>{{msg}}</h3>
    <table width="300px" >
      <tr v-for="b in tpb"  v-bind:class="b.V_COLOR" v-bind:key="b.DATE">
        <td>TPB</td><td>{{b.DATE}}</td>
      </tr>
    </table>
    <table width="300px" >
      <tr v-for="c in tst"  v-bind:class="c.V_COLOR" v-bind:key="c.DATE">
        <td>TST</td><td>{{c.DATE}}</td>
      </tr>
    </table>
    <table width="300px" >
      <tr v-for="d in dev"  v-bind:class="d.V_COLOR" v-bind:key="d.DATE">
        <td>DEV</td><td>{{d.DATE}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'RestoreDate',
  data () {
    return {
      msg: 'Restore Date',
      tpb: [],
      tst: [],
      dev: []
    }
  },
  mounted: function () {
    this.fetchDataTPB()
    this.fetchDataTST()
    this.fetchDataDEV()
  },
  updated: function () {
    console.log() // 'BP Hit Ratio ' + this.counter
  },
  methods: {
    onFinish () {
      this.fetchDataTPB()
      this.fetchDataTST()
      this.fetchDataDEV()
    },
    fetchDataTPB () {
      // axios.get(`http://10.254.58.110:1337/tpbRestore`)
      axios.get(`http://localhost:1338/tpbRestore`)
        .then(response => {
          console.log(response.data)
          this.tpb = response.data
        })
        .catch(e => {
          this.errors.push(e)
        })
    },
    fetchDataTST () {
      // axios.get(`http://10.254.58.110:1337/tpbRestore`)
      axios.get(`http://localhost:1338/tstRestore`)
        .then(response => {
          console.log(response.data)
          this.tst = response.data
        })
        .catch(e => {
          this.errors.push(e)
        })
    },
    fetchDataDEV () {
      // axios.get(`http://10.254.58.110:1337/tpbRestore`)
      axios.get(`http://localhost:1338/devRestore`)
        .then(response => {
          console.log(response.data)
          this.dev = response.data
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
