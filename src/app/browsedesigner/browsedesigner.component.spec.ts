import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowsedesignerComponent } from './browsedesigner.component';

describe('BrowsedesignerComponent', () => {
  let component: BrowsedesignerComponent;
  let fixture: ComponentFixture<BrowsedesignerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowsedesignerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowsedesignerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
