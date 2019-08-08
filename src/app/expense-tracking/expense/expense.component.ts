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
  public selectedExpenses;
  constructor(private expenseService: ExpenseService) { }

  ngOnInit() {
    this.expenseService.getExpenses().subscribe(expenses => this.expenses = expenses)
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
