import { Consultant } from './../consultant';
import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { NgForm, FormGroup, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-consultant-detail',
  templateUrl: './consultant-detail.component.html',
  styleUrls: ['./consultant-detail.component.css']
})
export class ConsultantDetailComponent implements OnInit {
  @Input() consultant: Consultant ;
  myForm: FormGroup;
  constructor(public activeModal: NgbActiveModal, private formBuilder: FormBuilder) {
    // customize default values of modals used by this component tree
    this.activeModal = activeModal;
  }

  ngOnInit() {
    this.createForm();
    console.log(this.consultant);
  }

  private createForm() {
    this.myForm = this.formBuilder.group({
     //id: this.consultant.id,
      lastname: this.consultant.lastname,
      firstname: this.consultant.firstname,
      phoneNumber: this.consultant.phoneNumber,
      email: this.consultant.email
    });
  }

  closeModal() {
    this.activeModal.close("Modal Closed");
  }

  submitForm() {
    console.log('form has been submitted');
    this.activeModal.close(this.myForm.value);
  }
}
