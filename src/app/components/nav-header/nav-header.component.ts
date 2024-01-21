import { Component, inject, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nav-header',
  templateUrl: './nav-header.component.html',
  styleUrl: './nav-header.component.scss'
})
export class NavHeaderComponent {
  @Input() menuLabel:string = "Collections"
  private readonly router: Router = inject(Router);
  private readonly activatedRoute: ActivatedRoute = inject(ActivatedRoute);

  handleGotoCollection() {
    const collectionId = this.activatedRoute.snapshot.params['collectionId'];
    return this.router.navigate(['collection', collectionId]);
  }

  handleGotoCollections() {
    return this.router.navigate(['/']);
  }

  isMenuActive(label:string){
    console.log(this.menuLabel)
    return label===this.menuLabel
  }

}
