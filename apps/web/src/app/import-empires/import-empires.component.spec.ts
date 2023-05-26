import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ImportEmpiresComponent } from './import-empires.component';

describe('ImportEmpiresComponent', () => {
  let component: ImportEmpiresComponent;
  let fixture: ComponentFixture<ImportEmpiresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImportEmpiresComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ImportEmpiresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
