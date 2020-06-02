import { Component, OnInit } from '@angular/core';
import { Chart } from "node_modules/chart.js"
import { ChartService } from '../chart.service';
// import { read } from 'fs';


declare const $;

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css']
})
export class BarchartComponent implements OnInit {

  cdata: any

  bname: any
  capacity: any
  current: any
  constructor(private chart: ChartService) { }

  ngOnInit() {
  
    this.chart.call().subscribe((d)=>{

      this.cdata =d;
      this.bname=d['blockName']
      this.current=d['currentNoOfStudent']
      this.capacity=d['totalNoOfStudent']


      console.log('lskdfjksjdfk',this.bname);


    },(error)=>{

    })

    var chBar = document.getElementById("myChart");

    var chartData = {
      labels: this.bname,
      datasets: [{
        data: this.capacity,
        backgroundColor:'#ff0000'
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

  }

}
