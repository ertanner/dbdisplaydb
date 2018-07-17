<template>
  <div>
    <h3>{{msg}}</h3>
    <div>
      <table width="300px" >
        <tr>
          <td>IREF</td>
          <td>IREF_Period</td>
        </tr>
        <tr v-for="b in iref" v-bind:class="b.IREF_Overall" v-bind:key="b.IREF_Overall">
          <td>{{b.IREF}}</td>
          <td>{{b.IREF_PERIOD}}</td>
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
      axios.get(`http://10.254.58.110:1337/irefData`)
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
    padding: 10px;
  }
  tr{
    border: 1px;
  }
  td{
    border: 1px;
  }
</style>
