import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Sessions } from '../models/sessions.model';

@Injectable({
  providedIn: 'root'
})
export class SessionsService {

  private api = environment.apiBaseUrl;
  constructor(private http: HttpClient) { }

  public getSessions(): Observable<Sessions[]> {
    return this.http.get<Sessions[]>(`${this.api}/sessions/all`);
  }
  public getSessionById(id: number): Observable<Sessions> {
    return this.http.get<Sessions>(`${this.api}/sessions/find/${id}`);
  }
  public addSession(session:Sessions): Observable<Sessions> {
    return this.http.post<Sessions>(`${this.api}/sessions/add`, session);
  }
  public updateSession(session: Sessions): Observable<Sessions> {
    return this.http.put<Sessions>(`${this.api}/sessions/update`, session);
  }
  public deleteSession(id: number): Observable<any> {
    return this.http.delete(`${this.api}/sessions/delete/${id}`);
  }

}
