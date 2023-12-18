import { CommonModule, TitleCasePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { IPhoto } from '@app/interfaces';

@Component({
  selector: 'lib-card',
  standalone: true,
  imports: [MatCardModule, MatIconModule, CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  providers: [TitleCasePipe]
})
export class CardComponent {
  @Input() photo: IPhoto = {
    id: '',
    width: 0,
    height: 0,
    color: '',
    description: '',
    alt_description: '',
    urls: {
      raw: '',
      full: '',
      regular: '',
      small: '',
      thumb: '',
      small_s3: ''
    },
    links: {
      self: '',
      html: '',
      download: '',
      download_location: ''
    },
    user: {
      id: '',
      username: '',
      name: '',
      first_name: '',
      last_name: '',
      profile_image: {
        large: '',
        medium: '',
        small: ''
      },
      portfolio_url: undefined,
      location: undefined
    },
    likes: 0,
    views: 0
  };
}
