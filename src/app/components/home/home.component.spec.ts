import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { ChangeDetectionStrategy, Signal } from '@angular/core';
import { By } from '@angular/platform-browser';
import { ICollection } from '../../interfaces';
import { CollectionsFacade } from '../../store';
import { TranslateModule } from '@ngx-translate/core';
import { ActivatedRoute } from '@angular/router';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let collectionsFacade: CollectionsFacade;
  let mockActivatedRoute: any;


  beforeEach(async () => {
    collectionsFacade = jasmine.createSpyObj('CollectionsFacade', ['loadCollections', 'collections$']);
    mockActivatedRoute = {
      snapshot: {
        params: { }
      }
    };

    await TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot()
      ],
      providers: [
        { provide: CollectionsFacade, useValue: collectionsFacade },
        { provide: ActivatedRoute, useValue: mockActivatedRoute }
      ],
    })
    .overrideComponent(HomeComponent, {
      set: { changeDetection: ChangeDetectionStrategy.Default }// Override change detection strategy for testing)
     })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display collections', () => {
    const compiled = fixture.debugElement;
    component.ngOnInit();
    component.collections$ = (() => {
      return [
      {
        id: 1,
        title: 'Title',
        published_at: new Date(),
        cover_photo: {
          urls: { small: 'url' },
          description: 'description'
        },
        total_photos: 1
      }
    ]}) as unknown as Signal<ICollection[]>

    fixture.detectChanges();

    const galleryItems = compiled.queryAll(By.css('.gallery-item'));
    expect(galleryItems.length).toBe(1);
    expect(galleryItems[0].query(By.css('.title')).nativeElement.textContent).toContain('Title');
  });
});
