import { Component, OnInit } from '@angular/core';
import { BlockinfoService } from '../blockinfo.service'

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

  floorinfo: any
  
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
  }

  submitmodal(){
    
    // this.blockinfo.sendblock(this.block_name).subscribe((d)=>{   
   
                     

    // },(error)=>{

    //       if(error.status==500){
    //         alert('Internal Server Error')
    //       }

    // })

    this.blockinfo.floorwiseinfo(this.block_name).subscribe((d)=>{

           console.log(d);

    },(error)=>{

           if(error.status==500){
             alert("Internal Server Error");
           }

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


}
