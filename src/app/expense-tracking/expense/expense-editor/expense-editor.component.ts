import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DetailsService } from '../../details/details.service';
import { Expense } from '../expense';

@Component({
  selector: 'app-expense-editor',
  templateUrl: './expense-editor.component.html',
  styleUrls: ['./expense-editor.component.css']
})
export class ExpenseEditorComponent implements OnInit{
  
  public expenseForm: FormGroup;
  public expense: Expense;
  public saving = false;
  @Input() expenseId;
  constructor(private fb: FormBuilder, private detailsService: DetailsService){

  }
  public categories = ["Household", "Commute", "Other"]
  
  

  saveExpense(){
    this.saving = true
    this.detailsService.saveExpense(
      new Expense(
        this.expense.id,
        this.expenseForm.get("description").value,
        this.expenseForm.get("amountSpent").value,
        this.expenseForm.get("category").value
      )
    ).subscribe(obj =>
      this.saving = false)
  }
  ngOnInit(){
    this.detailsService.getExpense(this.expenseId).subscribe(expense => {
      this.expense = expense;
      this.expenseForm = this.fb.group({
        description: [this.expense.description, Validators.required],
        amountSpent: [this.expense.amountSpent, Validators.required],
        category: [this.expense.category, Validators.required]
      })
      }
    )
    
  }

  

}
