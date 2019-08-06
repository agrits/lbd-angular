import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpenseComponent } from './expense/expense.component';
import {FormsModule} from '@angular/forms'


@NgModule({
  declarations: [ExpenseComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ExpenseComponent
  ]
})
export class ExpenseTrackingModule { }
