import { StatusUtil } from './../../../utils/status.util';
import { SecurityUtil } from './../../../utils/security.util';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-orders-details',
  templateUrl: './orders-details.page.html',
  styleUrls: ['./orders-details.page.scss'],
})
export class OrdersDetailsPage implements OnInit {
  public order: any = null;

  constructor(private route: ActivatedRoute, private service: DataService) {}

  ngOnInit() {
    let number = this.route.snapshot.paramMap.get('number') || '';

    this.service.getOrder(number).subscribe((data) => {
      this.order = data;
    });
  }

  isManager(): boolean {
    return SecurityUtil.isInRole('manager');
  }

  translateOrderStatus(status: string) {
    return StatusUtil.convert(status);
  }
}
