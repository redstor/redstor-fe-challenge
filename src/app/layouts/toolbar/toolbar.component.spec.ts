import { TestBed, ComponentFixture } from '@angular/core/testing';
import { ToolbarComponent } from './toolbar.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MatToolbarModule } from '@angular/material/toolbar';

describe('ToolbarComponent', () => {
  let component: ToolbarComponent;
  let fixture: ComponentFixture<ToolbarComponent>;
  let translateService: TranslateService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToolbarComponent ],
      imports: [
        TranslateModule.forRoot(),
        MatToolbarModule
       ],
      providers: [ TranslateService ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToolbarComponent);
    component = fixture.componentInstance;
    translateService = TestBed.inject(TranslateService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();

  });

  it('should change language to English', () => {
    spyOn(translateService, 'use');
    component.changeLangToEN();
    expect(translateService.use).toHaveBeenCalledWith('en');
  });

  it('should change language to Farsi', () => {
    spyOn(translateService, 'use');
    component.changeLangToFA();
    expect(translateService.use).toHaveBeenCalledWith('fa');
  });
});
