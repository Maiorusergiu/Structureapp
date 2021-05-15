import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Stimuli } from '../../models/stimuli.model';
import { StimuliService } from '../../services/stimuli.service';

@Component({
  selector: 'app-create-stimuli',
  templateUrl: './create-stimuli.component.html',
  styleUrls: ['./create-stimuli.component.css']
})
export class CreateStimuliComponent implements OnInit {

  public addStimuliForm: FormGroup;
  constructor(private service: StimuliService) { }

  ngOnInit(): void {
    this.addStimuliForm = new FormGroup({
      lifeTime: new FormControl('',Validators.required),
      scolor: new FormControl('',Validators.required),
      direction: new FormControl('',Validators.required),
      delay: new FormControl('',Validators.required),
      coherence: new FormControl('',Validators.required),
      velocity: new FormControl('',Validators.required),
      number: new FormControl('',Validators.required),
    })
  }

  public onAddStimuli(): void {
    this.service.updateStimuli(this.addStimuliForm.value).subscribe((res: Stimuli) => {
      res;
      console.log(res);
      this.addStimuliForm.reset();
    }),
    (error:HttpErrorResponse) => {
      alert(error.message);
    }
  }

}
