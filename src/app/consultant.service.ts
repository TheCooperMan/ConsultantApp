import { Consultant } from './consultant';
import { CONSULTANT } from './mock-consultant';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConsultantService {

  getConsultants(): Consultant[] {
    return CONSULTANT;
  }
  constructor() { }
}
