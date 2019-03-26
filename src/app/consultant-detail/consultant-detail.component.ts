import { Consultant } from './../consultant';
import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-consultant-detail',
  templateUrl: './consultant-detail.component.html',
  styleUrls: ['./consultant-detail.component.css']
})
export class ConsultantDetailComponent implements OnInit {
  @Input() consultant: Consultant = new Consultant();
  constructor(public activeModal: NgbActiveModal) {
    // customize default values of modals used by this component tree
    this.activeModal = activeModal;
  }

  closeModal() {
    this.activeModal.close('Modal Closed');
  }
  ngOnInit() {
  }

}
