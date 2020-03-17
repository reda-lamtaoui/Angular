import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Etudiants } from 'src/shared/models/etudiants';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class EtudiantsService {

  constructor(private http: HttpClient) { }

  get(id: string): Observable<Etudiants[]> {
      return this.http.get<Etudiants[]>('http://localhost:3000/etudiants?filiereId=' + id);
  }
  post(etudiant: Etudiants) {
    return this.http.post('http://localhost:3000/etudiants', etudiant);
  }
  delete(id: number) {
    return this.http.delete('http://localhost:3000/etudiants/' + id);
  }
  update(etudiant: Etudiants): Observable<any> {
    const httpotions = { headers: new HttpHeaders({'Content-Type': 'application/json'})};
    return this.http.put('http://localhost:3000/etudiants/' + etudiant.id, etudiant, httpotions).pipe();
  }
}
