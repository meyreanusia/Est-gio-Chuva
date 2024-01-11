import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscurssoesComponent } from './discurssoes.component';

describe('DiscurssoesComponent', () => {
  let component: DiscurssoesComponent;
  let fixture: ComponentFixture<DiscurssoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscurssoesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscurssoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
