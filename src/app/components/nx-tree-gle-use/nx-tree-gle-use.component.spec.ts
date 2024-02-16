import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NxTreeGleUseComponent } from './nx-tree-gle-use.component';

describe('NxTreeGleUseComponent', () => {
  let component: NxTreeGleUseComponent;
  let fixture: ComponentFixture<NxTreeGleUseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NxTreeGleUseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NxTreeGleUseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
