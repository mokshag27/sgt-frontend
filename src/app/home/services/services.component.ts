import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CookieService } from 'ngx-cookie-service';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
})
export class ServicesComponent {
  slug!: any;
  PackageData!: any;
  serviceData!: any;
  constructor(
    private router: Router,
    private cookieservice: CookieService,
    private route: ActivatedRoute,
    private modalService: NgbModal,
    private http: HttpClient,
    private homeservice: HomeService
  ) {
    this.route.params.subscribe((value) => {
      this.slug = value['subcategory_id'];
      console.log(this.slug);
    });
  }

  ngOnInit() {
    this.getPackages(this.slug);
    this.getServicesOfSub(this.slug);
  }
  getPackages(slug: any) {
    this.homeservice.getPackages(this.slug).subscribe((data: any) => {
      console.log(data);
      this.PackageData = data;
      console.log(this.PackageData);
    });
  }
  getServicesOfSub(slug: any) {
    this.homeservice.getServicesOfSub(this.slug).subscribe((data: any) => {
      console.log(data);
      this.serviceData = data;
      console.log(this.serviceData);
    });
  }

  addToCartOfpackage(userid: number, package_id: number, quantity: number) {
    console.log(package_id)
    this.homeservice
      .addToCartOfpackage(userid, package_id, quantity)
      .subscribe((data: any) => {
        console.log(data);
      });
  }

  addToCartOfService(userid: number, service_id: number, quantity: number) {
    this.homeservice
      .addToCartOfService(userid,service_id, quantity)
      .subscribe((data: any) => {
        console.log(data);
      });
  }
}
