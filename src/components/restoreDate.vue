<template>
  <div id="container">
    <h3 align="center">{{msg}}</h3>
    <table class="table table-bordered">
      <tr v-for="b in tpb"  v-bind:class="b.V_COLOR" v-bind:key="b.DATE">
          <td>TPB </td><td>{{b.DATE}}</td>
      </tr>
      <tr  v-for="c in tst"  v-bind:class="c.V_COLOR" v-bind:key="c.DATE">
          <td>TST </td><td>{{c.DATE}}</td>
      </tr>
      <tr v-for="d in dev"  v-bind:class="d.V_COLOR" v-bind:key="d.DATE">
        <td>DEV</td>  <td>{{d.DATE}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Date of Last Refresh',
  data () {
    return {
      msg: 'Date of Last Refresh',
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
      axios.get(this.$store.getters.getIP + '/tpbRestore')
      // axios.get(`http://localhost:1338/tpbRestore`)
        .then(response => {
          console.log(response.data)
          this.tpb = response.data
        })
        .catch(e => {
          this.errors.push(e)
        })
    },
    fetchDataTST () {
      axios.get(this.$store.getters.getIP + '/tstRestore')
      // axios.get(`http://localhost:1338/tstRestore`)
        .then(response => {
          console.log(response.data)
          this.tst = response.data
        })
        .catch(e => {
          this.errors.push(e)
        })
    },
    fetchDataDEV () {
      axios.get(this.$store.getters.getIP + '/devRestore')
      // axios.get(`http://localhost:1338/devRestore`)
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
    padding: 0px;
    border: solid 1px;
    border-collapse: collapse;
  }
  tr{
    /*border: solid 1px;*/
  }
  td{
    border: solid 1px;
  }
  #row{
    display: table-row;
  }
  .t{
    display: table-cell;
    border-style: solid;
    border: black;
    border-width: thin;
    border-color: black;
  }
  h3{
    text-decoration-line: underline;
    text-underline: black;
  }

</style>
