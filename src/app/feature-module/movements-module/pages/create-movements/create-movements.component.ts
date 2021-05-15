import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Movements } from '../../models/movements.model';
import { MovementsService } from '../../services/movements.service';

@Component({
  selector: 'app-create-movements',
  templateUrl: './create-movements.component.html',
  styleUrls: ['./create-movements.component.css']
})
export class CreateMovementsComponent implements OnInit {

  public addForm: FormGroup
  constructor(private service: MovementsService) { }

  ngOnInit(): void {
    this.addForm = new FormGroup({
    xcoordinate: new FormControl('',Validators.required),
    ycoordinate: new FormControl('',Validators.required),
    screen: new FormControl('', Validators.required),
    })
  }

  public onAddMovement(): void {
    this.service.addMovement(this.addForm.value).subscribe((res: Movements) => {
      res;
      console.log(res);
      this.addForm.reset();
    }),
    (error: HttpErrorResponse) => {
      alert(error.message);
    }
  }

}
