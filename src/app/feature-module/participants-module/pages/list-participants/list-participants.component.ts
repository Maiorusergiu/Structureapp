import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Sessions } from 'src/app/feature-module/sessions-module/models/sessions.model';
import { Participants } from '../../models/participants.model';
import { ParticipantsService } from '../../services/participants.service';


@Component({
  selector: 'app-list-participants',
  templateUrl: './list-participants.component.html',
  styleUrls: ['./list-participants.component.css']
})
export class ListParticipantsComponent implements OnInit {
public participants: Participants[];
public participant: Participants;
public delParticipant: Participants;
public editParticipant: Participants;
session: Sessions[];



public editForm = new FormGroup({
  initials: new FormControl(''),
  age: new FormControl(''),
  sex: new FormControl(''),
  information: new FormControl(''),
})

  constructor(private service: ParticipantsService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getParticipants();
   
    
  }

  

  public getParticipants() {

  this.service.getParticipants().subscribe((participants: Participants[]) => {
    this.participants = participants;
    console.log(participants);
  }),
  (error: HttpErrorResponse) => {
    alert(error.message);
    console.log(error.message);
  }
}

public deleteParticipant(participantId: number) {
  this.participants = this.participants.filter(x => x.pkParticipants !== participantId);
  this.service.deleteParticipant(participantId).subscribe((id: number) => {
    console.log(id);
  }),
  (error: HttpErrorResponse) => {
    alert(error.message)
    console.log(error.message);
  }

}

public onDeleteModal(participant: Participants, mode: string): void {
  const mainList = document.getElementById('main-list');
  const button = document.createElement('button');
  button.type = 'button';
  button.style.display = 'none';
  button.setAttribute('data-toggle', 'modal');
  if(mode === 'delete'){
    this.delParticipant = participant;
    button.setAttribute('data-target', '#deleteModal');
  }
  mainList.appendChild(button);
  button.click();
}

public getParticipantById(id: number) {
  this.participant = this.participants.find(x => x.pkParticipants === id);
this.service.getParticipantById(this.participant.pkParticipants).subscribe(() => {
this.participant;
})

}


public onEditModal(participant: Participants, mode: string): void {
  const mainList = document.getElementById('main-list');
  const button = document.createElement('button');
  button.type = 'button';
  button.style.display = 'none';
  button.setAttribute('data-toggle','modal')
  if(mode === 'edit'){
  this.editParticipant = participant;
  button.setAttribute('data-target', '#editModal');
  }
  mainList.appendChild(button);
}

 public updateParticipant(participant: Participants): void {
   this.service.updateParticipant(participant).subscribe((res: Participants) => {
     res;
     console.log(res);
     window.alert("Participant updated!");
     this.getParticipants();
   }),
   (error: HttpErrorResponse) => {
     alert(error.message);
   }
 }
 

 




}


