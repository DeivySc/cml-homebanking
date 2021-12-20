import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PagosRoutingModule} from "./pagos-routing.module";
import {MatRadioModule} from '@angular/material/radio';
import {PagosComponent} from "./pagos.component";
import {PagosDashboardComponent} from "./components/pagos-dashboard/pagos-dashboard.component";
import {PagosPrestamosComponent} from "./components/pagos-prestamos/pagos-prestamos.component";

import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
// import {MatIconModule} from '@angular/material/icon';
import {FormsModule} from "@angular/forms";
import {AppModule} from "../../app.module";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from '@angular/material/button';
import { PagosExitososComponent } from './components/pagos-exitosos/pagos-exitosos.component';





@NgModule({
  declarations: [
    PagosExitososComponent
  ],
  imports: [
    CommonModule,
    PagosRoutingModule,
    MatIconModule,
    MatSelectModule,
    MatFormFieldModule,
    MatButtonModule
  ]
})
export class PagosModule { }
