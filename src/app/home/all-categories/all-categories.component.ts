import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { HomeService } from '../home.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-all-categories',
  templateUrl: './all-categories.component.html',
  styleUrls: ['./all-categories.component.css']
})
export class AllCategoriesComponent {
  constructor(private route: ActivatedRoute, private cookieService: CookieService,private router: Router,private modalService: NgbModal,private homeservice:HomeService
  ) {

  }
  categoryData!:any

  ngOnInit()
  {
    this.getCategories();
  }
  getCategories()
  {

    this.homeservice
    .getCategories(
  )
    .subscribe((data: any) =>
     {
      console.log(data);
      this.categoryData = data;
      console.log(this.categoryData)
    });
  }

}
