import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarDependenciaComponent } from './sidebar-dependencia.component';

describe('SidebarDependenciaComponent', () => {
  let component: SidebarDependenciaComponent;
  let fixture: ComponentFixture<SidebarDependenciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarDependenciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarDependenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
