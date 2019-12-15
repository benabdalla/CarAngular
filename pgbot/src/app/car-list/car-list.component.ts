import { Component, OnInit } from '@angular/core';
import { CarService } from '../sharde/car/car.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {
private cars :Array<any>;
  constructor(private carservice:CarService) { }

  ngOnInit() {
  this.carservice.getAll().subscribe(data=>{
    this.cars=data;
  })
  }


}
