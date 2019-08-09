import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { DetailsComponent } from './expense-tracking/details/details.component';
import { ExpenseComponent } from './expense-tracking/expense/expense.component';


const routes: Routes = [
  { path: 'expenses', component: ExpenseComponent},
  { path: 'home', redirectTo: "/"},
  { path: 'about', component: AboutComponent},
  { path: 'expenses/:id', component: DetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
