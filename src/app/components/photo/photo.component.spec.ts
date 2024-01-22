import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PhotoComponent } from './photo.component';
import { ChangeDetectionStrategy } from '@angular/core';
import { of } from 'rxjs';
import { RSSentenceCasePipeModule } from '../../core/pipes/sentence-case/rs-sentence-case-pipe.module';
import { BreadcrumbModule } from '../breadcrumb';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterTestingModule } from '@angular/router/testing';
import { IPhoto } from '../../interfaces';
import { Store } from '@ngrx/store';
import { TranslateModule } from '@ngx-translate/core';

describe('PhotoComponent', () => {
  let component: PhotoComponent;
  let fixture: ComponentFixture<PhotoComponent>;
  let mockStore;

  beforeEach(async () => {

    mockStore = jasmine.createSpyObj(['pipe', 'select','dispatch']);

    await TestBed.configureTestingModule({
      declarations: [ PhotoComponent ],
      imports: [
        TranslateModule.forRoot(),
        RSSentenceCasePipeModule,
        BreadcrumbModule,
        RouterTestingModule,
        MatToolbarModule,
        MatProgressBarModule,
        MatCardModule,
        MatIconModule
      ],
      providers: [
        { provide: Store, useValue: mockStore },
      ]
    })
    .overrideComponent(PhotoComponent, {
      set: { changeDetection: ChangeDetectionStrategy.Default } // Override change detection strategy for testing
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display photo information', () => {

    const compiled = fixture.nativeElement;
    component.ngOnInit()
    component.photo$ = of({
      user: {
        profile_image: { medium: 'url' },
        first_name: 'First',
        last_name: 'Last',
        location: 'Location'
      },
      urls: {
        regular: 'url',
        small: 'url',
        thumb: 'url',
        full: 'url',
        raw: 'url',
        small_s3: 'url'
      },
      description: 'Description',
      likes: 10
    } as IPhoto);

    fixture.detectChanges();

    expect(compiled.querySelector('.preview')).toBeTruthy();
    expect(compiled.querySelector('mat-card-title').textContent).toContain('First Last');
    expect(compiled.querySelector('mat-card-subtitle').textContent).toContain('Location');
    expect(compiled.querySelector('p').textContent).toContain('Description');
  });
});
