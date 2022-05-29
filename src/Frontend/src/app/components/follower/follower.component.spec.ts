import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';

import { FollowerComponent } from './follower.component';

describe('FollowerComponent', () => {
  let component: FollowerComponent;
  let fixture: ComponentFixture<FollowerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FollowerComponent ],
      imports: [ ActivatedRoute ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FollowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});