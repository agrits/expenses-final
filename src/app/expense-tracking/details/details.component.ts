import { Component, OnInit } from '@angular/core';
import { Route, Router, ActivatedRoute, ParamMap } from '@angular/router';
import { DetailsService } from './details.service';
import { switchMap } from 'rxjs/operators';
import { Expense } from '../expense/expense';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  public expenseId;
  public saved = true
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.expenseId = this.route.snapshot.paramMap.get('id');
  }
}
