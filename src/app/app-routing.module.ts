import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExpenseComponent } from './expense-tracking/expense/expense.component';
import { AppComponent } from './app.component';
import { DetailsComponent } from './expense-tracking/details/details.component';


const routes: Routes = [
  { path: 'expenses', component: ExpenseComponent},
  { path: 'home', redirectTo: "/"},
  { path: 'expenses/:id', component: DetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
