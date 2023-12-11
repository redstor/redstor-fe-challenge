import { Injectable } from '@angular/core';
import { createApi } from 'unsplash-js';
import { ApiResponse } from 'unsplash-js/dist/helpers/response';
import { from, map, Observable } from 'rxjs';
import { Full } from 'unsplash-js/dist/methods/photos/types';
import { environment } from 'environments/environment';
import { ICollection, IPhoto } from 'app/interfaces';

@Injectable({
  providedIn: 'root'
})
export class UnsplashService {
  api;

  constructor() {
    this.api = createApi({ accessKey: environment.unsplashAccessKey });
  }

  listCollections(): Observable<
    ApiResponse<{
      results: ICollection[];
      total: number;
    }>
  > {
    return from(this.api.collections.list({}));
  }

  listCollectionPhotos(id: string): Observable<
    ApiResponse<{
      results: IPhoto[];
      total: number;
    }>
  > {
    return from(this.api.collections.getPhotos({ collectionId: id })).pipe(
      map((response) => ({
        type: 'success',
        originalResponse: new Response(),
        errors: undefined,
        status: 200,
        response: response?.response ? { results: response.response.results, total: response.response.total } : { results: [], total: 0 },
      }))
    );
  }

  getPhoto(id: string): Observable<ApiResponse<Full>> {
    return from(this.api.photos.get({ photoId: id }));
  }
}
