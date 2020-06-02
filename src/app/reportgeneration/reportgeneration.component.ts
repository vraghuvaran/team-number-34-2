import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { AllocationService } from '../allocation.service';
import * as jspdf from 'jspdf'
import html2canvas from 'html2canvas'
import { ReportService } from '../report.service';

@Component({
  selector: 'app-reportgeneration',
  templateUrl: './reportgeneration.component.html',
  styleUrls: ['./reportgeneration.component.css']
})
export class ReportgenerationComponent implements OnInit {


  buildings: any
  bname: any
  student_details: any
  constructor(private router: Router,private allocate :AllocationService,private report: ReportService) { }

  ngOnInit() {

    if(localStorage.getItem('auth-token')==null){
      this.router.navigate(['/login'])
    }


    document.getElementById('modalpop').click();

    this.allocate.getbuildings().subscribe((d) => {

      this.buildings = d;
      console.log(d);

    }, (error) => {

      if (error['status'] == 401) {
       
        alert("There are no blocks Registered")
       
      }
      else if (error['status'] == 400) {
        
        alert("No Empty Block Exists")
        
      }
      else {
        alert("Internal Server Error")
      }

    })

  }
  submitmodal(){

    this.report.getstudents(this.bname).subscribe((d)=>{

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
