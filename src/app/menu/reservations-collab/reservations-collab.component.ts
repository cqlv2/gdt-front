import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'; 
import { Covoiturage } from '../../mock/mock-reservations'
import { AuthService } from 'src/app/auth/auth.service';
import { ReservationCollabService } from './reservations-collab.service'
import { ReservationsCollabModal } from '../../modals/reservations-collab-modal/reservations-collab.modal';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations-collab.component.html',
  styleUrls: ['./reservations-collab.component.scss']
})

export class ReservationsCollabComponent implements OnInit {

  list: Covoiturage[] = [];
  listHist: Covoiturage[] = [];
  p: number = 1;
  today = new Date();


  constructor(private srv: AuthService, private dataSrv: ReservationCollabService, private modalService: NgbModal) { }

  ngOnInit(): void {
    if (localStorage.getItem('status') != 'Collaborateur') {
      this.srv.secuRoute()
    }
    this.dataSrv.listerResaCovoit().subscribe((element: Covoiturage[]) => 
      element.forEach((covoit: Covoiturage) => {
        if(new Date(covoit.date).getTime()>this.today.getTime()){
          return this.list.push(covoit)
        } else {
          return this.listHist.push(covoit)
        }
      })
    );
  }

  afficherDetails(covoit: Covoiturage){
    this.dataSrv.covoiturageCourant = covoit;
    this.modalService.open(ReservationsCollabModal, { centered: true });
  }

}
