import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { TitleComponent } from './title.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { RouterTestingModule } from '@angular/router/testing';
import { MatIconModule } from '@angular/material/icon';

describe('TitleComponent', () => {
  let component: TitleComponent;
  let fixture: ComponentFixture<TitleComponent>;
  let translateService: TranslateService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TitleComponent],
      imports: [MatToolbarModule, MatProgressBarModule, MatCardModule, RouterTestingModule, MatIconModule,TranslateModule.forRoot()],
      providers: [TranslateService],
    });

    fixture = TestBed.createComponent(TitleComponent);
    component = fixture.componentInstance;
    translateService = TestBed.inject(TranslateService);

    translateService.setDefaultLang('en');
    translateService.use('en');

    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should set default language to "en"', () => {
    expect(translateService.getDefaultLang()).toBe('en');
  });

  it('should change language from "en" to "pt"', () => {
    component.changeLanguage();
    expect(translateService.currentLang).toBe('pt');
  });

  it('should change language from "pt" to "en"', () => {
    translateService.use('pt');
    
    component.changeLanguage();
    expect(translateService.currentLang).toBe('en');
  });


  afterEach(() => {
    fixture.destroy();
  });
});
