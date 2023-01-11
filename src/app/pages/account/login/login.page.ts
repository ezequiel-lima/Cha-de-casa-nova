import { SecurityUtil } from './../../../utils/security.util';
import { UserModel } from '../../../models/user.model';
import { DataService } from './../../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import {
  LoadingController,
  NavController,
  ToastController,
} from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public hide = true;
  public form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private LoadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private navCtrl: NavController,
    private service: DataService
  ) {
    this.form = this.fb.group({
      username: ['', Validators.compose([Validators.required])],
      password: [
        '',
        Validators.compose([
          Validators.minLength(6),
          Validators.maxLength(20),
          Validators.required,
        ]),
      ],
    });
  }

  async submit() {
    if (this.form.invalid) return;

    const loading = await this.LoadingCtrl.create({
      message: 'Autenticando...',
    });
    loading.present();

    this.service.authenticate(this.form.value).subscribe(
      (res: any) => {
        SecurityUtil.set(res);
        loading.dismiss();
        this.navCtrl.navigateRoot('/home');
      },
      (err) => {
        this.showError('Usuário ou senha inválidos');
        loading.dismiss();
      }
    );
  }

  ngOnInit() {}

  toggleHide() {
    this.hide = !this.hide;
  }

  async showError(message: string) {
    const error = await this.toastCtrl.create({
      message: message,
      duration: 1000,
    });
    error.present();
  }

  async resetPassword() {
    if (this.form.controls['username'].invalid) {
      this.showError('Usuário inválido');
      return;
    }

    const loading = await this.LoadingCtrl.create({ message: 'Restaurando sua senha...' });
    loading.present();
  }

}
