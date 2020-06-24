import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpResponse, HttpHeaderResponse, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable()
export class OwnersService {
    
    constructor(private _apiService: ApiService, private readonly _httpClient: HttpClient){}

    getAll(): Observable<any>{
        return this._apiService.get('shop/owners');
    }

    addNewOwner(ownerObject: any): Observable<any>{
        return this._apiService.post('shop/owners/', ownerObject);
    }
    
    deleteOwner(ownerID: number): Observable<any>{
        return this._apiService.delete(ownerID, 'shop/owners');
    }
}
