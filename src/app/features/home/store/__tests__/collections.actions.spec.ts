import { TestBed } from "@angular/core/testing";
import { MockStore, provideMockStore } from "@ngrx/store/testing";
import { CollectionsActions } from "../collections.actions";
import { mockCollection } from "./mocks";

fdescribe('loadCollections', () => {
  let store: MockStore;
  let dispatchSpy: jasmine.Spy<InstanceType<typeof MockStore>['dispatch']>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [provideMockStore()],
    }).compileComponents();

    store = TestBed.inject(MockStore);
    dispatchSpy = spyOn(store, 'dispatch');
  });
  
  it('should dispatch loadCollections action', () => {
    store.dispatch(CollectionsActions.loadCollections({ page: 1, perPage: 10 }));

    const expectedAction = CollectionsActions.loadCollections({ page: 1, perPage: 10 });

    expect(dispatchSpy).toHaveBeenCalledWith(expectedAction);
  });

  it('should dispatch loadCollectionsSuccess action', () => {
    store.dispatch(CollectionsActions.loadCollectionsSuccess({ collections: [mockCollection], total: 1 }));

    const expectedAction = CollectionsActions.loadCollectionsSuccess({ collections: [mockCollection], total: 1 });

    expect(dispatchSpy).toHaveBeenCalledWith(expectedAction);
  });

  it('should dispatch loadCollectionsFailure action', () => {
    store.dispatch(CollectionsActions.loadCollectionsFailure());

    const expectedAction = CollectionsActions.loadCollectionsFailure();

    expect(dispatchSpy).toHaveBeenCalledWith(expectedAction);
  });
});
