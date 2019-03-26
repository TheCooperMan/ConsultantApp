import { ConsultantDetailComponent } from "./../consultant-detail/consultant-detail.component";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { CONSULTANT } from "./../mock-consultant";
import { Consultant } from "./../consultant";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-consultant",
  templateUrl: "./consultant.component.html",
  styleUrls: ["./consultant.component.css"]
})
export class ConsultantComponent implements OnInit {
  consultants = CONSULTANT;
  selectedConsultant: Consultant;

  onSelect(): void {
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
    console.log("Consultant Was Deleted");
  }

  onAdd() {
    console.log("Client est ajouté!");
  }
  constructor(private modalService: NgbModal) {}

  ngOnInit() {}
}
