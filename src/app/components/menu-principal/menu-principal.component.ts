import { Component, inject } from '@angular/core';
import { IonHeader, IonToolbar, IonButtons, IonButton, IonIcon, NavController } from '@ionic/angular';
import { addIcons } from 'ionicons';
import {
  homeOutline,
  handLeftOutline,
  imagesOutline,
  newspaperOutline,
  logInOutline,
} from 'ionicons/icons';

@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.component.html',
  styleUrls: ['./menu-principal.component.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonButtons, IonButton, IonIcon],
})
export class MenuPrincipalComponent {
  private navCtrl = inject(NavController);

  constructor() {
    addIcons({ homeOutline, handLeftOutline, imagesOutline, newspaperOutline, logInOutline });
  }

  ir(ruta: string): void {
    this.navCtrl.navigateRoot(ruta);
  }
}