import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarDenuncianteComponent } from './sidebar-denunciante.component';

describe('SidebarDenuncianteComponent', () => {
  let component: SidebarDenuncianteComponent;
  let fixture: ComponentFixture<SidebarDenuncianteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarDenuncianteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarDenuncianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
