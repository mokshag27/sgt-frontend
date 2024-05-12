import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { APP_CONSTANTS } from '../shared/constants/app.constants';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private http: HttpClient, private cookieService: CookieService) {}

  CartDataService!: any;
  CartDataOfPackage!: any;

  getCategories(): Observable<any> {
    return this.http.get(APP_CONSTANTS.BACKEND_URL + 'categories');
  }
  getSubCategories(slug: number): Observable<any> {
    return this.http.get(APP_CONSTANTS.BACKEND_URL + 'subcategories/' + slug);
  }
  getPackages(category_id: number): Observable<any> {
    console.log(category_id);
    return this.http.get(
      APP_CONSTANTS.BACKEND_URL + 'super-saver-packs/' + category_id
    );
  }

  getServicesOfSub(subcategoryId: number): Observable<any> {
    return this.http.get(
      APP_CONSTANTS.BACKEND_URL + 'services/' + subcategoryId
    );
  }
  addToCartOfpackage(
    userid: number,
    package_id: number,
    quantity: number
  ): Observable<any> {
    let body = {
      userid: userid,
      package_id: package_id,
      quantity: quantity,
    };
    console.log('control aaya');
    return this.http.post(
      APP_CONSTANTS.BACKEND_URL + 'addToCartOfPackage',
      body
    );
  }

  addToCartOfService(
    userid: number,
    ourservices_id: number,
    quantity: number
  ): Observable<any> {
    let body = {
      userid: userid,
      service_id: ourservices_id,
      quantity: quantity,
    };
    return this.http.post(
      APP_CONSTANTS.BACKEND_URL + 'addToCartOfService',
      body
    );
  }

  getCartDataService(userid: number): Observable<any> {
    let body = {
      userid: userid,
    };
    return this.http.post(
      APP_CONSTANTS.BACKEND_URL + 'getCartDataService',
      body
    );
  }

  getCartDataOfPackage(userid: number): Observable<any> {
    let body = {
      userid: userid,
    };
    return this.http.post(
      APP_CONSTANTS.BACKEND_URL + 'getCartDataOfPackage',
      body
    );
  }

  deleteService(id: number): Observable<any> {
    let body = {
      id: id,
    };
    return this.http.post(APP_CONSTANTS.BACKEND_URL + 'deleteService', body);
  }

  deletePackage(id: number): Observable<any> {
    let body = {
      id: id,
    };
    return this.http.post(APP_CONSTANTS.BACKEND_URL + 'deletePackage', body);
  }

  getBill(userid: number): Observable<any> {
    let body = {
      userid: userid,
    };
    return this.http.post(APP_CONSTANTS.BACKEND_URL + 'getBill', body);
  }

  bookServices(userid: number): Observable<any> {
    let body = {
      userid: userid,
    };
    return this.http.post(APP_CONSTANTS.BACKEND_URL + 'bookServices', body);
  }
  setTimer(cart_id: number, date_time: any) {
    let body = {
      userid: 5,
      cart_id: cart_id,
      date_time: date_time,
    };
    console.log('Sending..');
    return this.http.post(APP_CONSTANTS.BACKEND_URL + 'setTimer', body);
  }

  getWorkers() {
    return this.http.get(APP_CONSTANTS.BACKEND_URL + 'getWorkers');
  }
  register(body: any): Observable<any> {
    return this.http.post(APP_CONSTANTS.BACKEND_URL + 'user', body);
  }
  login(body: any): Observable<any> {
    return this.http.post(APP_CONSTANTS.BACKEND_URL + 'login', body);
  }
}
