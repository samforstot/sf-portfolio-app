import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private scrollSubject = new BehaviorSubject<string>('');
  private resumeSubject = new BehaviorSubject<string>('');

  setScrollSection(section: string){
    this.scrollSubject.next(section);
  }

  setResumeSection(resume: string){
    this.resumeSubject.next(resume);
  }

  getScrollSection(){
    return this.scrollSubject.asObservable();
  }

  getResumeSection(){
    return this.resumeSubject.asObservable();
  }

  constructor() { }
}
