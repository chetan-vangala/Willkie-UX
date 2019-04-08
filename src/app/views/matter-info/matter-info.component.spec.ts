import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatterInfoComponent } from './matter-info.component';

describe('MatterInfoComponent', () => {
  let component: MatterInfoComponent;
  let fixture: ComponentFixture<MatterInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatterInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatterInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
