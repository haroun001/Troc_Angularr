import { Annonce } from 'app/models/annonce.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

import { User } from 'app/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AnnonceeService {

  private baseURL = "http://localhost:8484/Troc/rest/article";

  constructor(private httpClient: HttpClient) { }

  getEmployeesList(): Observable<Annonce[]>{
    return this.httpClient.get<Annonce[]>(`${this.baseURL}`);
  }

  createEmployee(annonce: Annonce): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, annonce);
  }

  getEmployeeById(id: number): Observable<Annonce>{
    return this.httpClient.get<Annonce>(`${this.baseURL}/${id}`);
  }

  updateEmployee(id: number, annonce: Annonce): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, annonce);
  }

  deleteEmployee(id: number): Observable<any>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
