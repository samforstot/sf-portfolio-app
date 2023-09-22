import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  isFlippedMD = false;
  isFlippedGPT = false;
  isFlippedDRIG = false; 
  isFlippedHH = false;

  toggleCard(div: string){
    if(div == 'md'){
      this.isFlippedMD = !this.isFlippedMD;
    } else if (div == 'gpt'){
      this.isFlippedGPT = !this.isFlippedGPT;
    } else if (div == 'drig'){
      this.isFlippedDRIG = !this.isFlippedDRIG;
    } else {
      this.isFlippedHH = !this.isFlippedHH;
    }
  }
}
