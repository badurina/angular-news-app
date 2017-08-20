import { SOURCES } from './../mocks/mocks';
import { Injectable } from '@angular/core';

@Injectable()
export class SourcesService {

  constructor() { }

  getSources() {
    return SOURCES;
  }
}
