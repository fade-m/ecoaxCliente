import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDependenciaComponent } from './home-dependencia.component';

describe('HomeDependenciaComponent', () => {
  let component: HomeDependenciaComponent;
  let fixture: ComponentFixture<HomeDependenciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeDependenciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeDependenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
