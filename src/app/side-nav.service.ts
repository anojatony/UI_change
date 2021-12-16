import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MatSidenav } from '@angular/material/sidenav';
@Injectable({
  providedIn: 'root'
})
export class SideNavService {
  public sideNavToggleSubject: BehaviorSubject<any> = new BehaviorSubject(null);
  private sidenav!: MatSidenav;
  constructor() { }

  public setSidenav(sidenav: MatSidenav) {
    this.sidenav = sidenav;
  }

  public open() {
    this.sidenav.opened = true;
    return this.sidenav.open();
  }

  public close() {
    console.log('close')
    return this.sidenav.close();
  }

  public toggle() {
    return this.sidenav.toggle();
  }
  

}
