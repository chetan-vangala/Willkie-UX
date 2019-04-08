import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientBillingInfoComponent } from './clientBillingInfo.component';

describe('ClientBillingInfoComponent', () => {
  let component: ClientBillingInfoComponent;
  let fixture: ComponentFixture<ClientBillingInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientBillingInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientBillingInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
