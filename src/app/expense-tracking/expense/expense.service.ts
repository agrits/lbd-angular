import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Expense} from './expense'
@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  url = "http://localhost:3000"
  constructor(private http: HttpClient) { }
  
  getAll(): Observable<Expense[]>{
    return this.http.get<Expense[]>(this.url+'/expenses')
  }
}
