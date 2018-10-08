<template>
  <div class="longRun">
    <h3>{{msg}}</h3>
    <table>
      <tr>
        <td>Statement Text </td>
        <td>Agent ID</td>
        <td>App Name</td>
        <td>User</td>
        <td>App Status</td>
        <td>Time</td>
      </tr>
      <tr v-for="l in lr" v-bind:class="l.COLOR" v-bind:key="l.ROW_NEXT">
        <td>{{l.STMT_TEXT}}</td>
        <td>{{l.AGENT_ID}}</td>
        <td>{{l.APPLICATION_NAME}}</td>
        <td>{{l.User_Name}}</td>
        <td>{{l.APPL_STATUS}}</td>
        <td>{{l.ELAPSED_TIME_MIN}}</td>
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
      msg: 'Long Running Processes',
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
      axios.get(this.$store.getters.getIP + '/longRun')
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
  .longRun{
    vertical-align: 60px;
  }
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
