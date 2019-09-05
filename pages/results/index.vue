<template>
  <div class="item-results-page container">
    <div class="panel-section page-header">
      <div class="title-wrapper">
        <img src="~assets/icons/game-logo.svg" />
        <h1>World of Warcraft</h1>
      </div>
      <div class="button-wrapper">
        <button class="btn btn-primary">Copy Address</button>
      </div>
    </div>
    <div class="row middle-item mt-4">
      <div class="col-md-5 item-title-image">
        <div class="panel-section">
          <div class="panel-title">Kingston Sword</div>
          <img src="~assets/images/sword.png" />
        </div>
      </div>
      <div class="col-md-7 item-description">
        <div class="item-description-item panel-section">
          <span class="item-description-title">Item Address:</span>
          <span class="item-description-info">XCSds3243Dxsx3252edwd323</span>
          <span class="item-description-action"><i class="fa fa-copy" /></span>
        </div>
        <div class="item-description-item panel-section">
          <span class="item-description-title">Item Owners:</span>
          <span class="item-description-info">55 people own this item</span>
          <span class="item-description-action"><button class="btn btn-primary">View list</button></span>
        </div>
        <div class="item-description-item panel-section">
          <span class="item-description-title">Item Value:</span>
          <span class="item-description-info">$535.00</span>
          <span class="item-description-action"><button class="btn btn-primary">View Marketplace</button></span>
        </div>
      </div>
    </div>
    <div class="row mt-4 chart-area">
      <div class="col-md-6">
        <div class="panel-section">
          <div class="panel-title">ITEM TOTAL SUPPLY: <span>100K</span></div>
          <highcharts :options="chartOptions1"></highcharts>
        </div>
      </div>
      <div class="col-md-6">
        <div class="panel-section">
          <div class="panel-title">24 HOUR TRADES</div>
          <div class="panel-content line-chart">
            <highcharts :options="chartOptions2"></highcharts>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from '~/components/navigation/Footer.vue'

export default {
  layout: 'main',
  components: {
    Footer
  },

  head() {
    return {
      title: `Stardust - Item Results`
    }
  },

  data: () => {
    return {
      chartOptions1: {
        chart: {
          backgroundColor: null,
          plotBackgroundColor: 'transparent',
          plotBorderWidth: null,
          plotShadow: false,
          type: 'pie'
        },
        title: {
          text: ''
        },
        tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
              enabled: true,
              format: '<b>{point.name}</b>: {point.percentage:.1f} %',
              connectorColor: 'silver'
            }
          }
        },
        credits: {
          enabled: false
        },
        series: [
          {
            type: 'pie',
            innerSize: '80%',
            name: 'Share',
            data: [
              { name: '50K (discovered)', y: 50, color: '#8457ff' },
              { name: '50K (not discovered)', y: 50, color: '#57a0ff' }
            ]
          }
        ]
      },
      chartOptions2: {
        chart: {
          backgroundColor: null,
          type: 'column',
          height: '300px'
        },
        title: {
          text: ''
        },
        credits: {
          enabled: false
        },
        xAxis: {
          categories: [
            '12AM',
            '3AM',
            '6AM',
            '9AM',
            '12PM',
            '3PM',
            '6PM',
            '9PM'
          ],
          minorTickColor: '#fffff',
          tickColor: '#ffffff',
          labels: {
            style: {
              color: '#ffffff'
            }
          },
          crosshair: false
        },
        legend: {
          enabled: false
        },
        yAxis: {
          min: 0,
          gridLineWidth: 0,
          minorGridLineWidth: 0,
          tickColor: '#ffffff',
          labels: {
            style: {
              color: '#ffffff'
            }
          },
          title: {
            text: ''
          }
        },
        tooltip: {
          // headerFormat:
          //   '<span style="font-size:10px">{point.key}</span><table>',
          pointFormat:
            '<tr><td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
          footerFormat: '</table>',
          shared: true,
          useHTML: true
        },
        plotOptions: {
          column: {
            pointPadding: 0.2,
            borderWidth: 0
          }
        },
        series: [
          {
            name: '',
            data: [160, 100, 296, 340, 280, 450, 80, 250]
          }
        ]
      }
    }
  }
}
</script>
