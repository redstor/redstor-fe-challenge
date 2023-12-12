import { IPhoto } from '@app/interfaces';

export const mockPhoto: IPhoto = {
  id: 'photo1',
  width: 800,
  height: 600,
  color: '#ABCDEF',
  description: 'Mock Description',
  alt_description: 'Mock Alt Description',
  urls: {
    raw: 'https://example.com/raw-photo1.jpg',
    full: 'https://example.com/full-photo1.jpg',
    regular: 'https://example.com/regular-photo1.jpg',
    small: 'https://example.com/small-photo1.jpg',
    thumb: 'https://example.com/thumb-photo1.jpg',
    small_s3: 'https://example.com/small-s3-photo1.jpg'
  },
  links: {
    self: 'https://api.unsplash.com/photos/photo1',
    html: 'https://unsplash.com/photos/photo1',
    download: 'https://unsplash.com/photos/photo1/download',
    download_location: 'https://api.unsplash.com/photos/photo1/download'
  },
  user: {
    id: 'user1',
    username: 'mockuser',
    name: 'Mock User',
    first_name: 'Mock',
    last_name: 'User',
    profile_image: {
      large: 'https://example.com/profile/large.jpg',
      medium: 'https://example.com/profile/medium.jpg',
      small: 'https://example.com/profile/small.jpg'
    },
    portfolio_url: 'https://mockuserportfolio.com',
    location: 'Mock Location'
  },
  likes: 42,
  views: 100
};

const mockPhoto2: IPhoto = {
  id: 'photo2',
  width: 1024,
  height: 768,
  color: '#D0E1F9',
  description: 'Beautiful landscape with mountains in the background',
  alt_description: 'Mountainous landscape',
  urls: {
    raw: 'https://example.com/raw-photo2.jpg',
    full: 'https://example.com/full-photo2.jpg',
    regular: 'https://example.com/regular-photo2.jpg',
    small: 'https://example.com/small-photo2.jpg',
    thumb: 'https://example.com/thumb-photo2.jpg',
    small_s3: 'https://example.com/small-s3-photo2.jpg'
  },
  links: {
    self: 'https://api.unsplash.com/photos/photo2',
    html: 'https://unsplash.com/photos/photo2',
    download: 'https://unsplash.com/photos/photo2/download',
    download_location: 'https://api.unsplash.com/photos/photo2/download'
  },
  user: {
    id: 'user2',
    username: 'landscapephotographer',
    name: 'Jane Doe',
    first_name: 'Jane',
    last_name: 'Doe',
    profile_image: {
      large: 'https://example.com/profile/jane-large.jpg',
      medium: 'https://example.com/profile/jane-medium.jpg',
      small: 'https://example.com/profile/jane-small.jpg'
    },
    portfolio_url: 'https://janedoe-photography.com',
    location: 'New Zealand'
  },
  likes: 150,
  views: 1000
};

const mockPhoto3: IPhoto = {
  id: 'photo3',
  width: 1280,
  height: 720,
  color: '#F3F4F5',
  description: 'Urban skyline at night',
  alt_description: 'City lights at night',
  urls: {
    raw: 'https://example.com/raw-photo3.jpg',
    full: 'https://example.com/full-photo3.jpg',
    regular: 'https://example.com/regular-photo3.jpg',
    small: 'https://example.com/small-photo3.jpg',
    thumb: 'https://example.com/thumb-photo3.jpg',
    small_s3: 'https://example.com/small-s3-photo3.jpg'
  },
  links: {
    self: 'https://api.unsplash.com/photos/photo3',
    html: 'https://unsplash.com/photos/photo3',
    download: 'https://unsplash.com/photos/photo3/download',
    download_location: 'https://api.unsplash.com/photos/photo3/download'
  },
  user: {
    id: 'user3',
    username: 'citynightscapes',
    name: 'John Smith',
    first_name: 'John',
    last_name: 'Smith',
    profile_image: {
      large: 'https://example.com/profile/john-large.jpg',
      medium: 'https://example.com/profile/john-medium.jpg',
      small: 'https://example.com/profile/john-small.jpg'
    },
    portfolio_url: 'https://johnsmith-photography.com',
    location: 'Tokyo, Japan'
  },
  likes: 200,
  views: 1200
};

export const mockPhotos: IPhoto[] = [mockPhoto, mockPhoto2, mockPhoto3];
