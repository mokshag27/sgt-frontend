import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { APP_CONSTANTS } from '../shared/constants/app.constants';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http:HttpClient,private cookieService:CookieService) 
  {

  }


  
  getCategories():Observable<any>
  {

    return this.http.get(APP_CONSTANTS.BACKEND_URL +'categories');
  }

}
