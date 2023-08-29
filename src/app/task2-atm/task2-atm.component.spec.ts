import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Task2AtmComponent } from './task2-atm.component';

describe('Task2AtmComponent', () => {
  let component: Task2AtmComponent;
  let fixture: ComponentFixture<Task2AtmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Task2AtmComponent]
    });
    fixture = TestBed.createComponent(Task2AtmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
