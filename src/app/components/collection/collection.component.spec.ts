import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { CollectionComponent } from './collection.component';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { UnsplashService } from 'app/services';
import { IPhoto } from 'app/interfaces';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApiResponse } from 'unsplash-js/dist/helpers/response';
import { TitleComponent } from '../utils/title/title.component';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';

describe('CollectionComponent', () => {
  let component: CollectionComponent;
  let fixture: ComponentFixture<CollectionComponent>;
  let mockUnsplashService: jasmine.SpyObj<UnsplashService>;
  let mockRouter: jasmine.SpyObj<Router>;
  let mockActivatedRoute: jasmine.SpyObj<ActivatedRoute>;

  beforeEach(
    waitForAsync(() => {
      mockUnsplashService = jasmine.createSpyObj('UnsplashService', ['listCollectionPhotos']);
      mockRouter = jasmine.createSpyObj('Router', ['navigate']);
      mockActivatedRoute = {
        snapshot: {
          params: { 'collectionId': 'your_collection_id' },
        },
      } as any;

      TestBed.configureTestingModule({
        declarations: [CollectionComponent, TitleComponent],
        imports: [
          MatToolbarModule,
          MatProgressBarModule,
          MatCardModule,
          MatIconModule,
          BrowserAnimationsModule,
          HttpClientModule,
          TranslateModule.forRoot()
        ],
        providers: [
          { provide: UnsplashService, useValue: mockUnsplashService },
          { provide: Router, useValue: mockRouter },
          { provide: ActivatedRoute, useValue: mockActivatedRoute },
        ],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to the correct photo on handleGotoPhoto', () => {
    const mockPhoto: IPhoto = {
      id: '1',
      width: 10,
      height: 10,
      color: 'red',
      description: 'some description',
      alt_description: 'some description',
      urls: {
        raw: 'test',
        full: 'test',
        regular: 'test',
        small: 'test',
        thumb: 'test',
        small_s3: 'test',
      },
      links: {
        self: 'test',
        html: 'test',
        download: 'test',
        download_location: 'test',
      },
      user: {
        id: 'test',
        username: 'test',
        name: 'test',
        first_name: 'test',
        last_name: 'test',
        profile_image: {
          large: 'test',
          medium: 'test',
          small: 'test',
        },
        portfolio_url: 'test',
        location: 'test',
      },
      likes: 10,
      views: 10
    };

    component.handleGotoPhoto(mockPhoto);

    expect(mockRouter.navigate).toHaveBeenCalledWith(['collection', 'your_collection_id', 'photo', '1']);
  });

  it('should load photos and set loading state to false on init', (done) => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
  
    const mockPhotos: IPhoto[] = [{
      id: '1',
      width: 10,
      height: 10,
      color: 'red',
      description: 'some description',
      alt_description: 'some description',
      urls: {
        raw: 'test',
        full: 'test',
        regular: 'test',
        small: 'test',
        thumb: 'test',
        small_s3: 'test',
      },
      links: {
        self: 'test',
        html: 'test',
        download: 'test',
        download_location: 'test',
      },
      user: {
        id: 'test',
        username: 'test',
        name: 'test',
        first_name: 'test',
        last_name: 'test',
        profile_image: {
          large: 'test',
          medium: 'test',
          small: 'test',
        },
        portfolio_url: 'test',
        location: 'test',
      },
      likes: 10,
      views: 10
    }];;
  
    const mockApiResponse: ApiResponse<{ results: IPhoto[]; total: number }> = {
      type: 'success',
      response: { results: mockPhotos, total: mockPhotos.length },
      originalResponse: {} as Response,
      errors: undefined,
      status: 200,
    };
  
    mockUnsplashService.listCollectionPhotos.and.returnValue(of(mockApiResponse));
  
    component.ngOnInit();
  
    fixture.detectChanges();
  
    fixture.whenStable().then(() => {
      expect(component.isLoading$).toBeFalsy();
  
      const photosArray = mockPhotos;
      component.photos$ = of(photosArray);
  
      component.photos$.subscribe(photos => {
        expect(photos).toEqual(photosArray);
        done();
      });
    });
  });
  
});



