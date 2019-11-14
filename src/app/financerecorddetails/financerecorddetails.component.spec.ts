import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancerecorddetailsComponent } from './financerecorddetails.component';

describe('FinancerecorddetailsComponent', () => {
  let component: FinancerecorddetailsComponent;
  let fixture: ComponentFixture<FinancerecorddetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinancerecorddetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancerecorddetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
