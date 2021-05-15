import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Stimuli } from '../models/stimuli.model';

@Injectable({
  providedIn: 'root'
})
export class StimuliService {
private api = environment.apiBaseUrl;
  constructor(private http: HttpClient) { }

  public getStimuli(): Observable<Stimuli[]> {
    return this.http.get<Stimuli[]>(`${this.api}/stimuli/all`)
  }
  public getStimuliById(id: number): Observable<Stimuli> {
    return this.http.get<Stimuli>(`${this.api}/stimuli/find/${id}`);
  }
  public addStimuli(stimuli: Stimuli): Observable<Stimuli> {
    return this.http.post<Stimuli>(`${this.api}/stimuli/add`, stimuli);
  }
  public updateStimuli(stimuli: Stimuli): Observable<Stimuli> {
    return this.http.put<Stimuli>(`${this.api}/stimuli/update`, stimuli);
  }
  public deleteStimuli(id: number): Observable<any> {
    return this.http.delete(`${this.api}/stimuli/delete/${id}`);
  }
}
