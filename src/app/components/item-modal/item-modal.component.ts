import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-item-modal',
  templateUrl: './item-modal.component.html',
  styleUrls: ['./item-modal.component.scss'],
})
export class ItemModalComponent implements OnInit {
  @Input() item: any;
  public inputValue: string = '';

  ngOnInit(): void {
  }

  constructor(private modalController: ModalController) {}

  confirm() {
    this.modalController.dismiss(this.inputValue, 'confirm');
  }

  cancel() {
    this.modalController.dismiss(null, 'cancel');
  }
}
