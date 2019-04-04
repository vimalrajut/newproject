import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { providerProperty } from '../_util/urlConf';
import { DataService } from '../_util/dataServices'

@Injectable()
export class AuthenticationService {

    baseUrl = providerProperty.PROTOCOL+providerProperty.API_URL+providerProperty.PORT;

    constructor(private http: HttpClient,private dataServices:DataService) { }

    login(userDetails) {

        return this.http.get(this.baseUrl + providerProperty.login,{ headers: { 'Authorization': 'Basic ' + btoa(userDetails.eMail + ":" + userDetails.password) } })
            .pipe(map(dashboardDetails => {
                console.log("************************8",dashboardDetails);
                 localStorage.setItem('currentUser', JSON.stringify(userDetails));

                 this.dataServices.setDashboardData(dashboardDetails);




                return dashboardDetails;
            }));
    }

    logout() {
        this.http.get(this.baseUrl+providerProperty.logout);
        localStorage.removeItem('currentUser');
        localStorage.removeItem('isLoggedIn');
        this.dataServices.changeAppStatus(false);
    }
}