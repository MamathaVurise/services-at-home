import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  collapsed = true;
  constructor() { }

  ngOnInit(): void {
    console.log(1);
    console.log(2);
    setTimeout(function(){console.log(3)}, 0); 
    console.log(4);
  }

}
