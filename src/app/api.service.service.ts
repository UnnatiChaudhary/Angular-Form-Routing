import { Injectable } from '@angular/core';
import { formModel } from '../models/form.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  private apiUrl = 'http://localhost:3000/user';
  constructor(private http:HttpClient) { }

  postDataToServer(data: formModel[]): Observable<any> {
    const endpoint = `${this.apiUrl}`;
    return this.http.post<any>(endpoint, { data });
  }

  getDataFromServer():Observable<any>{
     return this.http.get(`${this.apiUrl}`);
  }
}
