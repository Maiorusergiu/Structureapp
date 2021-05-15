import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Frames } from '../models/frames.model';

@Injectable({
  providedIn: 'root'
})
export class FramesService {

  frames: Frames[];
  private api = environment.apiBaseUrl;
  constructor(private http: HttpClient) { }

  public getFrames(): Observable<Frames[]> {
    return this.http.get<Frames[]>(`${this.api}/frames/all`);
  }
  public getFramesById(id: number): Observable<Frames> {
    return this.http.get<Frames>(`${this.api}/frames/find/${id}`);
  }
  public addFrame(frame: Frames): Observable<Frames> {
    return this.http.post<Frames>(`${this.api}/frames/add`, frame);
  }
  public updateFrame(frame: Frames): Observable<Frames> {
    return this.http.put<Frames>(`${this.api}/frames/update`, frame);
  }

  public deleteFrame(id: number): Observable<any> {
    return this.http.delete(`${this.api}/frames/delete/${id}`);
  }

}
