import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { UnsplashService } from 'app/services';
import { of } from 'rxjs';
import { ICollection } from 'app/interfaces';
import { ApiResponse } from 'unsplash-js/dist/helpers/response';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { RouterTestingModule } from '@angular/router/testing';
import { TitleComponent } from '../utils/title/title.component';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { MatIconModule } from '@angular/material/icon';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let mockUnsplashService: jasmine.SpyObj<UnsplashService>;

  beforeEach(async(() => {
    mockUnsplashService = jasmine.createSpyObj('UnsplashService', ['listCollections']);

    TestBed.configureTestingModule({
      declarations: [HomeComponent, TitleComponent],
      imports: [MatToolbarModule, MatProgressBarModule, MatCardModule, RouterTestingModule, 
        MatIconModule,
        HttpClientModule,
        TranslateModule.forRoot()],
      providers: [{ provide: UnsplashService, useValue: mockUnsplashService }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch and set collections on init', () => {
    const mockCollections: ICollection[] = [
      { 
        id: 1, 
        title: 'test', 
        published_at: new Date, 
        cover_photo: {
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
        },
        total_photos: 1
      }];

      const mockApiResponse: ApiResponse<{ results: ICollection[]; total: number }> = {
        type: 'success',
        response: { results: mockCollections, total: mockCollections.length },
        originalResponse: {} as Response,
        errors: undefined,
        status: 200,
      };

    mockUnsplashService.listCollections.and.returnValue(of(mockApiResponse));

    component.ngOnInit();

    expect(component.isLoading).toBe(false);
    expect(component.collections).toEqual(mockCollections);
    expect(mockUnsplashService.listCollections).toHaveBeenCalled();
  });

  it('should unsubscribe on destroy', () => {
    spyOn(component.destroy$, 'next');
    spyOn(component.destroy$, 'complete');

    component.ngOnDestroy();

    expect(component.destroy$.next).toHaveBeenCalled();
    expect(component.destroy$.complete).toHaveBeenCalled();
  });
});
