import { Router } from '@angular/router';
import { Component, NgZone, ViewChild } from '@angular/core';
import { ModalController, IonButtons, IonModal, NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Itens } from 'src/app/models/itens-model';
import { DataService } from 'src/app/services/data.service';
import { OverlayEventDetail } from '@ionic/core/components';
import { ItensName } from 'src/app/models/itensName-model';
import { ItemModalComponent } from 'src/app/components/item-modal/item-modal.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public form: FormGroup;
  public term: string = '';
  public itens$!: Observable<Itens[]>;

  constructor(
    private modalController: ModalController,
    private data: DataService,
    private router: Router,
    private ngZone: NgZone,
    private formBuilder: FormBuilder) {
      this.form = this.formBuilder.group({
        itemName: ['', Validators.compose([
          Validators.minLength(3),
          Validators.maxLength(180),
          Validators.required
        ])],
      });
    }

  ngOnInit(): void {
    this.carregarItens();
  }

  carregarItens() {
    this.itens$ = this.data.getAllItens();
  }

  async presentModal(item: Itens) {
    const modal = await this.modalController.create({
      component: ItemModalComponent,
      componentProps: {
        item: item
      }
    });

    modal.onDidDismiss().then((detail: OverlayEventDetail) => {
      if (detail.role === 'confirm') {
        const inputValue = detail.data;
        if (inputValue && inputValue.trim() !== '') {
          // O texto do input não está vazio ou nulo
          const newItemName = new ItensName();
          newItemName.name = inputValue;

          item.itensName.push(newItemName);

          this.data.updateItem(item).subscribe((data: any) => {

            this.ngZone.run(() => {
              this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
                this.router.navigate([this.router.url]);
              });
            });
            Swal.fire({
              title: 'Obrigado pelo presente' + item.description,
              text: 'Para sua maior comodidade, escolha na loja de sua preferência',
              icon: 'success',
              confirmButtonColor: '#F3BAAD',
              focusConfirm: false
              });
            this.carregarItens();
          });
        } else {
          // O texto do input está vazio ou nulo
          console.log('O texto do input está vazio ou nulo');
          // Aqui você pode exibir uma mensagem de erro ou realizar alguma ação adequada.
        }
      }
    });

    return await modal.present();
  }
}
