import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpenseComponent } from './expense/expense.component';
import { DetailsComponent } from './details/details.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ExpenseComponent, DetailsComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ExpenseComponent,
    DetailsComponent
  ]
})
export class ExpenseTrackingModule { }
