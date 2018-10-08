<template>
  <div id="app" align="center" class="row">
    <h1 align="center">DB Health Dashboard</h1>
    <hr>
    <div class="lh_column">
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
    <div class="rh_column">
      <div class="floatLt">
        <hadr></hadr>
      </div>
      <div class="floatRt">
        <restoreDate/>
      </div>
    </div>
    <div class="bottom">
      <div class="bottomDiv">
        <longRun></longRun>
      </div>
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
import hadr from './components/hadr.vue'
import irefChart from './components/IrefChart.vue'
import restoreDate from './components/restoreDate.vue'

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
    'longRun': longRun,
    'hadr': hadr,
    'irefChart': irefChart,
    'restoreDate': restoreDate
  }
}

</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 10px;
  width: 100%;
}
body{
  background-color: aliceblue;
}
.lh_column {
  float: left;
  width: 20%;
  padding-left: 20px;
  border-right: 2px black solid;
}
.rh_column {
  float: right;
  width: 75%;
  border-bottom: 2px black solid;
  padding-bottom: 10px;
}

.floatLt{
  float: left;
  padding-left: 100px;
}
.floatRt{
  float: right;
  padding-right: 100px;
}

.bottom{
  padding-top: 200px;
}
.bottomDiv{
  padding-top: 20px;
}
/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}
</style>
