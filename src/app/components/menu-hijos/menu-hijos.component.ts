import { Component, Input, inject } from '@angular/core';
import { IonFooter, IonToolbar, IonButtons, IonButton, NavController } from '@ionic/angular';

@Component({
  selector: 'app-menu-hijos',
  templateUrl: './menu-hijos.component.html',
  styleUrls: ['./menu-hijos.component.scss'],
  standalone: true,
  imports: [IonFooter, IonToolbar, IonButtons, IonButton],
})
export class MenuHijosComponent {
  @Input() base = '';
  private navCtrl = inject(NavController);

  ir(hijo: string): void {
  this.navCtrl.navigateRoot(`/${this.base}/${hijo}`);
}
}