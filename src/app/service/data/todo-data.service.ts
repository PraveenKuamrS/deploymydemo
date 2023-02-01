import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from 'src/app/listto-dos/listto-dos.component';


@Injectable({
  providedIn: 'root'
})
export class TodoDataService 
{

  constructor(private http:HttpClient
    ) { }
  // getAllTodo()
  // {
  //   return this.http.get<Todo[]>(`http://localhost:8889/getAllTodo`);
  // }
  getAllTodo()
  {
    return this.http.get<Todo[]>(` http://localhost:8290/findallproducts`);
  }

 
  todoDelete(id:number)
  {
    return this.http.delete<Todo[]>(`http://localhost:8889/deletebyid/${id}`);
  }

  //find by id
  retriveTodo(id:number){
    return this.http.get<Todo>(`http://localhost:8889/findbyid/${id}`); 
  }
  
  updateTodo(id:number, todo:Todo){
    return this.http.put<Todo>(`http://localhost:8889/updatetodo/${id}`,todo); 
  }
  
  createTodo(todo:Todo){
    return this.http.post<Todo>(`http://localhost:8889/addTodo`,todo); 
  }
  

}