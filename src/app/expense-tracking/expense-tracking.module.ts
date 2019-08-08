import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpenseComponent } from './expense/expense.component';
import { DetailsComponent } from './details/details.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ClickOutsideModule } from 'ng-click-outside'


@NgModule({
  declarations: [ExpenseComponent, DetailsComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ClickOutsideModule
  ],
  exports: [
    ExpenseComponent,
    DetailsComponent
  ]
})
export class ExpenseTrackingModule { }
