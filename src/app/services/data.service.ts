import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Itens } from '../models/itens-model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public baseUrl = "https://localhost:7168/api/Itens";

  constructor(private http: HttpClient) { }

  public getAllItens() {
    return this.http.get<Itens[]>(`${this.baseUrl}`);
  }

  public updateItem(data: any) {
    return this.http.put(`${this.baseUrl}`, data);
  }

  public authenticate(data: any) {
    return this.http.post(`${this.baseUrl}/v1/login`, data);
  }

  public getMonthlySalesChartData() {
    return this.http.get(`${this.baseUrl}/v1/reports/ms`);
  }

  public getOrders() {
    return this.http.get(`${this.baseUrl}/v1/orders`);
  }

  public getOrder(order: string) {
    return this.http.get(`${this.baseUrl}/v1/orders/${order}`);
  }
}
