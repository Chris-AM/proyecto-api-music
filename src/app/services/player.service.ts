import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import _ from 'lodash';
import { ENDPOINTS } from '../shared/endpoints/endpoints';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  
  constructor(private http: HttpClient) { }

  fetchTracks () {
    let baseUrl = _.get(ENDPOINTS, "URL.BASE_URL");
    console.log(baseUrl);
    return this.http.get(baseUrl);
  }
}
