import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Sessions } from '../../models/sessions.model';
import { SessionsService } from '../../services/sessions.service';

@Component({
  selector: 'app-list-sessions',
  templateUrl: './list-sessions.component.html',
  styleUrls: ['./list-sessions.component.css']
})
export class ListSessionsComponent implements OnInit {

  public sessions: Sessions[];
  public editSession: Sessions;
  public deleteSession: Sessions
  constructor(private service: SessionsService) { }

  ngOnInit(): void {
    this.getSessions();
  }

  public getSessions(): void {
    this.service.getSessions().subscribe((res: Sessions[]) => {
      this.sessions = res;
      console.log(res);
    }),
    (error:HttpErrorResponse) => {
      alert(error.message);
    }
  }



  public onOpenModal(session: Sessions, mode: string): void {
    const mainList = document.getElementById('main-list');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle','modal')
    if(mode === 'edit'){
    this.editSession = session;
    button.setAttribute('data-target', '#editModal');
    }
    if(mode === 'delete'){
      this.deleteSession = session;
      button.setAttribute('data-target', '#deleteModal');
      }
    mainList.appendChild(button);
  }

  public onDeleteSession(id: number): void {
    this.sessions = this.sessions.filter(session => session.pkSessions !== id);

    this.service.deleteSession(id).subscribe((res) => {
      res;
      console.log("Session deleted!");
    }),
    (error:HttpErrorResponse) => {
      alert(error.message);
    }
  }

  public updateSession(session: Sessions): void {
    this.service.updateSession(session).subscribe((res: Sessions) => {
      res;
      console.log(res);
      window.alert("Session updated!");
      this.getSessions();
    }),
    (error: HttpErrorResponse) => {
      alert(error.message);
    }
  }
}
