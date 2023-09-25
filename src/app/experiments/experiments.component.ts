import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.scss']
})
export class ExperimentsComponent {
  
  constructor(private router: Router){}

  goToPage(pageName: string){
    this.router.navigate([`${pageName}`])
  }
}
