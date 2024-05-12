import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-worker-time',
  templateUrl: './worker-time.component.html',
  styleUrls: ['./worker-time.component.css'],
})
export class WorkerTimeComponent {
  CartDataService: any;
  WorkersData: any;
  ourForm!: FormGroup;
  formArray!: FormArray;
  ourWorkersData!:any

  constructor(private http: HttpClient, private homeservice: HomeService) {

  }

  ngOnInit() {
    this.CartDataService = this.homeservice.CartDataService;
        this.formArray = new FormArray<FormControl>([]);
        this.createForm();

  }

  createForm(): void {
    this.CartDataService.forEach((data: any) => {
      const control = new FormControl('');
      this.formArray.push(control);
    });
  }

  setTimer(cart_id: number, index: number) {
    const date_time = this.formArray.at(index)?.value;
    this.homeservice.setTimer(cart_id, date_time).subscribe((data: any) => {
      console.log(data);
      this.WorkersData = data;
    });
            this.homeservice.getWorkers().subscribe((data: any) => {
              console.log(data);
              this.ourWorkersData = data;
            });
  }
}
