import { Injectable } from '@angular/core';
import { School } from './school'
import { SCHOOLS } from './schools-local'


@Injectable({
  providedIn: 'root'
})
export class SchoolService {

  constructor() { }

  getSchools(): School[] {
    return SCHOOLS;
  }
}
