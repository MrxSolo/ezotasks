import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Task1ItemsComponent } from './task1-items/task1-items.component';
import { Task2AtmComponent } from './task2-atm/task2-atm.component';


const routes: Routes = [
  { path: 'task1', component: Task1ItemsComponent },
  { path: 'task2', component: Task2AtmComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }