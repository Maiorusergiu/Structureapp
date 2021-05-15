import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Participants } from '../../models/participants.model';
import { ParticipantsService } from '../../services/participants.service';

@Component({
  selector: 'app-create-participants',
  templateUrl: './create-participants.component.html',
  styleUrls: ['./create-participants.component.css']
})
export class CreateParticipantsComponent implements OnInit {

  //public addParticipantForm: FormGroup;
  public participants: Participants;
  public add: Participants;
  public addParticipantForm: FormGroup;
  constructor(private service: ParticipantsService) { }

  ngOnInit(): void {
    this.addParticipantForm = new FormGroup({
      initials: new FormControl('', Validators.required),
      age: new FormControl('', Validators.required),
      sex: new FormControl('', Validators.required),
      information: new FormControl('', Validators.required)
    })
    
  }

  

  public addParticipant(): void {
    this.service.addParticipant(this.addParticipantForm.value).subscribe((participant: Participants) => {
      participant;
      console.log(participant);
      window.alert("Participant created!");
      this.addParticipantForm.reset();
    }),
    (error: HttpErrorResponse) => {
      alert(error.message);
      this.addParticipantForm.reset();
    }
  }
  
  



}
