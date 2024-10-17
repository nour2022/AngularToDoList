import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, 
    MatButtonModule,
     FormsModule,
    HeaderComponent,
  FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'toDoList';
  image =
    'https://static.vecteezy.com/system/resources/thumbnails/011/385/199/small/to-do-list-flat-icon-free-vector.jpg';

  Tasks: string[] = [];
  newTask: string = '';
  isAvailable: boolean = false;
  AddTask() {
    if (this.newTask.trim() !== '') {
      this.Tasks.push(this.newTask);
      this.newTask = '';
      this.isAvailable = true;
    }
  }
  // EditTask(index: number) {
  //   let updatedTask = prompt('Edit Task', this.Tasks[index]);
  //   if (updatedTask !== null) {
  //     this.Tasks[index] = updatedTask.trim();
  //   }
  // }
  EditTask(index:number, newTaskEdit:string): void | string {
    const trimmedTask = newTaskEdit.trim();
    if(trimmedTask !== ""){
      this.Tasks[index] = trimmedTask;
    } else{
      newTaskEdit = this.Tasks[index];
      return this.newTask = newTaskEdit;
    }
    this.newTask = "";
  }
  RemoveTask(index: number) {
    this.Tasks.splice(index, 1);
    if (this.Tasks.length < 1) this.isAvailable = false;
  }
}
