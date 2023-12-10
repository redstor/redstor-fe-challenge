import { CollectionsSelectors } from "../collections.selectors";
import { mockCollection } from "./mocks";

fdescribe('CollectionsSelectors', () => {
  describe('selectCollections', () => {
    it('should return the collections property from the state', () => {
      expect(CollectionsSelectors.selectCollections.projector({
        collections: [mockCollection],
        total: 1,
        loading: false,
      })).toEqual([mockCollection]);
    });
  });

  describe('selectTotal', () => {
    it('should return the total property from the state', () => {
      expect(CollectionsSelectors.selectTotal.projector({
        collections: [mockCollection],
        total: 1,
        loading: false,
      })).toEqual(1);
    });
  });

  describe('selectLoading', () => {
    it('should return the loading property from the state', () => {
      expect(CollectionsSelectors.selectLoading.projector({
        collections: [],
        total: 0,
        loading: true,
      })).toBeTrue();
    });
  });
});
