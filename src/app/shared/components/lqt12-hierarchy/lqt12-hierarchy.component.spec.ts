import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lqt12HierarchyComponent } from './lqt12-hierarchy.component';

describe('Lqt12HierarchyComponent', () => {
  let component: Lqt12HierarchyComponent;
  let fixture: ComponentFixture<Lqt12HierarchyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lqt12HierarchyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lqt12HierarchyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
