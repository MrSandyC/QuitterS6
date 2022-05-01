import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueetsComponent } from './queets.component';

describe('QueetsComponent', () => {
  let component: QueetsComponent;
  let fixture: ComponentFixture<QueetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QueetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QueetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
