import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Experiments} from '../models/experiments.model';

@Injectable({
  providedIn: 'root'
})
export class ExperimentsService {

  constructor(private http: HttpClient) { }

  private api = environment.apiBaseUrl;

  public getExperiments(): Observable<Experiments[]> {
    return this.http.get<Experiments[]>(`${this.api}/experiments/all`);
  }

  public getExperimentById(id: number): Observable<Experiments> {
    return this.http.get<Experiments>(`${this.api}/experiments/find/${id}`)
  }

  public addExpriment(experiment: Experiments): Observable<Experiments> {
    return this.http.post<Experiments>(`${this.api}/experiments/add`, experiment);
  }
  public updateExpriment(experiment: Experiments): Observable<Experiments> {
    return this.http.put<Experiments>(`${this.api}/experiments/update`, experiment);
  }

  public deleteExperiment(id: number): Observable<any> {
    return this.http.delete(`${this.api}/experiments/delete/${id}`);
  }
}
