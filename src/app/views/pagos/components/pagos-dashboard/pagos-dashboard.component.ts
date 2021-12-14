import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-pagos-dashboard',
  templateUrl: './pagos-dashboard.component.html',
  styleUrls: ['./pagos-dashboard.component.scss']
})
export class PagosDashboardComponent implements OnInit {

  content = [
    {title: 'Prestamos', img: 'assets/img/pagos-img/Prestamos.svg', alt: 'prestamos'},
    {title: 'Tarjetacredito', img: 'assets/img/pagos-img/Tarjetacredito.svg', alt: 'tarjetacredito'},
    {title: 'Servicios', img: 'assets/img/pagos-img/Servicios.svg', alt: 'servicios'},
  ]

  constructor(private router: Router) { }

  public redirect(ruta: string) {
    this.router.navigateByUrl('/pagos/' + ruta);
  }

  ngOnInit() {}

}
