import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { provideMockStore } from '@ngrx/store/testing';
import { UnsplashService } from '@app/services';
import { of } from 'rxjs';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let unsplashServiceStub: Partial<UnsplashService>;

  beforeEach(async () => {
    unsplashServiceStub = {
      listCollections: () =>
        of({
          type: 'success',
          response: {
            results: [],
            total: 0
          },
          originalResponse: new Response(null, { status: 200 }),
          status: 200
        })
    };

    await TestBed.configureTestingModule({
      providers: [provideMockStore(), { provide: UnsplashService, useValue: unsplashServiceStub }],
      declarations: [HomeComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set isLoading to true on init and then to false after data is loaded', () => {
    component.ngOnInit();
    expect(component.isLoading).toBeTrue();
    fixture.detectChanges(); // Trigger a change detection cycle for the component
    expect(component.isLoading).toBeFalse();
  });
});
