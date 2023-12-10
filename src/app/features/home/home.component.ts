import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { UnsplashService } from '@app/services';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { RouterModule } from '@angular/router';
import { CollectionsFacade } from './store';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, MatProgressBarModule, MatCardModule, RouterModule, MatPaginatorModule, TranslateModule]
})
export class HomeComponent implements OnInit {
  readonly unsplashService: UnsplashService = inject(UnsplashService);
  readonly collectionsFacade: CollectionsFacade = inject(CollectionsFacade);
  itemsPerPageLabel = 'Itens por pagina';

  pageSize = 10;
  pageIndex = 0;

  handlePageEvent(e: PageEvent) {
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
    this.collectionsFacade.loadCollections(this.pageIndex+1, this.pageSize);
  }

  ngOnInit(): void {
    this.collectionsFacade.loadCollections();
  }
}
