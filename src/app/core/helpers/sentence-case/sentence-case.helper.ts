import { Injectable } from '@angular/core';

interface IRSSentenceCaseHelper {
  getValue(value: string, args: any[]): string;
}

@Injectable()
export class RSSentenceCaseHelper implements IRSSentenceCaseHelper
{
  getValue(value: string, args: any[])
  {
    try {
      return value.charAt(0)?.toUpperCase() + value.slice(1)
    } catch (error) {
      return value;
    }
  }
}
