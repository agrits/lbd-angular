import { Component, OnInit } from '@angular/core';
import { Expense } from './expense';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent implements OnInit {
  expenses: Expense[] = [];

  constructor() { }

  ngOnInit(){
    // this.expenses = [new Expense(0, "First", 100),
    //                           new Expense(1, "Second", 300),
    //                           new Expense(2, "Third", 200)];
    this.expenses.push(new Expense(0, "First", 100));
    this.expenses.push(new Expense(1, "Second", 200));
    this.expenses.push(new Expense(2, "Third", 300));
  }
}
