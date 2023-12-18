import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PhotoComponent } from './photo.component';
import { provideMockStore } from '@ngrx/store/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { UnsplashService } from '@app/services';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { Full } from 'unsplash-js/dist/methods/photos/types';

describe('PhotoComponent', () => {
  let component: PhotoComponent;
  let fixture: ComponentFixture<PhotoComponent>;
  let unsplashServiceStub: Partial<UnsplashService>;
  let mockActivatedRoute;

  beforeEach(async () => {
    const mockFullPhotoResponse: Full = {
      id: 'Dwu85P9SOIk',
      created_at: '2016-05-03T11:00:28-04:00',
      updated_at: '2016-07-10T11:00:01-05:00',
      promoted_at: null,
      width: 2448,
      height: 3264,
      color: '#6E633A',
      alt_description: null,
      blur_hash: null,
      description: null,
      likes: 24,
      urls: {
        raw: 'https://images.unsplash.com/photo-1417325384643-aac51acc9e5d',
        full: 'https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg',
        regular: 'https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=1080&fit=max',
        small: 'https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=400&fit=max',
        thumb: 'https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=200&fit=max'
      },
      links: {
        self: 'https://api.unsplash.com/photos/Dwu85P9SOIk',
        html: 'https://unsplash.com/photos/Dwu85P9SOIk',
        download: 'https://unsplash.com/photos/Dwu85P9SOIk/download',
        download_location: 'https://api.unsplash.com/photos/Dwu85P9SOIk/download'
      },
      user: {
        id: 'user-123',
        updated_at: '2020-01-01T00:00:00Z',
        username: 'mockuser',
        name: 'Mock User',
        first_name: 'Mock',
        last_name: 'User',
        instagram_username: null,
        twitter_username: null,
        portfolio_url: null,
        bio: null,
        location: null,
        total_likes: 0,
        total_photos: 0,
        total_collections: 0,
        profile_image: {
          small: '',
          medium: '',
          large: ''
        },
        links: {
          self: '',
          html: '',
          photos: '',
          likes: '',
          portfolio: '',
          following: '',
          followers: ''
        }
      },
      exif: {
        make: null,
        model: null,
        exposure_time: null,
        aperture: null,
        focal_length: null,
        iso: null
      },
      location: {
        city: null,
        country: null,
        name: null,
        position: {
          latitude: null,
          longitude: null
        }
      },
      related_collections: {
        type: 'related',
        results: [],
        total: 0
      }
    };

    unsplashServiceStub = {
      getPhoto: () =>
        of({
          type: 'success',
          response: mockFullPhotoResponse,
          originalResponse: new Response(null, { status: 200 }),
          status: 200
        })
    };

    mockActivatedRoute = {
      snapshot: {
        params: { 'photoId': 'M3w1MzgxNjh8MHwxfGNvbGxlY3Rpb258NnwxOTYxNzI1fHx8fHwyfHwxNzAyMzM2NTA4fA' }
      }
    };

    await TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([])],
      declarations: [PhotoComponent],
      providers: [
        provideMockStore(),
        { provide: UnsplashService, useValue: unsplashServiceStub },
        { provide: ActivatedRoute, useValue: mockActivatedRoute }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
