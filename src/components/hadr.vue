<template>
  <div class="longRun">
    <h3>{{msg}}</h3>
    <table>
      <tr>
        <td>Server</td>
        <td>Log File</td>
        <td>Log Page</td>
        <td>Log LSN</td>
      </tr>
      <tr v-for="l in lr" v-bind:key="l.Orderby">
        <td>{{l.SERVER}}</td>
        <td>{{l.LOG_FILE}}</td>
        <td>{{l.LOG_PAGE}}</td>
        <td  v-bind:class="l.COLOR">{{l.LOG_LSN}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'longRun',
  data () {
    return {
      msg: 'HADR Status',
      lr: [],
      counter: 0
    }
  },
  mounted: function () {
    this.fetchData()
  },
  created: function () {
    setInterval(() => {
      this.fetchData()
    }, 600000)
  },
  updated: function () {
    console.log() // 'BP Hit Ratio ' + this.counter
  },
  methods: {
    onFinish () {
      this.fetchData()
    },
    fetchData () {
      axios.get(this.$store.getters.getIP + '/hadr')
        .then(response => {
          this.lr = response.data
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
    border: 1px solid black;
    border-collapse: collapse;
  }
  tr{
    padding: 0px;
  }
  td{
    padding: 5px;
    border: 1px solid black;
  }
  h3{
    text-decoration-line: underline;
    text-underline: black;
  }
  .red {
    background-color: red;
    color: white;
  }
  .yellow {
    background-color: blue;
    color: white;
  }
  .orange {
    background-color: orange;
    color: white;
  }
  .purple {
    background-color: purple;
    color: white;
  }
</style>
