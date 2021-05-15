import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Dots } from '../models/dots.model';

@Injectable({
  providedIn: 'root'
})
export class DotsService {

private api = environment.apiBaseUrl;
  constructor(private http: HttpClient) { }


  public getDots(): Observable<Dots[]> {
   return this.http.get<Dots[]>(`${this.api}/dots/all`);
  }

  public getDotById(id: number): Observable<Dots> {
    return this.http.get<Dots>(`${this.api}/dots/find/${id}`);
  }

  public addDot(dot: Dots): Observable<Dots> {
    return this.http.post<Dots>(`${this.api}/dots/add`, dot);
  }

  public updateDot(dot: Dots): Observable<Dots> {
    return this.http.put<Dots>(`${this.api}/dots/update`, dot);
  }

  public deleteDot(id: number): Observable<any> {
    return this.http.delete<any>(`${this.api}/dots/delete/${id}`);
  }


}
