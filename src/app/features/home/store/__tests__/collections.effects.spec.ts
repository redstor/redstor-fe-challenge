import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { CollectionsEffects } from '../collections.effects';
import { cold, hot } from 'jasmine-marbles';
import { CollectionsActions } from '../collections.actions';
import { UnsplashService } from '@app/services';
import { mockApiResponseFailure, mockApiResponseSuccess, mockCollection } from './mocks';
import { provideMockStore } from '@ngrx/store/testing';

fdescribe('CollectionsEffects', () => {
  let actions$: Observable<any>;
  let effects: CollectionsEffects;
  let unsplashService: jasmine.SpyObj<UnsplashService>;

  beforeEach(() => {
    unsplashService = jasmine.createSpyObj<UnsplashService>(['listCollections']);

    TestBed.configureTestingModule({
      providers: [
        CollectionsEffects,
        provideMockStore,
        provideMockActions(() => actions$),
        {
          provide: UnsplashService,
          useValue: unsplashService,
        }
      ],
    });

    effects = TestBed.inject(CollectionsEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('the loadCollections$ effect', () => {
    it('should call the unsplash service list collections method and dispatch loadCollectionsSuccess on success', () => {
      actions$ = hot('-a', { a: CollectionsActions.loadCollections({page: 1, perPage: 10}) });

      const apiResponseObservable = cold('-a|', { a: mockApiResponseSuccess });
      unsplashService.listCollections.withArgs(1, 10).and.returnValue(apiResponseObservable);

      const expected = cold('--a', {
        a: CollectionsActions.loadCollectionsSuccess({
          collections: [mockCollection],
          total: 1
        }),
      });
      expect(effects.loadCollections$).toBeObservable(expected);
      expect(unsplashService.listCollections).toHaveBeenCalledWith(1, 10);
    });

    it('should call the unsplash service list collections method and dispatch loadCollectionsFailure on error', () => {
      actions$ = hot('-a', { a: CollectionsActions.loadCollections({page: 1, perPage: 10}) });

      const apiResponseObservable = cold('-a|', { a: mockApiResponseFailure });
      unsplashService.listCollections.withArgs(1, 10).and.returnValue(apiResponseObservable);

      const expected = cold('--a', {
        a: CollectionsActions.loadCollectionsFailure(),
      });
      expect(effects.loadCollections$).toBeObservable(expected);
      expect(unsplashService.listCollections).toHaveBeenCalledWith(1, 10);
    });
  });
});
