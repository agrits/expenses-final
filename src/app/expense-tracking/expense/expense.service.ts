import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { Expense } from './expense';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  private baseUrl = "https://expense-db-json.herokuapp.com/expenses"
  constructor(private http: HttpClient) {}

  public getExpenses(): Observable<Expense[]>{
    return this.http.get<Expense[]>(this.baseUrl).pipe(
      map(data => data.map(json => Expense.fromJson(json)))
    )
  }

  public deleteExpense(id: number){
    return this.http.delete(this.baseUrl+"/"+id)
  }

  public addExpense(description, amountSpent, category): Observable<Expense>{
    return this.http.post<Expense>(this.baseUrl, {"description": description, 
                                        "amountSpent": amountSpent,
                                        "category": category}).pipe(
                                          map(obj => Expense.fromJson(obj))
                                        )
  }
}
