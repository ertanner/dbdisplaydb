<template>
  <div>
    <h3>{{msg}}</h3>
    <div>
      <!--{{jsonData(iRefOverall)}}-->
      <line-chart :messages="{empty: 'No data'}" :refresh="60" :curve="false" width="600px" height="250px" :data="iRefOverall"></line-chart>
    </div>

  </div>
</template>

<script>
import axios from 'axios'
import Datepicker from 'vuejs-datepicker'

export default {
  name: 'irefChart',
  components: {
    Datepicker
  },
  data () {
    return {
      msg: 'Index Read Efficiency - Overall',
      iRefOverall: [],
      cd: {'2018-04-05': '40.13', '2018-04-06': '39.71', '2018-04-07': '314.46', '2018-04-08': '112.09', '2018-04-09': '40.01', '2018-04-10': '36.02', '2018-04-11': '35.32', '2018-04-12': '33.74'}
    //  [{'name': 'Overall', 'data': {'19-APR-2018': '32.89', '18-APR-2018': '33.34', '17-APR-2018': '33.95', '16-APR-2018': '34.69', '15-APR-2018': '35.70', '14-APR-2018': '34.20', '13-APR-2018': '32.67', '12-APR-2018': '33.74', '11-APR-2018': '35.32', '10-APR-2018': '36.02'}}, {'name': 'Period', 'data': {'19-APR-2018': '29.19', '18-APR-2018': '28.78', '17-APR-2018': '29.32', '16-APR-2018': '29.14', '15-APR-2018': '99.58', '14-APR-2018': '72.57', '13-APR-2018': '28.42', '12-APR-2018': '29.00', '11-APR-2018': '33.80', '10-APR-2018': '31.62'}}]// [{'2018-04-05 14:19:05.468000': '40.13'},{'2018-04-05 14:33:01.874000': '40.11'},{'2018-04-05 23:59:04.277000': '39.83'},{'2018-04-06 23:59:03.953000': '39.71'},{'2018-04-07 23:59:06.360000': '314.46'},{'2018-04-08 23:59:05.149000': '112.09'},{'2018-04-09 23:59:04.933000': '40.01'},{'2018-04-10 23:59:06.440000': '36.02'},{'2018-04-11 23:59:04.927000': '35.32'},{'2018-04-12 23:59:06.460000': '33.74'}]
    }
  },
  mounted: function () {
    this.fetchData()
    // this.renderChart({
    //   labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    //   datasets: [
    //     {
    //       label: 'downloads',
    //       borderColor: '#249EBF',
    //       pointBackgroundColor: 'white',
    //       borderWidth: 1,
    //       pointBorderColor: '#249EBF',
    //       backgroundColor: 'transparent',
    //       data: this.chartData
    //     }
    //   ]
    // }, this.options)
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
      this.processJsonData(this.chartData)
    },
    fetchData () { // 10.254.58.110:1337
      axios.get(`http://localhost:1338/irefOverall`)
        .then(response => {
          // console.log(response.data)
          // this.chartData = response.data
          this.iRefOverall = response.data
        })
        .catch(e => {
          this.errors.push(e)
        })
    },
    processJsonData (srcChartData) {
      var x = JSON.stringify(srcChartData)
      // x = x.replace(new RegExp('"', 'g'), '\'')
      x = x.replace(new RegExp('"STAT_TIME":', 'g'), '')
      x = x.replace(new RegExp(',"IREF":', 'g'), ': ')
      x = x.replace(new RegExp('"', 'g'), '\'')
      // x = x.replace(new RegExp('}]},{', 'g'), ' } }, {')
      x = x.replace(new RegExp('},{', 'g'), ', ')
      // x = x.replace(new RegExp('\'data\':\\[{', 'g'), ' \'data\': {')
      // x = x.replace(new RegExp('}]}]', 'g'), ' } } ]')
      // x = x.replace(new RegExp('{\'name\':', 'g'), '{ \'name\': ')
      // x = x.replace(new RegExp('\\[', 'g'), '[ ')
      x = x.replace(new RegExp(']', 'g'), '')
      x = x.replace(new RegExp('\\[', 'g'), '')
      // x = x.replace(new RegExp('\\[', 'g'), '')
      // x = x.replace(new RegExp('"data":\\[ {"', 'g'), '"data": {"')
      // x = x.replace(new RegExp('\'', 'g'), '"')
      console.log(x)
      console.log(this.cd)
      return x
    },
    jsonData (x) {
      var value = ''
      for (var key in x) {
        if (x.hasOwnProperty(key)) {
          var val = x[key]
          if (val.hasOwnProperty(x[key])) {
            var valB = x[key]
            value = valB
          }
        }
      }
      return value
    }
  }
}
</script>

<style scoped>

</style>
