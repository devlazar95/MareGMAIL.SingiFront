import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpResponse, HttpHeaderResponse, HttpHeaders  } from "@angular/common/http";

import { Observable } from 'rxjs';

@Injectable()
export class ApiService {
  baseUrl = 'http://127.0.0.1:8000/';
  httpHeaders = new HttpHeaders({'Content-Type':'application/json'});
  constructor(private readonly _httpClient: HttpClient) { }

  get(endPointURL:string): Observable<any>{
    return this._httpClient.get(this.baseUrl+endPointURL);
  }

  // getByID(bookID: number, endPointURL: string){
  //   return this._httpClient.get(this.baseUrl+endPointURL+"/"+bookID);
  // }
}
