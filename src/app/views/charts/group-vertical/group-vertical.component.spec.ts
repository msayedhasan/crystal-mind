import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupVerticalComponent } from './group-vertical.component';

describe('GroupVerticalComponent', () => {
  let component: GroupVerticalComponent;
  let fixture: ComponentFixture<GroupVerticalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GroupVerticalComponent]
    });
    fixture = TestBed.createComponent(GroupVerticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
