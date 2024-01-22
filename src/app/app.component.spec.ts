import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Store, StoreModule } from '@ngrx/store';
import { of } from 'rxjs';
import { BrowserModule, By } from '@angular/platform-browser';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ToolbarModule } from './layouts/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ChangeDetectionStrategy, OnInit } from '@angular/core';

class ExtendedAppComponent extends AppComponent implements OnInit {
  ngOnInit() {
  }
}

describe('AppComponent', () => {
  let component: ExtendedAppComponent;
  let fixture: ComponentFixture<ExtendedAppComponent>;
  let mockStore;

  beforeEach(async () => {
    mockStore = jasmine.createSpyObj(['pipe', 'select','dispatch']);
    mockStore.pipe.and.returnValue(of(false));

    await TestBed.configureTestingModule({
      declarations: [ ExtendedAppComponent ],
      imports: [
        MatProgressBarModule,
        ToolbarModule,
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        TranslateModule.forRoot(),
        StoreModule.forRoot(),
        EffectsModule.forRoot(),
        StoreDevtoolsModule.instrument()
      ],
      providers: [
        { provide: Store, useValue: mockStore },
      ]
    })
    .overrideComponent(ExtendedAppComponent, {
      set: { changeDetection: ChangeDetectionStrategy.Default } // Override change detection strategy for testing
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtendedAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display toolbar', () => {
    const compiled = fixture.debugElement;
    expect(compiled.query(By.css('app-toolbar')).nativeElement).toBeDefined();
  });

  it('should display loading state', () => {
    const compiled = fixture.debugElement;
    component.ngOnInit();
    component.isLoading$ = of(true);
    fixture.detectChanges();
    expect(compiled.query(By.css('mat-progress-bar')).nativeElement).toBeDefined();
  });
});
