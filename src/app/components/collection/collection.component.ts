import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { IPhoto } from '@app/interfaces';
import { loadCollectionPhotos } from '../../store/collection/collection.actions';
import { selectCollectionLoading, selectCollectionPhotos } from '@app/store';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CollectionComponent implements OnInit {
  photos$ = this.store.select(selectCollectionPhotos);
  isLoading$ = this.store.select(selectCollectionLoading);

  constructor(private readonly router: Router, private readonly activatedRoute: ActivatedRoute, private readonly store: Store) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const collectionId = params['collectionId'];
      this.store.dispatch(loadCollectionPhotos({ collectionId }));
    });
  }

  handleGotoPhoto(photo: IPhoto) {
    const collectionId = this.activatedRoute.snapshot.params['collectionId'];
    return this.router.navigate(['collection', collectionId, 'photo', photo.id]);
  }
}
