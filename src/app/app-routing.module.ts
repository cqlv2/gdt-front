import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TechComponent} from './tech/tech.component';
import {StatutConnecteService} from './auth/statut-connecte.service';
import {AuthComponent} from './auth/auth.component';
import { ChauffeursAdminComponent } from './menu/chauffeurs-admin/chauffeurs-admin.component';
import { OccupationChauffeurComponent } from './menu/occupation-chauffeur/occupation-chauffeur.component';
import { PlanningChauffeurComponent } from './menu/planning-chauffeur/planning-chauffeur.component';
import { StatistiquesCollabComponent } from './menu/statistiques-collab/statistiques-collab.component';
import { AnnoncesCollabComponent } from './menu/annonces-collab/annonces-collab.component';
import { ReservationsCollabComponent } from './menu/reservations-collab/reservations-collab.component';
import { PageCollabComponent } from './pages/page-collab/page-collab.component';
import { PageChauffeurComponent } from './pages/page-chauffeur/page-chauffeur.component';
import { PageAdminComponent } from './pages/page-admin/page-admin.component';
import { StatistiquesAdminComponent } from './menu/statistiques-admin/statistiques-admin.component';


const routes: Routes =  [
  { path: 'tech', component: TechComponent, canActivate: [StatutConnecteService]}, // /tech accessible uniquement si connecté
  { path: 'connexion', component: AuthComponent },
  { path: 'collaborateur/reservations', component: ReservationsCollabComponent, canActivate: [StatutConnecteService]},
  { path: 'collaborateur/annonces', component: AnnoncesCollabComponent, canActivate: [StatutConnecteService]},
  { path: 'collaborateur/statistiques', component: StatistiquesCollabComponent, canActivate: [StatutConnecteService]},
  { path: 'chauffeur/planning', component: PlanningChauffeurComponent, canActivate: [StatutConnecteService]},
  { path: 'chauffeur/occupation', component: OccupationChauffeurComponent, canActivate: [StatutConnecteService]},
  { path: 'administrateur/chauffeurs', component: ChauffeursAdminComponent, canActivate: [StatutConnecteService]},
  { path: 'administrateur/statistiques', component: StatistiquesAdminComponent, canActivate: [StatutConnecteService]},
  { path: 'collaborateur', component: PageCollabComponent, canActivate: [StatutConnecteService]},
  { path: 'chauffeur', component: PageChauffeurComponent, canActivate: [StatutConnecteService]},
  { path: 'administrateur', component: PageAdminComponent, canActivate: [StatutConnecteService]},
  { path: '', redirectTo: '/tech', pathMatch: 'full'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }