import { Component, EventEmitter, Output, HostListener } from '@angular/core';
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  constructor(private sharedService: SharedService, private router: Router){}

  isShown = false;
  isScrolled = false;
  @HostListener('window:scroll', ['$event'])
  onScroll(){
    if (window.scrollY > 100){
      this.isScrolled = true;
    } else {
      this.isScrolled = false;
    }
  }

  scrollToDiv(div: string){
    console.log('In Nav Bar');
    this.sharedService.setScrollSection(div);
  }

  toggleOptions(){
    this.isShown = !this.isShown;
  }
}
