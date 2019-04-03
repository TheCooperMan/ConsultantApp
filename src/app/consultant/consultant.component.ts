import { ConsultantDetailComponent } from "./../consultant-detail/consultant-detail.component";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { CONSULTANT } from "./../mock-consultant";
import { Consultant } from "./../consultant";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'app-consultant',
  templateUrl: './consultant.component.html',
  styleUrls: ['./consultant.component.css']
})
export class ConsultantComponent implements OnInit {
  consultants = CONSULTANT;
  selectedConsultant: Consultant;
  public searchString: string;

  openEditModal(consultant: Consultant): void {
    const modalRef = this.modalService.open(ConsultantDetailComponent);
    modalRef.componentInstance.consultant = consultant;
    //console.log(consultant);
    modalRef.result.then((result) => {
      console.log(result);
      if (result!="Modal Closed")
      {
        console.log(consultant);
        consultant.firstname = result.firstname;
        consultant.lastname = result.lastname;
        consultant.phoneNumber = result.phoneNumber;
        consultant.email= result.email;
      }

    }).catch((error) => {
      console.log(error);
    });

  }

  openAddModal(): void {
    const modalRef = this.modalService.open(ConsultantDetailComponent);
    modalRef.result
      .then(result => {
        console.log(result);
      })
      .catch(error => {
        console.log(error);
      });
  }

  onDelete(consultant: Consultant): void {

    console.log('Consultant Was Deleted');
    for(let i = 0; i < this.consultants.length; ++i){
      if (this.consultants[i].id === consultant.id) {
          this.consultants.splice(i,1);
      }
  }
  }

  onAdd() {
    console.log('Client est ajouté!');
  }
  constructor(private modalService: NgbModal) {}

  ngOnInit() {}
}
