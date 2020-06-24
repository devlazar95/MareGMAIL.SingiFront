import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpResponse, HttpHeaderResponse, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable()
export class CategoriesService {
    
    constructor(private _apiService: ApiService, private readonly _httpClient: HttpClient){}

    getAll(): Observable<any>{
        return this._apiService.get('shop/categories');
    }
}
