import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebstatsComponent } from './webstats.component';

describe('WebstatsComponent', () => {
  let component: WebstatsComponent;
  let fixture: ComponentFixture<WebstatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebstatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebstatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
