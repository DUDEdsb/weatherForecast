import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputitemComponent } from './outputitem.component';

describe('OutputitemComponent', () => {
  let component: OutputitemComponent;
  let fixture: ComponentFixture<OutputitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutputitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutputitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
