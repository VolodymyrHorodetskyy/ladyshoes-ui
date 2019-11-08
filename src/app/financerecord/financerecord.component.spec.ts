import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancerecordComponent } from './financerecord.component';

describe('FinancerecordComponent', () => {
  let component: FinancerecordComponent;
  let fixture: ComponentFixture<FinancerecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinancerecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancerecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
