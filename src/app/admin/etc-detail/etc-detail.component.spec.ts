import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtcDetailComponent } from './etc-detail.component';

describe('EtcDetailComponent', () => {
  let component: EtcDetailComponent;
  let fixture: ComponentFixture<EtcDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtcDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EtcDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
