import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmpirePreviewComponent } from './empire-preview.component';

describe('EmpirePreviewComponent', () => {
  let component: EmpirePreviewComponent;
  let fixture: ComponentFixture<EmpirePreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmpirePreviewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EmpirePreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
