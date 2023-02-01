import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoDataService } from '../service/data/todo-data.service';

@Component({
  selector: 'app-listto-dos',
  templateUrl: './listto-dos.component.html',
  styleUrls: ['./listto-dos.component.css']
})
export class ListtoDosComponent implements OnInit {

// todo={id:1,description:'Learn to java'} // single object

// todos=[
//   {id:1,description:'Learn to java'},
//   {id:2,description:'Learn to HTML'},
//   {id:3,description:'Learn to Angular'}
// ]
todos:Todo[]=[];
constructor(private todoService:TodoDataService,private router:Router ){}
ngOnInit(): void {
  // throw new Error('Method not implemented.');
 this.todoService.getAllTodo().subscribe(
   response=> {
     this.todos=response
     console.log(response)
   }
 )
 }
 
 // todos=[
 //   new Todos(1,'Learn'),
 //   new Todos(2,'Angular learning')
 // ]
   
 todoDelete(id:number){
   console.log("inside tododelete");
   this.todoService.todoDelete(id).subscribe(
     response=> {
       this.todos=response
       console.log(response)
     }
   )
}


//update
todoUpdate(id:number){
  //navi to todo
  this.router.navigate(['todo',id])
}

addTodo(){
  this.router.navigate(['todo',-1])
}

   
  }
export class Todo{
  constructor(
    public id:number,
    public username:string,
    public description:string,
    public done:boolean,
    public targetDate:Date
    
  ){}
}
