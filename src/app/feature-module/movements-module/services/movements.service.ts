import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Movements } from '../models/movements.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovementsService {
private api = environment.apiBaseUrl;
  constructor(private http: HttpClient) { }


  public getMovements(): Observable<Movements[]> {
    return this.http.get<Movements[]>(`${this.api}/movements/all`);
  }
  public getMovementById(id: number): Observable<Movements> {
    return this.http.get<Movements>(`${this.api}/movements/find/${id}`);
  }
  public addMovement(movement: Movements): Observable<Movements> {
    return this.http.post<Movements>(`${this.api}/movements/add`, movement);
  }
  public updateMovement(movement: Movements): Observable<Movements> {
    return this.http.put<Movements>(`${this.api}/movements/update`, movement);
  }

  public deleteMovement(id: number): Observable<any> {
    return this.http.delete(`${this.api}/movements/delete/${id}`);
  }

}
