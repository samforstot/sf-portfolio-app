import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpNavComponent } from './exp-nav.component';

describe('ExpNavComponent', () => {
  let component: ExpNavComponent;
  let fixture: ComponentFixture<ExpNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExpNavComponent]
    });
    fixture = TestBed.createComponent(ExpNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
