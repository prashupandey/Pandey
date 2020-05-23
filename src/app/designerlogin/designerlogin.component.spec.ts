import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignerloginComponent } from './designerlogin.component';

describe('DesignerloginComponent', () => {
  let component: DesignerloginComponent;
  let fixture: ComponentFixture<DesignerloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignerloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignerloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
