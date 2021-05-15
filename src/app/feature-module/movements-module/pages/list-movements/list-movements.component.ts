import {  HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Movements } from '../../models/movements.model';
import { MovementsService } from '../../services/movements.service';

@Component({
  selector: 'app-list-movements',
  templateUrl: './list-movements.component.html',
  styleUrls: ['./list-movements.component.css']
})
export class ListMovementsComponent implements OnInit {

  public movements: Movements[];
  public editMovement: Movements;
  public deleteMovement: Movements;
  constructor(private service: MovementsService) { }

  ngOnInit(): void {
    this.getMovements();
  }

  public getMovements(): void {
    this.service.getMovements().subscribe((res: Movements[]) => {
      this.movements = res;
      console.log(res);
    }),
    (error: HttpErrorResponse) => {
      alert(error.message);
    }
  }
  public onOpenModal(movement: Movements, mode: string): void {
    const mainList = document.getElementById('main-list');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle','modal')
    if(mode === 'edit'){
    this.editMovement = movement;
    button.setAttribute('data-target', '#editModal');
    }
    if(mode === 'delete'){
      this.deleteMovement = movement;
      button.setAttribute('data-target', '#deleteModal');
      }
    mainList.appendChild(button);
  }

  public onDeleteMovement(id: number): void {
    this.movements = this.movements.filter(movement => movement.id !== id);

    this.service.deleteMovement(id).subscribe((res: any) => {
      res;
      console.log("Movement deleted!");
    }),
    (error: HttpErrorResponse) => {
      alert(error.message);
    }
  }

  public updateMovement(movement: Movements): void {
    this.service.updateMovement(movement).subscribe((res: Movements) => {
      res;
      console.log(res);
      this.getMovements();
    }),
    (error: HttpErrorResponse) => {
      alert(error.message);
    }
  }
}
