import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditEmpireComponent } from './edit-empire.component';

describe('EditEmpireComponent', () => {
  let component: EditEmpireComponent;
  let fixture: ComponentFixture<EditEmpireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditEmpireComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EditEmpireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
