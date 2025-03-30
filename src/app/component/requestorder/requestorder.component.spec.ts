import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestorderComponent } from './requestorder.component';

describe('RequestorderComponent', () => {
  let component: RequestorderComponent;
  let fixture: ComponentFixture<RequestorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RequestorderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RequestorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
