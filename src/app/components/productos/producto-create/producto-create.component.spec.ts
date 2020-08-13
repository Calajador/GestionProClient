import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoCreateComponent } from './producto-create.component';

describe('ProductoCreateComponent', () => {
  let component: ProductoCreateComponent;
  let fixture: ComponentFixture<ProductoCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductoCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
