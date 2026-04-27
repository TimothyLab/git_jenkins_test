import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Matiere } from '../model/matiere';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MatiereService {
  

  private apiUrl = '/matiere';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Matiere[]> {
    return this.http.get<Matiere[]>(this.apiUrl);
  }

  add(matiere: Matiere):  Observable<Matiere>{
    return this.http.post<Matiere>(this.apiUrl, matiere);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }





}
