import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Output() closeSideNav = new EventEmitter<any>();

  constructor(private router: Router) { }

  public redirectGeneral() {
    this.router.navigateByUrl('/home');
  }

  public redirectTransfer() {
    this.router.navigateByUrl('/dashboard/general');
  }

  public redirectProduct() {
    this.router.navigateByUrl('/dashboard/general');
  }

  public redirectPagos() {
    this.router.navigateByUrl('/pagos/index');
  }

  ngOnInit(): void {
  }

}
