import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Experiments } from '../../models/experiments.model';
import { ExperimentsService } from '../../services/experiments.service';

@Component({
  selector: 'app-list-experiments',
  templateUrl: './list-experiments.component.html',
  styleUrls: ['./list-experiments.component.css']
})
export class ListExperimentsComponent implements OnInit {

  constructor(private service: ExperimentsService) { }

  public delExperiment: Experiments;

  public experiments: Experiments[];
  public experiment: Experiments;
  public editExperiment: Experiments;
  ngOnInit(): void {
    this.getExperiments();
  }

  public getExperiments(): void {
    this.service.getExperiments().subscribe((experiments: Experiments[]) => {
      this.experiments = experiments;
      console.log(experiments);
    }),
    (error: HttpErrorResponse) => {
      alert(error.message);
    }
  }

  public onOpenModal(experiment: Experiments, mode: string): void {
    const mainList = document.getElementById('main-list');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if(mode === 'delete'){
      this.delExperiment = experiment;
      button.setAttribute('data-target', '#deleteModal')
    }
    if(mode === 'edit'){
      this.editExperiment = experiment;
    }
    mainList.appendChild(button);
  }
  public deleteExperiment(id: number): void {
    this.experiments = this.experiments.filter(experiment => experiment.pkExperiments !== id)
    this.service.deleteExperiment(id).subscribe(() => {
      window.alert("Experiment deleted!");
    }),
    (error: HttpErrorResponse) => {
      alert(error.message);
    }
  }

  public updateExperiment(experiment: Experiments): void {
    this.service.updateExpriment(experiment).subscribe((res: Experiments) => {
      res;
      console.log(res);
      this.getExperiments();
    }),
    (error: HttpErrorResponse) => {
      alert(error.message);
    }
  }


}
