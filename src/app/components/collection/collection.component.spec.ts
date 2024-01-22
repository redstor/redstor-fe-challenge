import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CollectionComponent } from './collection.component';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { UnsplashService } from '../../services';
import { IPhoto } from '../../interfaces';
import { LoadingActions } from '../../store/loading';
import { Observable, of } from 'rxjs';
import { TranslateModule } from '@ngx-translate/core';
import { BreadcrumbModule } from '../breadcrumb';
import { RouterTestingModule } from '@angular/router/testing';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

class mockUnsplashService {
  static listCollectionPhotos(id: string): Observable<any> {return of({ response: { results: [] } })}
  listCollections(): Observable<any> {return of({ response: { results: [] } })}
  getPhoto(): Observable<any> {return of({ response: { results: [] } })}
}

describe('CollectionComponent', () => {
  let component: CollectionComponent;
  let fixture: ComponentFixture<CollectionComponent>;
  let mockStore: Store;
  let mockActivatedRoute;

  beforeEach(async () => {
    mockStore = jasmine.createSpyObj(['dispatch']);
    mockActivatedRoute = {
      snapshot: {
        params: { collectionId: '123' }
      }
    };

    await TestBed.configureTestingModule({
      declarations: [ CollectionComponent ],
      imports: [
        TranslateModule.forRoot(),
        BreadcrumbModule,
        RouterTestingModule,
        MatToolbarModule,
        MatProgressBarModule,
        MatCardModule,
        MatIconModule
      ],
      providers: [
        { provide: Store, useValue: mockStore },
        { provide: UnsplashService, useValue: mockUnsplashService },
        { provide: ActivatedRoute, useValue: mockActivatedRoute }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch loading action and call listCollectionPhotos on init', () => {
    spyOn(mockUnsplashService, 'listCollectionPhotos').and.returnValue(of())
    component.ngOnInit();
    expect(mockStore.dispatch).toHaveBeenCalledWith(LoadingActions.showLoading());
    expect(mockUnsplashService.listCollectionPhotos).toHaveBeenCalledWith('123');
  });

  it('should display photos', () => {
    component.photos$.next([{ urls:{small:""}, alt_description: 'alt', likes: 10 } as IPhoto]);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelectorAll('.gallery-item').length).toBe(1);
  });

  it('should call handleGotoPhoto when a photo is clicked', () => {
    component.photos$.next([{ urls:{small:""}, alt_description: 'alt', likes: 10 } as IPhoto]);
    spyOn(component, 'handleGotoPhoto');
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    const photoElement = compiled.querySelector('.gallery-item');
    photoElement.click();
    expect(component.handleGotoPhoto).toHaveBeenCalled();
  });
});
