import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingwiseinfoComponent } from './buildingwiseinfo.component';

describe('BuildingwiseinfoComponent', () => {
  let component: BuildingwiseinfoComponent;
  let fixture: ComponentFixture<BuildingwiseinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuildingwiseinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildingwiseinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
