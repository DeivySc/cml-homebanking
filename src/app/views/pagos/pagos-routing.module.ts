import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {PagosComponent} from "./pagos.component";
import {PagosPrestamosComponent} from "./components/pagos-prestamos/pagos-prestamos.component";
import {PagosDashboardComponent} from "./components/pagos-dashboard/pagos-dashboard.component";

const routes: Routes = [
  {
    path: '',
    component: PagosComponent,
    children: [
      {path: 'index', component: PagosDashboardComponent},
      {path: 'prestamos', component: PagosPrestamosComponent},
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagosRoutingModule { }
