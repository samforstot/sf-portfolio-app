import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exp-nav',
  templateUrl: './exp-nav.component.html',
  styleUrls: ['./exp-nav.component.scss']
})
export class ExpNavComponent {
  constructor(private router: Router){}

  goToPage(pageName: string){
    this.router.navigate([`${pageName}`])
  }
}
