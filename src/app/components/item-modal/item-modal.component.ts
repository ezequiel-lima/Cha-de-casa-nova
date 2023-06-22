import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-item-modal',
  templateUrl: './item-modal.component.html',
  styleUrls: ['./item-modal.component.scss'],
})
export class ItemModalComponent implements OnInit {
  @Input() item: any;
  public form!: FormGroup;
  public inputValue: string = '';
  public submitted: boolean = false; // Add the submitted property

  constructor(
    private modalController: ModalController,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      inputValue: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(180),
        Validators.required
      ])]
    });
  }

  confirm() {
    this.submitted = true; // Set submitted to true

    if (this.form.valid) {
      const inputValue = this.form.value.inputValue;
      this.modalController.dismiss(inputValue, 'confirm');
    } else {
      console.log('O formulário contém erros');
      // Exibir mensagem de erro ou realizar ação adequada
    }
  }

  cancel() {
    this.modalController.dismiss(null, 'cancel');
  }
}
