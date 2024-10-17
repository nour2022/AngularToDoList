import { Component, OnInit } from '@angular/core';
import { Todo } from '../../Models/todo';
import { TodoService } from '../../Services/todo.service';
import { Title } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    RouterModule
  ],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent implements OnInit{
todos : Todo[] = [] ;
newTodo : Todo={} as Todo;
constructor(private todoService: TodoService){
  
}
  ngOnInit(): void {
   this.getToDos();
  }
  getToDos() {
   this.todoService.getToDos().subscribe(x=>{
    this.todos = x;
   })
  }
  CreateTodo(): void {
    const createdTodo = {id : this.newTodo.id, 
                        title : this.newTodo.title,
                        isCompleted : false
    }
    this.todoService.createTodo(createdTodo).subscribe(todo=>{
      this.todos.push(createdTodo);
    });
    this.newTodo.title = "";
  }
  Delete(id:string): void
{
  this.todoService.deleteTodo(id).subscribe(() =>{
    this.todos = this.todos.filter(t=>id !== t.id);
  });

  
}
done(id: number, todo: Todo): void {
  // Create a copy of the todo object to avoid direct mutation
  todo.isCompleted = true;
  // Call the service to update the todo
  this.todoService.updateTodo(todo).subscribe(
    () => {
     
      this.todos[id] = todo;
    }
  );
}

}
