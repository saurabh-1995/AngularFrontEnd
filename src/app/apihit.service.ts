import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from '../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApihitService {

  constructor(private httpClient:HttpClient) { }
  getData():Observable<any>{
    return this.httpClient.get("https://localhost:44392/api/values");
  }
}
