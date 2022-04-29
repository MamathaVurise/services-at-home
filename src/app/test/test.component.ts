import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  text="ABC";
  button:any;
  
  changeColor(){
    this.text;
    alert("Color has changed to red");
  }

  public counter : number = 0;

  increase(){
    // this.counter += 1;
    this.counter=this.counter>10 ?0:this.counter+1
  }

  toggle = true;
  status = "Enable";
  isActive=false;

  enableDisableRule() {
    this.toggle = !this.toggle;
    this.status = this.toggle ? "Enable" : "Disable";
  }
}


