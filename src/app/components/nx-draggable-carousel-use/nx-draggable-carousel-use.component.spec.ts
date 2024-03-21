import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NxDraggableCarouselUseComponent } from './nx-draggable-carousel-use.component';

describe('NxDraggableCarouselUseComponent', () => {
  let component: NxDraggableCarouselUseComponent;
  let fixture: ComponentFixture<NxDraggableCarouselUseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NxDraggableCarouselUseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NxDraggableCarouselUseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
