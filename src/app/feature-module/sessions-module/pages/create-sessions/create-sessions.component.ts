import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Sessions } from '../../models/sessions.model';
import { SessionsService } from '../../services/sessions.service';

@Component({
  selector: 'app-create-sessions',
  templateUrl: './create-sessions.component.html',
  styleUrls: ['./create-sessions.component.css']
})
export class CreateSessionsComponent implements OnInit {

  public addSessionForm: FormGroup;
  constructor(private service: SessionsService) { }

  ngOnInit(): void {
    this.addSessionForm = new FormGroup({
      date: new FormControl('', Validators.required),
      time: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
    })
  }

  public onAddSession(): void {
    this.service.addSession(this.addSessionForm.value).subscribe((res: Sessions) => {
      console.log(res);
      console.log("Session created");
      this.addSessionForm.reset();
    }),
    (error: HttpErrorResponse) => {
      alert(error.message);
    }
  }
}
