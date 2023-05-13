import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './pages';

import { PourFamillesComponent } from './pages/pour-familles/pour-familles.component';
import { AProposComponent, ConseilComponent, FaqComponent, MeditationsComponent, MotPasteurComponent, ReunionsComponent } from './pages/a-propos';
import { ContactComponent } from './pages/contact/contact.component';
import { CentreStRobertComponent } from './pages/centre-st-robert/centre-st-robert.component';
import { ErrorNotfoundComponent } from './pages/error-notfound/error-notfound.component';
import { MembresComponent } from './pages/membres/membres.component';

const routes: Routes = [
  { path: '', component: AccueilComponent },
  
  // Accueil
  { path: 'accueil', component: AccueilComponent },

  // Pour les familles
  { path: 'famille', component: PourFamillesComponent },
  
  // À Propos
  { path: 'a-propos', component: AProposComponent },
  { path: 'a-propos/mot-du-pasteur', component: MotPasteurComponent },
  { path: 'a-propos/reunions', component: ReunionsComponent },
  { path: 'a-propos/conseil', component: ConseilComponent },
  { path: 'a-propos/meditation', component: MeditationsComponent },
  { path: 'a-propos/faq', component: FaqComponent },
  
  // Centre St-Robert
  { path: 'centre-st-robert', component: CentreStRobertComponent },
  
  // Contact
  { path: 'contact', component: ContactComponent },

  // Membres
  { path: 'membres', component: MembresComponent },

  { path: '**', component: ErrorNotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }