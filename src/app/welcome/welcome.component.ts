import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit{
// name="Shiva B"
// age=17
// mail="si123@gmail.com"
name='';

constructor(private route:ActivatedRoute){}

  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  this.name=this.route.snapshot.params['name'];
  
  }


}
