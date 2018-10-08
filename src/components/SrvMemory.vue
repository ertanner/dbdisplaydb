<template>
  <div>
    <h3>{{msg}}</h3>
    <table width="300px" >
      <tr v-for="b in dbM"   v-bind:key="b.PERCENT_USED">
        <td v-bind:class="b.V_COLOR">{{b.PERCENT_USED}}   %used</td>
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
      axios.get(this.$store.getters.getIP + '/srvmem')
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
    /*background: white;*/
    padding: 10px;
    padding: 10px;
    border: 1px solid black;
    border-collapse: collapse;
  }
  tr{
    padding: 0px;
    align-items: center;
  }
  td{
    text-align: center;
  }
h3{
  text-decoration-line: underline;
  text-underline: black;
}
</style>
