import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private scrollSubject = new BehaviorSubject<string>('');

  setScrollSection(section: string){
    this.scrollSubject.next(section);
  }

  getScrollSection(){
    return this.scrollSubject.asObservable();
  }

  constructor() { }
}
