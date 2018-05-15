<template>
  <div>
    <h3>{{msg}}</h3>
    <table width="300px" >
      <tr v-for="b in dbLock"  v-bind:class="b.V_COLOR"  v-bind:key="b.EVENT_TYPE">
        <td>{{b.EVENT_TYPE}}</td>
        <td>{{b.COUNT}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'dbLockCount',
  data () {
    return {
      msg: 'DB Lock Count',
      dbLock: [],
      counter: 0
    }
  },
  created: function () {
    this.fetchData()
  },
  updated: function () {
    console.log() // 'DB Lock Counter ' + this.counter
  },
  mounted: function () {
    this.fetchData()
  },
  methods: {
    onFinish () {
      this.fetchData()
    },
    fetchData () {
      axios.get(`http://10.254.58.110:1337/dbaLocks24hr`)
        .then(response => {
          this.dbLock = response.data
        })
        .catch(e => {
          this.errors.push(e)
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
