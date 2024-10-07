import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private urlApi = 'http://localhost:5025/api/Personas';


  constructor(private http: HttpClient) { }

  public getData(): Observable<any>{
    return this.http.get<any>(this.urlApi);
  }

  getPersona(id: number): Observable<any> {
    return this.http.get<any>(`${this.urlApi}/${id}`);
  }

  addPersona(persona: any): Observable<any> {
    return this.http.post<any>(this.urlApi, persona);
  }

  updatePersona(id: number, persona: any): Observable<any> {
    return this.http.put<any>(`${this.urlApi}/${id}`, persona);
  }

  deletePersona(id: number): Observable<any> {
    return this.http.delete<any>(`${this.urlApi}/${id}`);
  }
}
