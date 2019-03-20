import { CONSULTANT } from './../mock-consultant';
import { Consultant } from './../consultant';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consultant',
  templateUrl: './consultant.component.html',
  styleUrls: ['./consultant.component.css']
})
export class ConsultantComponent implements OnInit {

  consultants = CONSULTANT;

  constructor() { }

  ngOnInit() {
  }


}
