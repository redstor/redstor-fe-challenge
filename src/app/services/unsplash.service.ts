import { Injectable } from '@angular/core';
import { createApi } from 'unsplash-js';
import { ApiResponse } from 'unsplash-js/dist/helpers/response';
import { BehaviorSubject, from, Observable } from 'rxjs';
import { Full } from 'unsplash-js/dist/methods/photos/types';
import { environment } from '@environments/environment';
import { ICollection, IPhoto } from '@app/interfaces';

@Injectable({
  providedIn: 'root'
})
export class UnsplashService {
  api;
  private isLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  // isLoading$ has Observable
  isLoadingObservable$: Observable<boolean> = this.isLoading$.asObservable();

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
    return from(this.api.collections.getPhotos({ collectionId: id }));
  }

  getPhoto(id: string): Observable<ApiResponse<Full>> {
    return from(this.api.photos.get({ photoId: id }));
  }

  startLoading() {
    this.isLoading$.next(true);
  }

  stopLoading() {
    this.isLoading$.next(false);
  }
}
