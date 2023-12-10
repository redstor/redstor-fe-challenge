import { MatPaginatorIntl } from '@angular/material/paginator';
import { TranslateService } from '@ngx-translate/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Injectable } from '@angular/core';

const ITEMS_PER_PAGE = 'PAGINATION.ITEMS_PER_PAGE';
const NEXT_PAGE = 'PAGINATION.NEXT_PAGE';
const PREV_PAGE = 'PAGINATION.PREV_PAGE';
const FIRST_PAGE = 'PAGINATION.FIRST_PAGE';
const LAST_PAGE = 'PAGINATION.LAST_PAGE';

@Injectable()
export class TranslatePaginatorService extends MatPaginatorIntl {
  public constructor(private translate: TranslateService) {
    super();

    this.translate.onLangChange
      .pipe(takeUntilDestroyed())
      .subscribe(() => {
        this.getAndInitTranslations();
      });

    this.getAndInitTranslations();
  }

  public getAndInitTranslations(): void {
    this.translate.get([ITEMS_PER_PAGE, NEXT_PAGE, PREV_PAGE, FIRST_PAGE, LAST_PAGE]).subscribe((translation: any) => {
      this.itemsPerPageLabel = translation[ITEMS_PER_PAGE];
      this.nextPageLabel = translation[NEXT_PAGE];
      this.previousPageLabel = translation[PREV_PAGE];
      this.firstPageLabel = translation[FIRST_PAGE];
      this.lastPageLabel = translation[LAST_PAGE];

      this.changes.next();
    });
  }
}
