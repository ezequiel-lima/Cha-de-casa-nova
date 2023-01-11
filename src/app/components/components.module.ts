import { FormsModule } from '@angular/forms';
import { CustomFilter } from './order-list/custom.filter';
import { OrderStatusBadgeComponent } from './order-status-badge/order-status-badge.component';
import { OrderListComponent } from './order-list/order-list.component';
import { UserCardComponent } from './user-card/user-card.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MonthlySalesChartComponent } from './monthly-sales-chart/monthly-sales-chart.component';
import { LoadingComponent } from './loading/loading.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [
    LoadingComponent,
    MonthlySalesChartComponent,
    NavbarComponent,
    UserCardComponent,
    OrderListComponent,
    OrderStatusBadgeComponent,
    CustomFilter
  ],
  imports: [
    CommonModule,
    IonicModule.forRoot(),
    FormsModule
  ],
  exports: [
    LoadingComponent,
    MonthlySalesChartComponent,
    NavbarComponent,
    UserCardComponent,
    OrderListComponent,
    OrderStatusBadgeComponent,
    CustomFilter
  ]
})
export class ComponentsModule { }
