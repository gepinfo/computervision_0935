import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisionaiComponent } from './visionai.component';

describe('VisionaiComponent', () => {
  let component: VisionaiComponent;
  let fixture: ComponentFixture<VisionaiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisionaiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisionaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});