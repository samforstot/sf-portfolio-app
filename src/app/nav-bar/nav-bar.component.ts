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

  showResume(div: string){
    console.log('In navbar.resume');
    this.sharedService.setResumeSection(div);
  }

  openResume(link: string){
    window.open(link, "_blank")
  }

  toggleOptions(){
    this.isShown = !this.isShown;
  }
}
