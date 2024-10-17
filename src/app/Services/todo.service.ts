import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../Models/todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private apiUrl = 'http://localhost:3000/todos';
  constructor(private httpClient: HttpClient) {}
  getToDos(): Observable<Todo[]> {
    return this.httpClient.get<Todo[]>(this.apiUrl);
  }
  getById(id: string): Observable<Todo> {
    const url = `${this.apiUrl}/${id}`;
    return this.httpClient.get<Todo>(url);
  }
  createTodo(todo: Todo): Observable<Todo> {
    return this.httpClient.post<Todo>(this.apiUrl, JSON.stringify(todo));
  }
  updateTodo(todo: Todo): Observable<Todo> {
    const url = `${this.apiUrl}/${todo.id}`;
    return this.httpClient.put<Todo>(url,todo);
  }
  deleteTodo(id:string): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.httpClient.delete<void>(url)
  }
}
