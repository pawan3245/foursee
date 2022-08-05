import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { TokenStorageService } from './token-storage.service';
import { CompanyData } from '../models/company'
const AUTH_API = environment.apiURL;
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}
@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient, private tokenStorage: TokenStorageService) {
    console.log(this.tokenStorage.getToken())
   }
  loadCompany(): Observable<CompanyData> {
    return this.http.post<CompanyData>(AUTH_API + 'get/company', httpOptions);
  }
}
