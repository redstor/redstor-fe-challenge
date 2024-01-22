import 'zone.js/plugins/zone-error';
import { IEnvironment } from '@environments/environment.model';

export const environment: IEnvironment = {
  production: false,
  unsplashAccessKey: process.env['UNSPLASH_ACCESS_KEY']!
};
