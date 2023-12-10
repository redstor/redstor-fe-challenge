import { CollectionsActions } from "../collections.actions";
import { collectionsReducer, initialState } from "../collections.reducer";
import { mockCollection } from "./mocks";

fdescribe('Collections Reducer', () => {
  describe('loadCollections', () => {
    it('should update state on loadCollections', () => {
      const newState = collectionsReducer(initialState, CollectionsActions.loadCollections({}));
      expect(newState).toEqual({
        ...initialState,
        loading: true,
      });
    });

    it('should update state on loadCollectionsSuccess', () => {
      const newState = collectionsReducer(initialState, CollectionsActions.loadCollectionsSuccess({collections: [mockCollection], total: 1}));
      expect(newState).toEqual({
        ...initialState,
        collections: [mockCollection],
        total: 1,
      });
    });

    it('should update state on loadCollectionsFailure', () => {
      const newState = collectionsReducer(initialState, CollectionsActions.loadCollections({}));
      expect(newState).toEqual({
        ...initialState,
        loading: true,
      });
    });
  });
});
