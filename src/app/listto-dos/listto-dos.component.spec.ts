import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListtoDosComponent } from './listto-dos.component';

describe('ListtoDosComponent', () => {
  let component: ListtoDosComponent;
  let fixture: ComponentFixture<ListtoDosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListtoDosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListtoDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
