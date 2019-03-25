import { Consultant } from './../consultant';
import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-consultant-detail',
  templateUrl: './consultant-detail.component.html',
  styleUrls: ['./consultant-detail.component.css']
})
export class ConsultantDetailComponent implements OnInit {

  @Input() consultant: Consultant;

  constructor() { }

  ngOnInit() {
  }

}