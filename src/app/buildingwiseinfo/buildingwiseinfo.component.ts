import { Component, OnInit } from '@angular/core';
import { BlockinfoService } from '../blockinfo.service'
import * as jspdf from 'jspdf'
import html2canvas from 'html2canvas'
import { Chart } from "node_modules/chart.js"
import { AllocationService } from '../allocation.service';


declare const $;

@Component({
  selector: 'app-buildingwiseinfo',
  templateUrl: './buildingwiseinfo.component.html',
  styleUrls: ['./buildingwiseinfo.component.css']
})
export class BuildingwiseinfoComponent implements OnInit {

  block_name: any
  floor = 0;
  rooms: any
  flag=0;


  empty: any
  full: any
  partial: any
  crfloor: any
  roominfloor: any
  bedinroom: any
  crroom: any

  floorwiseinfo: any
  student_details: any
  room_studentdetails: any

  constructor(private blockinfo: BlockinfoService, private allocate: AllocationService) { }

  ngOnInit() {

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


    // $(document).ready(function() {
    //   $('#example').DataTable();
    // });






    var ct = document.getElementById('chart');


    var myChart = new Chart(ct, {
      type: 'pie',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            // '#ff3333',
            // '#009900',
            // '#ff6633',

            // 'rgba(75, 192, 192, 0.2)',
            // 'rgba(153, 102, 255, 0.2)',
            // 'rgba(255, 159, 64, 0.2)'
            "#2ecc71",
            "#3498db",
            "#95a5a6",
            "#9b59b6",
            "#f1c40f",
            "#e74c3c"
            // "#34495e"
          ],

          borderWidth: 2,
        }]
      },
      options: {}
    });




  }

  submitmodal() {

    this.blockinfo.floorwiseinfo(this.block_name).subscribe((d) => {

      console.log(d);
      this.floorwiseinfo = d;

    }, (error) => {

      alert("no student found in that block");

    })

  }

  submitfloor() {



  }

  submitrooms() {

    this.blockinfo.roomwiseinfo(this.block_name, this.crfloor).subscribe((d) => {

      
      // this.roominfloor=d['roominfloor'];
      // this.bedinroom = d['bedinroom']
      
      // delete d['roominfloor'];
      // delete d['bedinroom']

      this.room_studentdetails = d;

      console.log(this.room_studentdetails);

  },(error) => {

    if (error.status == 500) {
      alert("Internal Server Error")
    }
    else {
      alert("No rooms found")
    }

  })  

  }


studentdetails(floorno: any){


  console.log(this.block_name, floorno);
  this.blockinfo.floorstudentdetails(this.block_name, floorno).subscribe((d) => {

    console.log(d);
    this.student_details = d;

    document.getElementById('detailsmodal').click();


  }, (error) => {


    if (error.status == 500) {
      alert("Internal Server Error")
    }
    else {
      alert("Students not found")
    }

  })

}

roomstudentdetails( room: any){


  console.log(this.crfloor,room);
  this.blockinfo.rooms_studentdetails(this.block_name, this.crfloor, room).subscribe((d) => {

    this.student_details = d;
    console.log(d);

    document.getElementById('detailsmodal').click();

  }, (error) => {

    if (error.status == 500) {
      alert("Internal Server Error")
    }
    else {
      alert("No student found")
    }

  })


}


convertpdf(){

  var element = document.getElementById("exampleModalPreview")

  html2canvas(element).then((canvas) => {

    //  console.log(canvas);

    var imgdata = canvas.toDataURL('image/png')

    var doc = new jspdf();


    var imgheight = canvas.height * 208 / canvas.width;

    doc.addImage(imgdata, 0, 0, 208, imgheight)

    doc.save('data.pdf')

  })

}

callchart(){
    

  this.flag=1;
  console.log("akfls")
  this.blockinfo.blockchart(this.block_name).subscribe((d)=>{
    
    console.log(this.block_name);
      this.empty=d['empty']
      this.partial=d['partial']
      this.full=d['full']


  },(error)=>{
       
  })


  setTimeout(() => {

  var ctx = document.getElementById('myChart');

  var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ['Red', 'Blue', 'Yellow'],
      datasets: [{
        label: '# of Votes',
        data: [this.full, this.partial, this.empty],
        backgroundColor: [
          '#ff3333',
          '#009900',
          '#ff6633',

          // 'rgba(75, 192, 192, 0.2)',
          // 'rgba(153, 102, 255, 0.2)',
          // 'rgba(255, 159, 64, 0.2)'
          // "#2ecc71",
          // "#3498db",
          // "#95a5a6",
          // "#9b59b6",
          "#f1c40f",
          "#e74c3c",
          "#34495e"
        ],
        borderColor: [

        ],
        borderWidth: 2,
      }]
    },
    options: {}
  });
},1000);

}

}
