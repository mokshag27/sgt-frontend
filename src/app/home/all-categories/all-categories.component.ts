import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CookieService } from 'ngx-cookie-service';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-all-categories',
  templateUrl: './all-categories.component.html',
  styleUrls: ['./all-categories.component.css']
})

export class AllCategoriesComponent 
{
    constructor(private route: ActivatedRoute, private cookieService: CookieService,private router: Router,private modalService: NgbModal,private homeservice:HomeService
  ) {

  }


}
