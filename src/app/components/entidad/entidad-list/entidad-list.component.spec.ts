import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntidadListComponent } from './entidad-list.component';

describe('EntidadListComponent', () => {
  let component: EntidadListComponent;
  let fixture: ComponentFixture<EntidadListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EntidadListComponent]
    });
    fixture = TestBed.createComponent(EntidadListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
