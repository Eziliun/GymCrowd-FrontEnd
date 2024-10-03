import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GymEditComponentComponent } from './gym-edit.component.component';

describe('GymEditComponentComponent', () => {
  let component: GymEditComponentComponent;
  let fixture: ComponentFixture<GymEditComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GymEditComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GymEditComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
