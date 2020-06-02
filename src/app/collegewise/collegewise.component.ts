import { Component, OnInit } from '@angular/core';
import { CollegewiseService } from '../collegewise.service';
import * as jspdf from 'jspdf'
import html2canvas from 'html2canvas'

declare const  $;

@Component({
  selector: 'app-collegewise',
  templateUrl: './collegewise.component.html',
  styleUrls: ['./collegewise.component.css']
})
export class CollegewiseComponent implements OnInit {


  block_name: any
  collegenames: any
  cname: any
  student_details: any

  constructor(private collegewise: CollegewiseService) { }

  ngOnInit() {


    if(localStorage.getItem('auth-token')==null){
      return;
    }
   document.getElementById("modalpop").click();

   $(document).ready(() => {

    $("#bname").change(() => {

      
      this.collegewise.getcolleges(this.block_name).subscribe((d) => {

        this.collegenames = d;
        console.log(d);

      }, (error) => {

         if(error['status']==500){
           alert("Internal Server Error")
         }

      })

    })

  })


  }

  submitmodal(){
      
     this.collegewise.getstudents(this.block_name,this.cname).subscribe((d)=>{

      this.student_details=d;

     },(error)=>{
       if(error.status==500){
         alert("Internal Server Error")
       }
     }) 

  }
  convertpdf(){

    var element = document.getElementById("student")
  
    html2canvas(element).then((canvas) => {
  
      //  console.log(canvas);
  
      var imgdata = canvas.toDataURL('image/png')
  
      var doc = new jspdf();
  
  
      var imgheight = canvas.height * 208 / canvas.width;
  
      doc.addImage(imgdata, 0, 0, 208, imgheight)
  
      doc.save('data.pdf')
  
    })
  
  }

}
