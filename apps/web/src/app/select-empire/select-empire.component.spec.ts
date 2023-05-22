import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SelectEmpireComponent } from './select-empire.component';

describe('SelectEmpireComponent', () => {
  let component: SelectEmpireComponent;
  let fixture: ComponentFixture<SelectEmpireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SelectEmpireComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SelectEmpireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
