import { Component, OnInit } from '@angular/core';
import { BlockinfoService } from '../blockinfo.service'
import * as jspdf from 'jspdf'
import html2canvas from 'html2canvas'
import { Chart } from "node_modules/chart.js"


declare const $;

@Component({
  selector: 'app-buildingwiseinfo',
  templateUrl: './buildingwiseinfo.component.html',
  styleUrls: ['./buildingwiseinfo.component.css']
})
export class BuildingwiseinfoComponent implements OnInit {

  block_name: any
  floor=0;
  crfloor: any
  crroom: any

  floorwiseinfo: any
  
  constructor(private blockinfo: BlockinfoService) { }

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

      document.getElementById('modalpop').click();






      var ctx = document.getElementById('myChart');


      var myChart = new Chart(ctx, {
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
                borderColor: [
                    
                ],
                borderWidth: 2,
            }]
        },
        options: {}
    });







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

  submitmodal(){
    
    this.blockinfo.floorwiseinfo(this.block_name).subscribe((d)=>{

           console.log(d);
           this.floorwiseinfo=d;

    },(error)=>{

           alert("no student found in that block");

    })



  }

  submitfloor(){



  }
  
  submitrooms(){
      
        

  }




  studentdetails(){

    // console.log("heljlkjlkjlkjlkjkljlkj")
    // debugger;
    document.getElementById('detailsmodal').click();
    // $("modify").click(()=>{

    // })

  }

  convertpdf(){

    var element = document.getElementById("exampleModalPreview")

    html2canvas(element).then((canvas)=>{

      //  console.log(canvas);

      var imgdata = canvas.toDataURL('image/png')

      var doc = new jspdf();


      var imgheight=canvas.height * 208 /canvas.width;

      doc.addImage(imgdata,0,0,208,imgheight)

      doc.save('data.pdf')

    })

  }

}
