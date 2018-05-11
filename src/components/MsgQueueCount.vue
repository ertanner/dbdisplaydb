<template>
  <div>
    <h3>{{msg}}</h3>
    <table width="300px" >
      <tr >
        <td>Direction</td>
        <td>Status</td>
        <td>Count</td>
        <td>Delay</td>
      </tr>
      <tr v-for="b in mQCnt" v-bind:key="b.MSG_DIRECTION" v-bind:class="b.V_COLOR">
        <td>{{b.MSG_DIRECTION}}</td>
        <td>{{b.STATUS}}</td>
        <td>{{b.TTL_MSG}}</td>
        <td>{{b.DELAY}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'msgQueueCnt',
  data () {
    return {
      msg: 'Message Queue Count',
      mQCnt: [],
      counter: 0
    }
  },
  created: function () {
    setInterval(() => {
      this.fetchData()
    }, 60000)
  },
  updated: function () {
    console.log() // 'MsgQueueCount ' + this.counter
  },
  mounted: function () {
    this.fetchData()
  },
  methods: {
    onFinish () {
      this.fetchData()
    },
    fetchData () {
      axios.get(`http://10.254.58.110:1337/MessageQueueStatus`)
        .then(response => {
          this.mQCnt = response.data
          // if (this.mQCnt === []) {
          //   this.mQCnt = {'MSG_DIRECTION': 'OB', 'STATUS': 'NS', 'TTL_MSG': 0, 'DELAY': 0}
          //   console.log('got here')
          // }
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
    background: green;
    padding: 10px;
    color: white;
  }
  tr{
    border: 1px;
    border-color: black;
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
