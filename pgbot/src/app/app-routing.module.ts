import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModifComponent } from './modif/modif.component';
import { CarListComponent } from './car-list/car-list.component';


const routes: Routes = [{path:'',redirectTo:'/listcar',pathMatch:'full'},
{path:"modif/:idCar",component:ModifComponent},
{path:"listcar",component:CarListComponent},
{path:"ajou",component:ModifComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
