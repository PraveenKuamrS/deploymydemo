import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../listto-dos/listto-dos.component';
import { TodoDataService } from '../service/data/todo-data.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit{
  id:number;
  todo:Todo
  //Inject an object of DataService and ActivatedRoute
  

  //Inject an object of DataService and ActivatedRoute
  constructor(private todoService:TodoDataService,private route:ActivatedRoute
    ,private router:Router){}
  ngOnInit(): void {
   this.id=this.route.snapshot.params['id']; //to take url id 
   this.todo=new Todo(this.id,'','',false,new Date());
   if(this.id!=-1){
   this.todoService.retriveTodo(this.id).subscribe(
    data=>this.todo=data);
  }
}
//add new 
  saveTodo(){
console.log("Inside save todo"+this.id)
   if(this.id==-1){
    //call insert or add
    this.todoService.createTodo(this.todo).subscribe(
      data=>{
      
      console.log(data)
      this.router.navigate(['todo'])
      }
     )
    }
  
  
  else{ //update 
    console.log("inside update")
   this.todoService.updateTodo(this.id,this.todo).subscribe(
    data=>{
    
    console.log(data)
    this.router.navigate(['todo'])
    }
   )
  }
}

}
