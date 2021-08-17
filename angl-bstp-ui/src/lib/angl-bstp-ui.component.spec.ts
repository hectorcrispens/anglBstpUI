import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnglBstpUIComponent } from './angl-bstp-ui.component';

describe('AnglBstpUIComponent', () => {
  let component: AnglBstpUIComponent;
  let fixture: ComponentFixture<AnglBstpUIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnglBstpUIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnglBstpUIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
