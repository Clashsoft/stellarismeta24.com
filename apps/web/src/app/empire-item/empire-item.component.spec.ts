import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmpireItemComponent } from './empire-item.component';

describe('EmpireItemComponent', () => {
  let component: EmpireItemComponent;
  let fixture: ComponentFixture<EmpireItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmpireItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EmpireItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
