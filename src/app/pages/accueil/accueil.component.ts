import { Component } from '@angular/core';
import { HomeLink } from 'src/app/entites/home-links';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent {
  carouselOverlayText = 'Louons le Seigneur tous les dimanches à 10h30 au 701 Rue Duhamel. Bienvenue à tous';

  rectangles = [
    new HomeLink("http://www.ebrs.ca/wp-content/uploads/2015/03/img_Nos_message.jpg", "evenements", "Nos événements"),
    new HomeLink("http://www.ebrs.ca/wp-content/uploads/2015/03/img_Cours_de_formation.jpg", "cours-de-formation", "Cours de formation"),
    new HomeLink("http://www.ebrs.ca/wp-content/uploads/2015/03/img_Faire_don.jpg", "don", "Don")
  ];

  circles = [
    new HomeLink("http://www.ebrs.ca/wp-content/uploads/2015/03/thestory-2.png", "https://thestoryfilm.com/watch/fr", "L'histoire"),
    new HomeLink("http://www.ebrs.ca/wp-content/uploads/2015/03/1ensbib-e1429652376335.jpeg", "a-propos", "À propos"),
    new HomeLink("http://www.ebrs.ca/wp-content/uploads/2015/03/img_Nos_message.jpg", "autres-ressources", "Adoration")
  ];
}