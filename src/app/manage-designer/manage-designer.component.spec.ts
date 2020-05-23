import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageDesignerComponent } from './manage-designer.component';

describe('ManageDesignerComponent', () => {
  let component: ManageDesignerComponent;
  let fixture: ComponentFixture<ManageDesignerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageDesignerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageDesignerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
