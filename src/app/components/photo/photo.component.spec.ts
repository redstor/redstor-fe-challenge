import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { PhotoComponent } from './photo.component';
import { UnsplashService } from 'app/services';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { TitleComponent } from '../utils/title/title.component';

describe('PhotoComponent', () => {
  let component: PhotoComponent;
  let fixture: ComponentFixture<PhotoComponent>;
  let unsplashServiceSpy: jasmine.SpyObj<UnsplashService>;

  beforeEach(() => {
    const unsplashSpy = jasmine.createSpyObj('UnsplashService', ['getPhoto']);
    
    TestBed.configureTestingModule({
      declarations: [PhotoComponent, TitleComponent],
      imports: [MatToolbarModule, MatProgressBarModule, MatCardModule, MatIconModule, HttpClientModule,
        TranslateModule.forRoot()],
      providers: [
        { provide: UnsplashService, useValue: unsplashSpy },
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: { params: { photoId: 'testPhotoId', collectionId: 'testCollectionId' } },
          },
        },
        {
          provide: Router,
          useValue: { navigate: jasmine.createSpy('navigate') },
        },
      ],
    }).compileComponents();

    unsplashServiceSpy = TestBed.inject(UnsplashService) as jasmine.SpyObj<UnsplashService>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should handle fetching photo', () => {
  //   const mockPhotos: IPhoto[] = [{
  //     id: '1',
  //     width: 10,
  //     height: 10,
  //     color: 'red',
  //     description: 'some description',
  //     alt_description: 'some description',
  //     urls: {
  //       raw: 'test',
  //       full: 'test',
  //       regular: 'test',
  //       small: 'test',
  //       thumb: 'test',
  //       small_s3: 'test',
  //     },
  //     links: {
  //       self: 'test',
  //       html: 'test',
  //       download: 'test',
  //       download_location: 'test',
  //     },
  //     user: {
  //       id: 'test',
  //       username: 'test',
  //       name: 'test',
  //       first_name: 'test',
  //       last_name: 'test',
  //       profile_image: {
  //         large: 'test',
  //         medium: 'test',
  //         small: 'test',
  //       },
  //       portfolio_url: 'test',
  //       location: 'test',
  //     },
  //     likes: 10,
  //     views: 10
  //   }];

  //   // HBernardi could not know how to mock related_collections for this Test
  
  //   const mockRelatedCollections = [
  //     {
  //       type: 'related' as unknown as Full["related_collections"],
  //       results: [] as Basic[], 
  //       total: 0 
  //     }
  //   ];
  
  //   const mockApiResponse: ApiResponse<Full> = {
  //     type: 'success',
  //     response: {
  //       id: '1',
  //       width: 10,
  //       height: 10,
  //       related_collections: mockRelatedCollections,
  //       blur_hash: '',
  //       promoted_at: '',
  //       created_at: '',
  //       // Add other properties from the Full type
  //     },
  //     originalResponse: {} as Response,
  //     errors: undefined,
  //     status: 200,
  //   };
  
  //   unsplashServiceSpy.getPhoto.and.returnValue(of(mockApiResponse));
  
  //   component.ngOnInit();
  
  //   expect(unsplashServiceSpy.getPhoto).toHaveBeenCalledWith('testPhotoId');
  //   expect(component.photo$.value).toEqual(mockPhotos[0]);
  // });
  
  
});
