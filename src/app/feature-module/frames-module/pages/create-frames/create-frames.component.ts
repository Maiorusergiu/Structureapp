import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Frames } from '../../models/frames.model';
import { FramesService } from '../../services/frames.service';
@Component({
  selector: 'app-create-frames',
  templateUrl: './create-frames.component.html',
  styleUrls: ['./create-frames.component.css']
})
export class CreateFramesComponent implements OnInit {

  public addFrameForm: FormGroup
  constructor(private service: FramesService) { }

  ngOnInit(): void {
    this.addFrameForm = new FormGroup({
      frameIndex: new FormControl('', Validators.required),
      fkStimulus: new FormControl('', Validators.required)
    })
    
  }

  public addFrame(): void {
    this.service.addFrame(this.addFrameForm.value).subscribe((res: Frames) => {
      console.log(res)
      this.addFrameForm.reset();
    }),
    (error:HttpErrorResponse) => {
      alert(error.message);
    }
  }

}
