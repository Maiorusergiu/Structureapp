import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Dots } from '../../models/dots.model';
import { DotsService } from '../../services/dots.service';

@Component({
  selector: 'app-list-dots',
  templateUrl: './list-dots.component.html',
  styleUrls: ['./list-dots.component.css']
})
export class ListDotsComponent implements OnInit {

  public dots: Dots[];
  public addDot: Dots;
  public editDot: Dots;
  public deleteDot: Dots;
  constructor(private service: DotsService) { }

  ngOnInit(): void {
    this.getDots();
  }

  public onOpenModal(dot: Dots, mode: string): void {
    const mainList = document.getElementById('main-list');
    const button = document.createElement('button');
    button.style.display = 'none';
    button.type = 'button';
    button.setAttribute('data-toggle','modal');
    if(mode === 'add'){
      this.addDot = dot;
      button.setAttribute('data-target','#addModal')
    }
    if(mode === 'delete'){
      this.deleteDot = dot;
      button.setAttribute('data-target','#deleteModal')
    }
    if(mode === 'edit'){
      this.editDot = dot;
      button.setAttribute('data-target','#editModal')
    }
    mainList.appendChild(button);
  }

  public getDots(): void {
    this.service.getDots().subscribe((res: Dots[]) => {
      this.dots = res;
      console.log(res);
    }),
    (error:HttpErrorResponse) => {
      alert(error.message);
    }
  }

  public onAddDot(addForm: NgForm): void {
    document.getElementById('add-dot-form').click();
    this.service.addDot(addForm.value).subscribe((res: Dots) => {
      res;
    console.log(res);
    this.getDots();
    addForm.reset();
    }),
    (error: HttpErrorResponse) => {
      alert(error.message);
    }
  }
  public onDeleteDot(id: number): void {
    this.dots = this.dots.filter(dot => dot.pkDots !== id);
    this.service.deleteDot(id).subscribe((res) => {
      res;
      window.alert("Dot deleted!");
    }),
    (error: HttpErrorResponse) => {
      alert(error.message);
    }
  }

  public onEditDot(dot: Dots): void {
    this.service.updateDot(dot).subscribe((res: Dots) => {
      res;
      console.log(res);
      window.alert("Dot updated!")
      this.getDots();
    }),
    (error: HttpErrorResponse) => {
      alert(error.message);
    }
  }
  
}
