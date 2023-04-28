import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  constructor(private http: HttpClient) { }
  
  private apiUrl = 'http://localhost:8000/api'; // Reemplaza con la URL de tu API de Laravel

  getCursos(): Observable<any> {
    return this.http.get(`${this.apiUrl}/cursos`);
  }
  
  getCurso(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/cursos/${id}`);
  }
  
  createCurso(curso: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/cursos`, curso);
  }
  
  updateCurso(id: number, curso: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/cursos/${id}`, curso);
  }
  
  deleteCurso(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/cursos/${id}`);
  }
  
}
