<template>
  <div class="stats-viewer">
    <div class="container">
      <div class="row">
        <div class="twelve columns">
          <div class="chart-host">
            <canvas id="trafficChart" width="400" height="400"></canvas>
          </div>
        </div>
      </div>
    </div>
    <md-dialog-alert :md-content-html="completedAlert.content" :md-ok-text="completedAlert.ok" ref="completedDialog">
    </md-dialog-alert>
  </div>
</template>

<script>

  import axios from 'axios'
  import Chart from 'chart.js'

  let axiosRequestConfig = {
    validateStatus: function (status) {
      return status >= 200 && status < 500
    }
  }

  export default {
    data() {
      return {
        stats: {
          data: {},
          options: {
            maintainAspectRatio: false,
            scales: {
              yAxes: [{
                ticks: {
                  stepSize: 1
                }
              }],
              xAxes: [{
                ticks: {
                  stepSize: 1,
                  min: 0,
                  max: 7
                },
                display: true
              }]
            }
          }
        },
        completedAlert: {
          content: '.',
          ok: 'Cool'
        }
      }
    },
    mounted() {
      let vm = this
      // get shrink route
      let shrinkRoute = vm.$route.params.sroute
      // get data from server
      axios.get('/x/stats/' + shrinkRoute,
        axiosRequestConfig)
        .then((response) => {
          if (response.status === 200) {
            // success
            let analyticsBundle = response.data
            // set up charts
            vm.stats.data = {
              labels: ['6d ago', '5d ago', '4d ago', '3d ago', '2d ago', '1d ago', 'today'],
              datasets: [
                {
                  label: 'Daily Traffic (Visits)',
                  backgroundColor: '#f87979',
                  data: analyticsBundle.daySortedEvents.map(e => e.length)
                }
              ]
            }
            // console.log(analyticsBundle.daySortedEvents)
            var ctx = "trafficChart"
            var myLineChart = Chart.Line(ctx, {
              data: vm.stats.data,
              options: vm.stats.options
            });

          } else if (response.status === 400) {
            // bad request
            vm.completedAlert.content = '<h2>Error</h2><p>Please make sure the URL is valid.</p>'
            vm.$refs.completedDialog.open();
          } else {
            // wtf?
            vm.completedAlert.content = '<h2>Error</h2><p>Unrecognized response from server.</p>'
            vm.$refs.completedDialog.open();
          }
          vm.shrinkEnabled = true
        })
        .catch((error) => {
          if (error) {
            // console.log(error)
            vm.completedAlert.content = '<h2>Error</h2><p>Error communicating with server.</p>'
            vm.$refs.completedDialog.open();
          }
          vm.shrinkEnabled = true
        })
    }
  }
</script>

<style scoped>
#line-chart {
  height: 400px;
}
</style>