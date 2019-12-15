import { Component, OnInit } from '@angular/core';
import { CarService } from '../sharde/car/car.service';
import { HttpClient } from 'selenium-webdriver/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-modif',
  templateUrl: './modif.component.html',
  styleUrls: ['./modif.component.css']
})
export class ModifComponent implements OnInit {

  private car:any={};
  sub:Subscription
  constructor(private carservice:CarService,private http:HttpClient,
    private router:Router,
    private rout:ActivatedRoute) {
      
    }
  



    ngOnInit() {
      this.sub = this.rout.params.subscribe(params => {
        const id = params.id;
        if (id) {
          this.carservice.get(id).subscribe((car: any) => {
            if (car) {
              this.car = car;
              this.car.href = car._links.self.href;
           
            } else {
              console.log(`Car with id '${id}' not found, returning to list`);
              this.gotoList();
            }
          });
        }
      });
    }
  
    ngOnDestroy() {
      this.sub.unsubscribe();
    }
  
    gotoList() {
      this.router.navigate(['/carlist']);
    }
  
    save(form: NgForm) {
      this.carservice.save(form).subscribe(result => {
        this.gotoList();
      }, error => console.error(error));
    }
  
    remove(href) {
      this.carservice.remove(href).subscribe(result => {
        this.gotoList();
      }, error => console.error(error));
    }
  }


  
