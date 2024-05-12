import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CookieService } from 'ngx-cookie-service';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  CartDataService!: any;
  CartDataOfPackage!: any;
  BillData!: any;
  AllData!: any;



  constructor(
    private router: Router,
    private cookieservice: CookieService,
    private route: ActivatedRoute,
    private modalService: NgbModal,
    private http: HttpClient,
    private homeservice: HomeService
  ) {}

  ngOnInit() {
    this.getCartDataOfPackage();
    this.getCartDataService();
    this.getBill();
     
  }

  getCartDataService() {
    this.homeservice.getCartDataService(5).subscribe((data: any) => {
      console.log(data);
      this.CartDataService = data;
      this.homeservice.CartDataService = data;
      console.log();
      console.log('Printing CartDataService ' + this.CartDataService);
    });
  }

  getCartDataOfPackage() {
    this.homeservice.getCartDataOfPackage(5).subscribe((data: any) => {
      console.log(data);
      this.CartDataOfPackage = data;
      this.homeservice.CartDataOfPackage = data;

      console.log('Printing CartDataOfPackage ' + this.CartDataOfPackage);
    });
  }

  deleteService(id: number) {
    this.homeservice.deleteService(id).subscribe((data: any) => {
      console.log(data);
    });
  }

  deletePackage(id: number) {
    this.homeservice.deletePackage(id).subscribe((data: any) => {
      console.log(data);
    });
  }

  getBill() {
    this.homeservice.getBill(5).subscribe((data: any) => {
      this.BillData = data;
      console.log('Printing bill data ' + this.BillData.total_amount);
    });
  }

  bookServices() {
    console.log(' 1st HIIIIII');
    this.router.navigate(['/worker-time']);

    // this.homeservice
    //   .bookServices(5)
    //   .subscribe((data: any) => {
    //     console.log('HIIIIII');
    //     // this.AllData = data;
    //   });
  }
}
