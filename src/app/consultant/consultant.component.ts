import { Consultant } from './../consultant';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-consultant',
  templateUrl: './consultant.component.html',
  styleUrls: ['./consultant.component.css']
})
export class ConsultantComponent implements OnInit {

  consultant: Consultant = {
    lastname: 'elfadli',
    firstname: 'ismail',
    email: 'm.ismailfadli@gmail.com',
    phoneNumber: 751505587
  }
  constructor() { }

  ngOnInit() {
  }


}
