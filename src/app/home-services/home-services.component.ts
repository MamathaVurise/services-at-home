import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';
import { ServiceDetailService } from '../shared/service-detail.service';
import { ServiceDetail } from '../shared/service-detail.model';

@Component({
  selector: 'app-home-services',
  templateUrl: './home-services.component.html',
  styleUrls: ['./home-services.component.css']
})
export class HomeServicesComponent implements OnInit {

  constructor(public service:ServiceDetailService) { }

  ngOnInit(): void {
  }

  Timings=[
    {id:1,name:'10-11 AM'},
    {id:2,name:'11-12 AM'},
    {id:3,name:'12-1 PM'},
    {id:4,name:'1-2 PM'},
    {id:5,name:'2-3 PM'},
    {id:6,name:'3-4 PM'},
    {id:7,name:'4-5 PM'},
    {id:8,name:'5-6 PM'},
    {id:9,name:'6-7 PM'},
    {id:10,name:'7-8 PM'},
    {id:11,name:'8-9 PM'},

    
  ];

  applianceName=[
    {id:1,name:'Television'},
    {id:2,name:'Washing Machine'},
    {id:3,name:'Refridgerator'},
    {id:4,name:'Gas Stove'},
    {id:5,name:'Mixer'},
    {id:6,name:'Mobiles'},
    {id:7,name:'Laptops'},
    {id:8,name:'Accessories'},
    {id:9,name:'Hair Care'},
    {id:10,name:'Facial'},
    {id:11,name:'Plumbing'},
    {id:12,name:'Carpentery'},
  ];


  OnSubmit(form:NgForm){
    this.service.addEmployee().subscribe(
      res=>{
        this.resetForm(form);
        console.log("input")
      },
      err=>{ console.log(err);}
    );
  }

  resetForm(form:NgForm){
    form.form.reset();
    this.service.formData=new ServiceDetail();
    alert('Booked Successfully');
  }
 
}
