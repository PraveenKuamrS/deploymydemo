//package
//import
import { Component, OnInit } from '@angular/core';

//decorator  same called annotations in java
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// public class 
//typescript
export class AppComponent implements OnInit{
  title = 'Details';
  message="Helo pk"
  // in java void init()
  // in ts like this
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
 constructor(){}
}
