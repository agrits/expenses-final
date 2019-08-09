import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Expense } from '../expense/expense';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  constructor(private http: HttpClient) { }

  private baseUrl = "http://expense-db-json.herokuapp.com/expenses"

  public getExpense(id): Observable<Expense>{
    return this.http.get<Expense>(this.baseUrl+"/"+id).pipe(
      map(obj => Expense.fromJson(obj))
    )
  }

  public saveExpense(expense: Expense){
    return this.http.put<Expense>(this.baseUrl+"/"+expense.id, 
    {
      "description": expense.description,
      "amountSpent": expense.amountSpent,
      "category": expense.category
    })
  }

}
