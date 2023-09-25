import { Component, OnInit, HostListener, ElementRef, ViewChild } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent {
  isShown = false; 
  constructor(private sharedService: SharedService){};

  ngOnInit(){
    this.sharedService.getScrollSection().subscribe((value: string) => {
      console.log('In Resume')
      this.toggleResume(value);
    })
  }

  toggleResume(value: string){
    if(value == 'resume'){
      this.isShown = !this.isShown;
      console.log(this.isShown)
    }
  }

}
