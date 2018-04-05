import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDenuncianteComponent } from './home-denunciante.component';

describe('HomeDenuncianteComponent', () => {
  let component: HomeDenuncianteComponent;
  let fixture: ComponentFixture<HomeDenuncianteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeDenuncianteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeDenuncianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
