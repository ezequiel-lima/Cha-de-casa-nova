import { DataService } from './../../services/data.service';
import { NavController } from '@ionic/angular';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss'],
})
export class OrderListComponent implements OnInit {
  @Input() skip = 0;
  @Input() take = 5;
  @Input() search = '';
  @Input() status = ['confirmed'];
  public orders: any[] = [];
  public term: string = '';

  constructor(private navCtrl: NavController, private service: DataService) {}

  ngOnInit() {
    this.service.getOrders().subscribe((res: any) => {
      this.orders = res;
    });
  }

  goToOrder(order: any) {
    this.navCtrl.navigateRoot(`/orders/${order}`);
  }

}
