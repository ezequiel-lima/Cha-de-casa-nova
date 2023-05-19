import { Router } from '@angular/router';
import { Component, NgZone } from '@angular/core';
import { AlertController, IonButtons, NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Itens } from 'src/app/models/itens-model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public term: string = '';
  public itens$!: Observable<Itens[]>;

  constructor(
    private alertController: AlertController,
    private data: DataService,
    private router: Router,
    private ngZone: NgZone) { }

  ngOnInit(): void {
    this.carregarItens();
  }

  carregarItens() {
    this.itens$ = this.data.getAllItens();
  }

  async presentAlert(item: Itens) {
    const alert = await this.alertController.create({
      header: 'Você tem certeza?',
      buttons: [
        {
          text: 'Sim',
          handler: () => {
            this.data.updateItem(item).subscribe((data: any) => {
              console.log('Update successful', data);
              this.ngZone.run(() => {
                this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
                  this.router.navigate([this.router.url]);
                });
              });
              this.carregarItens();
            });
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
