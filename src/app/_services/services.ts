import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {forkJoin} from 'rxjs';

import { providerProperty } from '../_util/urlConf';

@Injectable()
export class Service {

    baseUrl = providerProperty.PROTOCOL+providerProperty.API_URL+providerProperty.PORT;
    constructor(private http: HttpClient) { }

    getDashBoardDetails() {
        return this.http.get(this.baseUrl+providerProperty.getDashBoardDetails);
    }
}