import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDesignerComponent } from './add-designer.component';

describe('AddDesignerComponent', () => {
  let component: AddDesignerComponent;
  let fixture: ComponentFixture<AddDesignerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDesignerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDesignerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
