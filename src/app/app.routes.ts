import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { TodoComponent } from './Components/todo/todo.component';
import { TodoDetailsComponent } from './Components/todo-details/todo-details.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';

export const routes: Routes = [

    {path:'',redirectTo:'/todo',pathMatch:'full'},
    {path:'home',component:HomeComponent,title:'Home'},
    {path:'todo',component:TodoComponent,title:'ToDo'},
    {path:'todo/:id',component:TodoDetailsComponent,title:'ToDo Details'},
    {path:'contact-us',component:ContactUsComponent,title:'Contact Us'},
    {path:'about-us',component:AboutUsComponent,title:'About Us'},
    {path:'**',component:NotFoundComponent,title:'Not Found'}
];
