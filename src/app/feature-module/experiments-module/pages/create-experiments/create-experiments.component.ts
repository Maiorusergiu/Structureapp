import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Experiments } from '../../models/experiments.model';
import { ExperimentsService } from '../../services/experiments.service';

@Component({
  selector: 'app-create-experiments',
  templateUrl: './create-experiments.component.html',
  styleUrls: ['./create-experiments.component.css']
})
export class CreateExperimentsComponent implements OnInit {

  public experiment: Experiments;
  public addForm: FormGroup;
  constructor(private service: ExperimentsService) { }

  ngOnInit(): void {
    this.addForm = new FormGroup({
      responseDirection: new FormControl('', Validators.required),
      fkSession: new FormControl('', Validators.required),
      fkStimuli: new FormControl('', Validators.required),
    })
  }

  public addExperiment(): void {
    this.service.addExpriment(this.addForm.value).subscribe((res: Experiments) => {
      res;
      console.log(res);
      this.addForm.reset();
    }),
    (error:HttpErrorResponse) => {
      alert(error.message);
    }
  }

}
