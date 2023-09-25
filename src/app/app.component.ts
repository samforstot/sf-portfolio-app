import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { SharedService } from './shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio-app';
  scrollValue: string = '';

  constructor(private sharedService: SharedService){}

  ngOnInit(){
    this.sharedService.getScrollSection().subscribe((value: string) => {
      console.log('In App Component', value)
      this.scrollToTarget(value);
    })
  }

  scrollToTarget(value: string){
    const scrollTarget = document.getElementById(value);
    
    if(scrollTarget){
      scrollTarget?.scrollIntoView({behavior: 'smooth', block: 'start'});
    }
  }
}
