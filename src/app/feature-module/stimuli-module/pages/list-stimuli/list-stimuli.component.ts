import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Stimuli } from '../../models/stimuli.model';
import { StimuliService } from '../../services/stimuli.service';

@Component({
  selector: 'app-list-stimuli',
  templateUrl: './list-stimuli.component.html',
  styleUrls: ['./list-stimuli.component.css']
})
export class ListStimuliComponent implements OnInit {

  constructor(private service: StimuliService) { }

  public stimuli: Stimuli[];
  public deleteStimuli: Stimuli;
  public editStimuli: Stimuli;
  ngOnInit(): void {
    this.getStimuli();
  }

  public onOpenModal(stimuli: Stimuli, mode: string): void {
    const mainList = document.getElementById('main-list');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle','modal')
    if(mode === 'edit'){
    this.editStimuli = stimuli;
    button.setAttribute('data-target', '#editModal');
    }
    if(mode === 'delete'){
      this.deleteStimuli = stimuli;
      button.setAttribute('data-target', '#deleteModal');
      }
    mainList.appendChild(button);
  }

  public getStimuli(): void {
    this.service.getStimuli().subscribe((res: Stimuli[]) => {
      this.stimuli = res;
      console.log(res);
    }),
    (error: HttpErrorResponse) => {
      alert(error.message);
    }
  }

  public deleteStimul(id: number): void {

    this.stimuli = this.stimuli.filter(stimul => stimul.pkStimuli !== id);

    this.service.deleteStimuli(id).subscribe((res: any) => {
      res;
      console.log("Stimul deleted!");
    }),
    (error:HttpErrorResponse) => {
      alert(error.message);
    }
  }

  public updateStimuli(stimuli: Stimuli): void {
    this.service.updateStimuli(stimuli).subscribe((res: Stimuli) => {
      res;
      console.log(res);
      window.alert("Stimuli updated!");
      this.getStimuli();
    }),
    (error: HttpErrorResponse) => {
      alert(error.message);
    }
  }
}
