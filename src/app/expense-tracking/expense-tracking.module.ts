import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpenseComponent } from './expense/expense.component';
import { DetailsComponent } from './details/details.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClickOutsideModule } from 'ng-click-outside';
import { DescriptionAndAmountPipe } from './expense/description-and-amount.pipe';
import { ExpenseEditorComponent } from './expense/expense-editor/expense-editor.component'


@NgModule({
  declarations: [ExpenseComponent, DetailsComponent, DescriptionAndAmountPipe, ExpenseEditorComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ClickOutsideModule,
    ReactiveFormsModule
  ],
  exports: [
    ExpenseComponent,
    DetailsComponent,
    ExpenseEditorComponent
  ]
})
export class ExpenseTrackingModule { }
