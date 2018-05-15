<template>
  <div>
    <h3>{{msg}}</h3>
    <table width="300px" >
      <tr v-for="b in dbM"  v-bind:class="b.V_COLOR" v-bind:key="b.PERCENT_USED">
        <td>{{b.PERCENT_USED}} %used</td>
      </tr>
    </table>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'srvMemory',
  data () {
    return {
      msg: 'Server Memory',
      dbM: [],
      counter: 0
    }
  },
  created: function () {
    setInterval(() => {
      this.fetchData()
    }, 600000)
  },
  updated: function () {
    console.log()
  },
  mounted: function () {
    this.fetchData()
  },
  methods: {
    onFinish () {
      this.fetchData()
      console.log('onFinish!')
    },
    fetchData () {
      axios.get(`http://10.254.58.110:1337/srvmem`)
        .then(response => {
          this.dbM = response.data
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
    background: white;
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
