import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CollectionComponent } from './collection.component';
import { provideMockStore } from '@ngrx/store/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { UnsplashService } from '@app/services';
import { ActivatedRoute } from '@angular/router';
import { ApiResponse } from 'unsplash-js/dist/helpers/response';
import { IPhoto } from '@app/interfaces';
import { mockPhoto, mockPhotos } from '@app/mocks/mock-photos';

describe('CollectionComponent', () => {
  let component: CollectionComponent;
  let fixture: ComponentFixture<CollectionComponent>;
  let unsplashService: jasmine.SpyObj<UnsplashService>;
  let mockActivatedRoute;

  beforeEach(async () => {
    const unsplashServiceSpy = jasmine.createSpyObj('UnsplashService', ['listCollectionPhotos']);
    mockActivatedRoute = { snapshot: { params: { 'collectionId': '123' } } };

    await TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([])],
      declarations: [CollectionComponent],
      providers: [
        provideMockStore(),
        { provide: UnsplashService, useValue: unsplashServiceSpy },
        { provide: ActivatedRoute, useValue: mockActivatedRoute }
      ]
    }).compileComponents();

    unsplashService = TestBed.inject(UnsplashService) as jasmine.SpyObj<UnsplashService>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionComponent);
    component = fixture.componentInstance;

    const mockPhotosApiResponse: ApiResponse<{ results: IPhoto[]; total: number }> = {
      type: 'success',
      response: {
        results: [],
        total: 0
      },
      originalResponse: new Response(),
      status: 200
    };

    // Use `of` to return an Observable that emits the expected object
    unsplashService.listCollectionPhotos.and.returnValue(of(mockPhotosApiResponse));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load photos on init and update isLoading$ and photos$', (done: DoneFn) => {
    // Arrange
    const expectedCollectionId = '123';
    const mockPhotosApiResponse: ApiResponse<{ results: IPhoto[]; total: number }> = {
      type: 'success',
      response: {
        results: mockPhotos,
        total: mockPhotos.length
      },
      originalResponse: new Response(),
      status: 200
    };
    unsplashService.listCollectionPhotos.and.returnValue(of(mockPhotosApiResponse));

    // Act
    component.ngOnInit();

    // Assert
    component.photos$.subscribe(photos => {
      expect(photos).toEqual(mockPhotos);
      expect(component.isLoading$.getValue()).toBeFalse();
      done();
    });

    expect(unsplashService.listCollectionPhotos).toHaveBeenCalledWith(expectedCollectionId);
  });

  it('should navigate to photo details when handleGotoPhoto is called', () => {
    const spyNavigate = spyOn(component['router'], 'navigate');

    // Act
    component.handleGotoPhoto(mockPhoto);

    // Assert
    expect(spyNavigate).toHaveBeenCalledWith(['collection', '123', 'photo', mockPhoto.id]);
  });
});
