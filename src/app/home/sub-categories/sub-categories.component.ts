import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CookieService } from 'ngx-cookie-service';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-sub-categories',
  templateUrl: './sub-categories.component.html',
  styleUrls: ['./sub-categories.component.css'],
})
export class SubCategoriesComponent {
  slug!: any;

  subCategoriesData!: any;

  constructor(
    private router: Router,
    private cookieservice: CookieService,
    private route: ActivatedRoute,
    private modalService: NgbModal,
    private http: HttpClient,
    private homeservice: HomeService
  ) {
    this.route.params.subscribe((value) => {
      this.slug = this.route.snapshot.paramMap.get('category_id');
      console.log(this.slug);
    });
  }

  ngOnInit() {
    this.getSubCategories(this.slug);
  }

  getSubCategories(slug: number): void {
    this.homeservice.getSubCategories(slug).subscribe((data: any) => {
      console.log(data);
      this.subCategoriesData = data;
      console.log(this.subCategoriesData);
    });
  }
  showServices(subcategory_id: number): void {
    this.router.navigate(['/services',subcategory_id]);
  }
}
