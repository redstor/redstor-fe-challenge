import { Injectable } from '@angular/core';
import { createApi } from 'unsplash-js';
import { ApiResponse } from 'unsplash-js/dist/helpers/response';
import { from, Observable } from 'rxjs';
import { Full } from 'unsplash-js/dist/methods/photos/types';
import { environment } from '@environments/environment';
import { ICollection, IPhoto } from '@app/interfaces';

@Injectable({
  providedIn: 'root'
})
export class UnsplashService {
  api;

  constructor() {
    this.api = createApi({ accessKey: environment.unsplashAccessKey });
  }

  listCollections(value: { perPage: number, page: number } | any): Observable<
    ApiResponse<{
      results: ICollection[];
      total: number;
    }>
  > {
    if(value?.perPage === undefined)
      return from(this.api.collections.list({}));

    return from(this.api.collections.list({ perPage: value.perPage, page: value.page }));
  }

  listCollectionPhotos(id: string): Observable<
    ApiResponse<{
      results: IPhoto[];
      total: number;
    }>
  > {
    return from(this.api.collections.getPhotos({ collectionId: id }));
  }

  getPhoto(id: string): Observable<ApiResponse<Full>> {
    return from(this.api.photos.get({ photoId: id }));
  }
}
