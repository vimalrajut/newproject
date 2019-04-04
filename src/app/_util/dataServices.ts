import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { dashBoardDetails } from '../_model/dashBoardDetails';

@Injectable()
export class DataService {

  private isLoggedIn = new BehaviorSubject(this.getLocalStorage('isLoggedIn'));
  currentStatus = this.isLoggedIn.asObservable();

  private dashboardDataObr = new BehaviorSubject(new dashBoardDetails())
  dashBoardDataObrData = this.dashboardDataObr.asObservable();
  constructor() { }

  changeAppStatus(status: boolean) {
    this.isLoggedIn.next(status)
  }

  setLocalStorage(key,value){
    localStorage.setItem(key,value);
  }

  getLocalStorage(key):boolean{
    return localStorage.getItem(key)=="true";
  }

  setDashboardData(dashboardData) {
    this.dashboardDataObr.next(dashboardData)
  }

}