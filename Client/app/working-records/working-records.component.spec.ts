import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkingRecordsComponent } from './working-records.component';

describe('WorkingRecordsComponent', () => {
  let component: WorkingRecordsComponent;
  let fixture: ComponentFixture<WorkingRecordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkingRecordsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkingRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
