import { Component, OnInit } from '@angular/core';
import { Chart } from "node_modules/chart.js"
// import { read } from 'fs';


declare const $;

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css']
})
export class BarchartComponent implements OnInit {

  data1=[209, 245, 383, 403, 589, 692, 580]
  constructor() { }

  ngOnInit() {

    

    var chBar = document.getElementById("myChart");
    var chartData = {
      labels: ["blockA", "blockB", "blockC", "blockD", "blockE", "blockF", "blockG"],
      datasets: [{
        data: [589, 445, 483, 503, 689, 692, 634],
        backgroundColor:'#ff0000'
      },
      {
        data: this.data1,
        backgroundColor: '#ffbf00'
      },
      {
        data: [489, 135, 483, 290, 189, 603, 600],
        backgroundColor: '#00ff00'
      },
      {
        data: [639, 465, 493, 478, 589, 632, 674],
        backgroundColor: '#00ffff'
      }]
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
