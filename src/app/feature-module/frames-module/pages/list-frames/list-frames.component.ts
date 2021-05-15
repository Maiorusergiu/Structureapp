import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Frames } from '../../models/frames.model';
import { FramesService } from '../../services/frames.service';

@Component({
  selector: 'app-list-frames',
  templateUrl: './list-frames.component.html',
  styleUrls: ['./list-frames.component.css']
})
export class ListFramesComponent implements OnInit {

  public frames: Frames[];
  public editFrame: Frames;
  public deleteFrame: Frames;
  constructor(private service: FramesService) { }

  ngOnInit(): void {
    this.getFrames();
  }

  public getFrames(): void {
    this.service.getFrames().subscribe((res: Frames[]) => {
      this.frames = res;
      console.log(res);
    }),
    (error: HttpErrorResponse) => {
      alert(error.message);
    }
  }

  public onOpenModal(frame: Frames, mode: string): void {
    const mainList = document.getElementById('main-list');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal')
    if(mode === 'delete') {
      this.deleteFrame = frame;
      button.setAttribute('data-target', '#deleteModal')
    }
    if(mode === 'edit') {
      this.editFrame = frame;
      button.setAttribute('data-target', '#editModal')
    }
    mainList.appendChild(button);
  }

  public onDeleteFrame(id: number): void {
    this.frames = this.frames.filter(frame => frame.pkFrames !== id);

    this.service.deleteFrame(id).subscribe((res: any) => {
      res;
      window.alert("Frame deleted!");
    }),
    (error: HttpErrorResponse) => {
      alert(error.message);
    }
  }

  public updateFrame(frame:Frames): void {
    this.service.updateFrame(frame).subscribe((res: Frames) => {
      res;
      console.log(res);
      window.alert("Frame updated!");
      this.getFrames();
    }),
    (error: HttpErrorResponse) => {
      alert(error.message);
    }
  }

}
