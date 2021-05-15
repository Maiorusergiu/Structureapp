import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Participants } from '../models/participants.model';

@Injectable({
  providedIn: 'root'
})
export class ParticipantsService {

  constructor(private http: HttpClient) { }

  private api = environment.apiBaseUrl;

  public getParticipants(): Observable<Participants[]> {
    return this.http.get<Participants[]>(`${this.api}/participants/all`);
  }

  public getParticipantById(participantId: number): Observable<Participants> {
    return this.http.get<Participants>(`${this.api}/participants/find/${participantId}`);
  }

  public addParticipant(participant: Participants): Observable<Participants> {
    return this.http.post<Participants>(`${this.api}/participants/add`, participant);
  }

  public updateParticipant(participant: Participants): Observable<Participants> {
    return this.http.put<Participants>(`${this.api}/participants/update`, participant);
  }

  public deleteParticipant(participantId: number): Observable<any> {
    return this.http.delete(`${this.api}/participants/delete/${participantId}`);
  }



}
