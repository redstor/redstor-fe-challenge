import { ICollection, IPhoto } from '@app/interfaces';

export interface AppState {
  collections: ICollection[];
  photos: IPhoto[];
}
