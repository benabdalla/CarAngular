import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class CarService {
public API="//localhost:8080";
public car_APi=this.API+"/cars";

  constructor(private http:HttpClient) { }

getAll():Observable<any>{
  
return this.http.get('//localhost:8080/cool-cars');

}
get(id :string){
  return this.http.get(this.car_APi+'/'+id);
}


save(car: any): Observable<any> {
  let res: Observable<any>;
  if (car.href) {
    res = this.http.put(car.href, car);
  } else {
    res = this.http.post(this.car_APi, car);
  }
  return res;
}

remove(href: string) {
  return this.http.delete(href);
}
}

