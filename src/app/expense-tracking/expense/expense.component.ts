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
  public categories = []
  constructor(private expenseService: ExpenseService) { }

  ngOnInit() {
    this.expenseService.getExpenses().subscribe(expenses => this.expenses = expenses)
  }

}
