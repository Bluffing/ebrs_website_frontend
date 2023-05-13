import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DropdownlistComponent } from './shared';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';

import { AccueilComponent } from './pages';

import { PourFamillesComponent } from './pages/pour-familles/pour-familles.component';
import { AProposComponent, ConseilComponent, FaqComponent, MeditationsComponent, MotPasteurComponent, ReunionsComponent } from './pages/a-propos';
import { CentreStRobertComponent } from './pages/centre-st-robert/centre-st-robert.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ErrorNotfoundComponent } from './pages/error-notfound/error-notfound.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MembresComponent } from './pages/membres/membres.component';
import { CarouselComponent } from './shared/carousel/carousel.component';
import { HomeCircleComponent } from './shared/home/home-circle/home-circle.component';
import { HomeRectangleComponent } from './shared/home/home-rectangle/home-rectangle.component';
import { HomeCalendarComponent } from './shared/home/home-calendar/home-calendar.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    DropdownlistComponent,
    PourFamillesComponent,
    NavBarComponent,
    MotPasteurComponent,
    ReunionsComponent,
    ConseilComponent,
    MeditationsComponent,
    FaqComponent,
    CentreStRobertComponent,
    AProposComponent,
    ContactComponent,
    ErrorNotfoundComponent,
    FooterComponent,
    MembresComponent,
    HomeCircleComponent,
    HomeRectangleComponent,
    HomeCalendarComponent
  ],
  imports: [BrowserModule, NgbModule, AppRoutingModule, CarouselComponent, CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory })],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
