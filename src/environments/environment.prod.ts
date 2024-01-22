import { IEnvironment } from '@environments/environment.model';

export const environment: IEnvironment = {
  production: true,
  unsplashAccessKey: process.env['UNSPLASH_ACCESS_KEY']!
};
