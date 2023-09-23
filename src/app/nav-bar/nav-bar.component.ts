import { Component, EventEmitter, Output } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  constructor(private sharedService: SharedService){}

  isShown = false;

  scrollToDiv(div: string){
    console.log('In Nav Bar');
    this.sharedService.setScrollSection(div);
  }

  toggleOptions(){
    this.isShown = !this.isShown;
  }
}
