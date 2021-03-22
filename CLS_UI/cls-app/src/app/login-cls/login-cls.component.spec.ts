import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginClsComponent } from './login-cls.component';

describe('LoginClsComponent', () => {
  let component: LoginClsComponent;
  let fixture: ComponentFixture<LoginClsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginClsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginClsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
