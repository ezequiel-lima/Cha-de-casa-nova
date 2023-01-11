import { SecurityUtil } from './../../utils/security.util';
import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../models/user.model';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
})
export class UserCardComponent implements OnInit {
  public user: any = null;

  constructor(private navCtrl: NavController) {}

  ngOnInit() {
    this.user = SecurityUtil.get();
  }

  logout() {
    SecurityUtil.clear();
    this.navCtrl.navigateRoot('/login');
  }
}
