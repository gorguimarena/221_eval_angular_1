import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Indicateurs } from './indicateurs';

describe('Indicateurs', () => {
  let component: Indicateurs;
  let fixture: ComponentFixture<Indicateurs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Indicateurs],
    }).compileComponents();

    fixture = TestBed.createComponent(Indicateurs);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
