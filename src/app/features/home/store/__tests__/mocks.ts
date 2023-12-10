import { ICollection } from '@app/interfaces';
import { ApiResponse } from 'unsplash-js/dist/helpers/response';

export const mockCollection: ICollection = {
  id: 962396,
  title: 'Cocktails',
  published_at: new Date('2023-12-10T09:16:38Z'),
  total_photos: 546,
  cover_photo: {
    views: 0,
    id: '0KDzNOxv4Cc',
    width: 4160,
    height: 6240,
    color: '#f3f3d9',
    description: '',
    alt_description: 'a table topped with glasses of wine and cheese',
    urls: {
      raw: 'https://images.unsplash.com/photo-1639048759545-07cdc2fc63e2?ixlib=rb-4.0.3',
      full: 'https://images.unsplash.com/photo-1639048759545-07cdc2fc63e2?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb',
      regular:
        'https://images.unsplash.com/photo-1639048759545-07cdc2fc63e2?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max',
      small:
        'https://images.unsplash.com/photo-1639048759545-07cdc2fc63e2?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max',
      thumb:
        'https://images.unsplash.com/photo-1639048759545-07cdc2fc63e2?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max',
      small_s3: 'https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1639048759545-07cdc2fc63e2'
    },
    links: {
      self: 'https://api.unsplash.com/photos/a-table-topped-with-glasses-of-wine-and-cheese-0KDzNOxv4Cc',
      html: 'https://unsplash.com/photos/a-table-topped-with-glasses-of-wine-and-cheese-0KDzNOxv4Cc',
      download: 'https://unsplash.com/photos/0KDzNOxv4Cc/download',
      download_location: 'https://api.unsplash.com/photos/0KDzNOxv4Cc/download'
    },
    likes: 421,
    user: {
      id: 'UF1Rf2HTwFQ',
      username: 'lepetale',
      name: 'Le Petale Studio',
      first_name: 'Le Petale',
      last_name: 'Studio',
      portfolio_url: 'https://www.lepetalestudio.com',
      location: '',
      profile_image: {
        small: 'https://images.unsplash.com/profile-1639048551628-d1dee4c46b20image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32',
        medium: 'https://images.unsplash.com/profile-1639048551628-d1dee4c46b20image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64',
        large: 'https://images.unsplash.com/profile-1639048551628-d1dee4c46b20image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128'
      }
    }
  }
};

export const mockApiResponseSuccess: ApiResponse<{
  results: ICollection[];
  total: number;
}> = {
  originalResponse: {
    headers: {
      append: function (name: string, value: string): void {},
      delete: function (name: string): void {},
      get: function (name: string): string | null {
        return null;
      },
      getSetCookie: function (): string[] {
        return [];
      },
      has: function (name: string): boolean {
        return true;
      },
      set: function (name: string, value: string): void {},
      forEach: function (callbackfn: (value: string, key: string, parent: Headers) => void, thisArg?: any): void {}
    },
    ok: false,
    redirected: false,
    status: 0,
    statusText: '',
    type: 'error',
    url: '',
    body: null,
    bodyUsed: false,
    clone: function (): Response {
      return {
        ok: true,
        redirected: false,
        status: 200,
        statusText: 'okay',
        url: '',
        headers: new Headers(),
        body: null,
        bodyUsed: false,
        blob: function () {
          return new Promise(() => '');
        },
        formData: function (): Promise<FormData> {
          return new Promise(() => '');
        },
        arrayBuffer: function (): Promise<ArrayBuffer> {
          return new Promise(() => '');
        },
        json: function (): Promise<any> {
          return new Promise(() => '');
        },
        text: function (): Promise<string> {
          return new Promise(() => '');
        },
        type: 'basic',
        clone: function (): Response {
          return new Response();
        }
      };
    },
    arrayBuffer: function (): Promise<ArrayBuffer> {
      return new Promise(() => '');
    },
    blob: function (): Promise<Blob> {
      return new Promise(() => '');
    },
    formData: function (): Promise<FormData> {
      return new Promise(() => '');
    },
    json: function (): Promise<any> {
      return new Promise(() => '');
    },
    text: function (): Promise<string> {
      return new Promise(() => '');
    }
  },
  type: 'success',
  status: 200,
  response: {
    results: [mockCollection],
    total: 1
  }
};

export const mockApiResponseFailure: ApiResponse<{
   results: ICollection[];
   total: number;
 }> = {
   originalResponse: {
     headers: {
       append: function (name: string, value: string): void {},
       delete: function (name: string): void {},
       get: function (name: string): string | null {
         return null;
       },
       getSetCookie: function (): string[] {
         return [];
       },
       has: function (name: string): boolean {
         return true;
       },
       set: function (name: string, value: string): void {},
       forEach: function (callbackfn: (value: string, key: string, parent: Headers) => void, thisArg?: any): void {}
     },
     ok: false,
     redirected: false,
     status: 0,
     statusText: '',
     type: 'error',
     url: '',
     body: null,
     bodyUsed: false,
     clone: function (): Response {
       return {
         ok: true,
         redirected: false,
         status: 200,
         statusText: 'okay',
         url: '',
         headers: new Headers(),
         body: null,
         bodyUsed: false,
         blob: function () {
           return new Promise(() => '');
         },
         formData: function (): Promise<FormData> {
           return new Promise(() => '');
         },
         arrayBuffer: function (): Promise<ArrayBuffer> {
           return new Promise(() => '');
         },
         json: function (): Promise<any> {
           return new Promise(() => '');
         },
         text: function (): Promise<string> {
           return new Promise(() => '');
         },
         type: 'basic',
         clone: function (): Response {
           return new Response();
         }
       };
     },
     arrayBuffer: function (): Promise<ArrayBuffer> {
       return new Promise(() => '');
     },
     blob: function (): Promise<Blob> {
       return new Promise(() => '');
     },
     formData: function (): Promise<FormData> {
       return new Promise(() => '');
     },
     json: function (): Promise<any> {
       return new Promise(() => '');
     },
     text: function (): Promise<string> {
       return new Promise(() => '');
     }
   },
   type: 'error',
   status: 200,
   errors: [''],
   source: 'api'
};
