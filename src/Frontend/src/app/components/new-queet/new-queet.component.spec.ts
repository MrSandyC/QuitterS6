import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewQueetComponent } from './new-queet.component';

describe('NewQueetComponent', () => {
  let component: NewQueetComponent;
  let fixture: ComponentFixture<NewQueetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewQueetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewQueetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
