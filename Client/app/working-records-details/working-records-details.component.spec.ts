import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkingRecordsDetailsComponent } from './working-records-details.component';

describe('WorkingRecordsDetailsComponent', () => {
  let component: WorkingRecordsDetailsComponent;
  let fixture: ComponentFixture<WorkingRecordsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkingRecordsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkingRecordsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
