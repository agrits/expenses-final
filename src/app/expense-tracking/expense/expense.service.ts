import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { Expense } from './expense';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  private baseUrl = "/api/expenses"
  constructor(private http: HttpClient) {}

  public getExpenses(): Observable<Expense[]>{
    return this.http.get<Expense[]>(this.baseUrl).pipe(
      map(data => data.map(json => Expense.fromJson(json)))
    )
  }
}
