import { Component, OnInit } from '@angular/core';
import { ExpenseService } from './expense.service';
import { Expense } from './expense';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent implements OnInit {
  public expenses: Expense[] = []
  public selectedCategories = []
  public categories = ["Household", "Commute", "Other"]
  public selectedExpense;
  public deleting = false;
  public duplicating = false;
  public formExpense: Expense = new Expense(null, "", 0, "");
  public saving = false;
  constructor(private expenseService: ExpenseService) { }

  ngOnInit() {
    this.updateExpenses()
  }

  
  public updateExpenses(onDone: () => void = function(){}){
      this.expenseService.getExpenses().subscribe(expenses => 
        {
          this.expenses = expenses
          onDone()
        })
      
  }

  public addFromForm(){
    this.saving = true
    this.expenseService.addExpense(this.formExpense.description, 
                                  this.formExpense.amountSpent,
                                  this.formExpense.category).subscribe(
                                    obj => this.updateExpenses(() => this.saving=false)
                                  )
  }
  public deleteSelected(){
    this.deleting = true;
    this.expenseService.deleteExpense(this.selectedExpense.id).subscribe( 
      obj => {
              this.updateExpenses(() => {
                this.deleting=false
                this.selectedExpense = null
              })
              ;}
    )
    
  }
  public duplicateSelected(){
    this.duplicating = true
    this.expenseService.addExpense(this.selectedExpense.description, 
                                  this.selectedExpense.amountSpent,
                                  this.selectedExpense.category).subscribe(
                                    obj => this.updateExpenses(() => this.duplicating=false)
                                  )
  }

  public toggleSelection(category){
    console.log("Selected: "+category)
    if(this.selectedCategories.includes(category)){
      this.selectedCategories.splice(this.selectedCategories.indexOf(category), 1)
    }
    else{
      this.selectedCategories.push(category)
    }
  }

}
