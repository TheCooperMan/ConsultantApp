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
  selectedConsultant: Consultant;
  onSelect(consultant: Consultant): void {
  this.selectedConsultant = consultant;
}

onDelete(consultant: Consultant): void {
  console.log('Consultant Was Deleted');
}

onAdd() {
  console.log('Client est ajouté!');

}
  constructor() { }

  ngOnInit() {
  }


}
