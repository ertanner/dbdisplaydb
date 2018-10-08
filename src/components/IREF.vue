<template>
  <div>
    <h3>{{msg}}</h3>
    <div>
      <table width="300px" >
        <tr align="center">
          <td>Type</td>
          <td>Value</td>
        </tr>
        <tr v-for="b in iref" v-bind:class="b.V_COLOR" v-bind:key="b.NAME">
          <td>{{b.NAME}}</td>
          <td>{{b.IREF}}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'IREF',
  data () {
    return {
      msg: 'Index Read Efficiency',
      iref: []
    }
  },
  mounted: function () {
    this.fetchData()
  },
  created: function () {
    this.fetchData()
  },
  updated: function () {
    console.log()
  },
  methods: {
    onFinish () {
      this.fetchData()
    },
    fetchData () { // 10.254.58.110:1337
      axios.get(this.$store.getters.getIP + '/irefData')
        .then(response => {
          // console.log(response.data)
          // this.chartData = response.data
          this.iref = response.data
        })
        .catch(e => {
          this.errors.push(e)
        })
      // axios.get(`http://localhost:1338/irefPeriod`)
      //   .then(response => {
      //     // console.log(response.data)
      //     // this.chartData = response.data
      //     this.iRefPeriod = response.data
      //   })
      //   .catch(e => {
      //     this.errors.push(e)
      //   })
    }
  }
}
</script>

<style scoped>
  table{
    padding: 0px;
    border: 1px solid black;
    border-collapse: collapse;
  }
  tr{
    border: 1px;
  }
  td{
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
