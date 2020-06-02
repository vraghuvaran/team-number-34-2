import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { AllocationService } from '../allocation.service'
import { Chart } from "node_modules/chart.js"
import { ChartService } from '../chart.service';


declare const $;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css', './styles.css']
})
export class DashboardComponent implements OnInit {


  bname = []
  showbuildings: any
  cdata: any


  capacity = []
  current = []

  constructor(private router: Router, private allocate: AllocationService, private chart: ChartService) { }

  ngOnInit() {

    if (localStorage.getItem("auth-token") == null) {
      this.router.navigate(['/login']);
    }

    var fullHeight = function () {

      $('.js-fullheight').css('height', $(window).height());
      $(window).resize(function () {
        $('.js-fullheight').css('height', $(window).height());
      });

    };
    fullHeight();

    $('#sidebarCollapse').on('click', function () {
      $('#sidebar').toggleClass('active');
    });


    this.allocate.showbuildings().subscribe((d) => {


      this.showbuildings = d;
      console.log(d);

    }, (error) => {

      if (error['status'] == 500) {
        alert('Internal Server Error')
      }

    })


    this.chart.call().subscribe((d) => {

      console.log(d);

      this.bname = d['blockName']
      this.current = d['currentNoOfStudent']
      this.capacity = d['totalNoOfStudent']


      // console.log('lskdfjksjdfk',this.bname);


    }, (error) => {


    })
    setTimeout(() => {
      var chBar = document.getElementById("myChart");

      var chartData = {
        labels: this.bname,
        datasets: [{
          data: this.capacity,
          backgroundColor: '#ff0000'
        },
        {
          data: this.current,
          backgroundColor: '#ffbf00'
        }
        ]
      };
      if (chBar) {
        new Chart(chBar, {
          type: 'bar',
          data: chartData,
          options: {
            scales: {
              xAxes: [{
                barPercentage: 0.4,
                categoryPercentage: 0.5
              }],
              yAxes: [{
                ticks: {
                  beginAtZero: false
                }
              }]
            },
            legend: {
              display: false
            }
          }
        });
      }
    }, 1000);


  }


}
