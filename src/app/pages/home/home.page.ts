import { Component } from '@angular/core';
import { AlertController, IonButtons } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public term: string = '';

  constructor(private alertController: AlertController) {}

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Você tem certeza?',
      buttons: [
        {
          text: 'Sim',
          handler: () => {
            //this.startTimer();
            console.log('Add time Okay');
          }
        },
        {
          text: 'Não',
        },
      ],
    });

    await alert.present();
  }

}
