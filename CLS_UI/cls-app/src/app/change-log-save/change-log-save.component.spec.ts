import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeLogSaveComponent } from './change-log-save.component';

describe('ChangeLogSaveComponent', () => {
  let component: ChangeLogSaveComponent;
  let fixture: ComponentFixture<ChangeLogSaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeLogSaveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeLogSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
