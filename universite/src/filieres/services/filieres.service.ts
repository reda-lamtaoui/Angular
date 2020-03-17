import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Filieres } from 'src/shared/models/filieres';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class FilieresService {

  constructor(private http: HttpClient) { }

  get(): Observable<Filieres[]> {
      return this.http.get<Filieres[]>('http://localhost:3000/filieres');
  }
  post(filiere: Filieres) {
    return this.http.post('http://localhost:3000/filieres', filiere);
  }
  delete(id: number) {
    return this.http.delete('http://localhost:3000/filieres/' + id);
  }
  update(filiere: Filieres): Observable<any> {
    const httpotions = { headers: new HttpHeaders({'Content-Type': 'application/json'})};
    return this.http.put('http://localhost:3000/filieres/' + filiere.id, filiere, httpotions).pipe();
  }
}
