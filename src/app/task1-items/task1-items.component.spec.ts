import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Task1ItemsComponent } from './task1-items.component';

describe('Task1ItemsComponent', () => {
  let component: Task1ItemsComponent;
  let fixture: ComponentFixture<Task1ItemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Task1ItemsComponent]
    });
    fixture = TestBed.createComponent(Task1ItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
