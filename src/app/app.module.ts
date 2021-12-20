import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './shared/menu/menu.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import { HomeComponent } from './views/home/home.component';
import { PagosComponent } from './views/pagos/pagos.component';
import {MatMenuModule} from "@angular/material/menu";
import {MatToolbarModule} from "@angular/material/toolbar";
import { PagosDashboardComponent } from './views/pagos/components/pagos-dashboard/pagos-dashboard.component';
import { PagosPrestamosComponent } from './views/pagos/components/pagos-prestamos/pagos-prestamos.component';
import { PagosRoutingModule } from './views/pagos/pagos-routing.module';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatRadioModule} from "@angular/material/radio";
import {MatButtonModule} from "@angular/material/button";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatCardModule} from "@angular/material/card";


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    NavbarComponent,
    HomeComponent,
    PagosComponent,
    PagosDashboardComponent,
    PagosPrestamosComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatSidenavModule,
        MatListModule,
        MatIconModule,
        MatMenuModule,
        MatToolbarModule,
        PagosRoutingModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        FormsModule,
        MatRadioModule,
        MatButtonModule,
        MatSlideToggleModule,
        MatCardModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
