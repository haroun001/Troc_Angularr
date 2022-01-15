import { User } from './../models/user.model';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseURL = "http://localhost:8484/Troc/rest/user";
  private baseURL1 = "http://localhost:8484/Troc/rest/user/loginp";
  islogin = false;
  admin = false;
  suser = false;

  constructor(private httpClient: HttpClient) { }

  Login(email:String ): Observable<Object>{
    return this.httpClient.get(`${this.baseURL1}/${email}`);
  }
  getEmployeesList(): Observable<User[]>{
    return this.httpClient.get<User[]>(`${this.baseURL}`);
  }

  createEmployee(user: User): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, user);
  }
  

  getEmployeeById(id: number): Observable<User>{
    return this.httpClient.get<User>(`${this.baseURL}/${id}`);
  }
  getEmployeeByEmail(email: String): Observable<User>{
    return this.httpClient.get<User>(`${this.baseURL}/${email}`);
  }
  

  updateEmployee(email: String, user: User): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${email}`, user);
  }

  deleteEmployee(email: String): Observable<any>{
    return this.httpClient.delete(`${this.baseURL}/${email}`);
  }
}
