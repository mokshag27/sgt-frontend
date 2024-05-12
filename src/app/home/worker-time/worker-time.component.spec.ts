import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkerTimeComponent } from './worker-time.component';

describe('WorkerTimeComponent', () => {
  let component: WorkerTimeComponent;
  let fixture: ComponentFixture<WorkerTimeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkerTimeComponent]
    });
    fixture = TestBed.createComponent(WorkerTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
