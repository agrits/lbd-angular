import { Component, OnInit } from '@angular/core';
import { Expense } from './expense';
import {ExpenseService} from './expense.service'
@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent implements OnInit {
  expenses: Expense[] = [new Expense(1, "avc", 2)];
  public selected: Expense;
  constructor(private expenseService: ExpenseService) { }

  ngOnInit(){
    this.expenseService.getAll().subscribe(expenses => this.initExpenses(expenses))
  }

  initExpenses(expenses: Expense[]): void{
    console.log(expenses)
    this.expenses = expenses.map(expense => Expense.fromJsonObject(expense))
  }

}
