<template>
  <div id="app" align="center" class="row">
    <h1 align="center">DB Health Dashboard</h1>
    <div class="column">
      <div>
        <dbMemory/>
      </div>
      <div>
        <srvMemory/>
      </div>
      <div>
        <BufferPoolHitRatio/>
      </div>
      <div>
        <bphr4k/>
      </div>
      <div>
        <dbLockCount/>
      </div>
      <div>
        <msgQueueCount/>
      </div>
      <div>
        <iref/>
      </div>
    </div>
    <div class="columnt">
      <longRun></longRun>
    </div>
  </div>
</template>

<script>
import dbMemory from './components/DB_Memory.vue'
import srvMemory from './components/SrvMemory.vue'
import BufferPoolHitRatio from './components/BufferPoolHitRatio.vue'
import bphr4k from './components/BufferPoolHitRatio4K.vue'
import dbLockCount from './components/DB_Lock_Count.vue'
import msgQueueCount from './components/MsgQueueCount.vue'
import iref from './components/IREF.vue'
import longRun from './components/longRun.vue'

export default {
  name: 'App',
  data () {
    return {
      show: true
    }
  },
  components: {
    'dbMemory': dbMemory,
    'BufferPoolHitRatio': BufferPoolHitRatio,
    'dbLockCount': dbLockCount,
    'msgQueueCount': msgQueueCount,
    'srvMemory': srvMemory,
    'bphr4k': bphr4k,
    'iref': iref,
    'longRun': longRun
  }
}

</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  width: 100%;
}
.left{
  float: left;
    width: 300px;
  }
.right{
  float: right;
    width: 300px;
  }
.middle{
  width: 300px;
}
  h1{
    align: center;
    text-decoration-line: underline;
    text-underline: black;
  }
.column {
  float: left;
  width: 20%;
}
.columnt {
  float: right;
  width: 80%;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}
</style>
