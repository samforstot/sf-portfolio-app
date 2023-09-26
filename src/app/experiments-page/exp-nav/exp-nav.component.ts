import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-exp-nav',
  templateUrl: './exp-nav.component.html',
  styleUrls: ['./exp-nav.component.scss']
})
export class ExpNavComponent {
  constructor(private router: Router, private sharedService: SharedService){}

  goToPage(pageName: string){
    this.router.navigate([`${pageName}`])
  }

  showResume(div: string){
    this.sharedService.setResumeSection(div);
  }
}
