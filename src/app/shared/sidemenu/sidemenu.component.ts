import { Component } from '@angular/core';
import { routes } from '../../app.routes';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'shared-sidemenu',
  standalone: true,
  imports: [ RouterModule ],
  templateUrl: './sidemenu.component.html',
  styles: ``
})
export class SidemenuComponent {

  public menuItems = routes.map((route) => route.children ?? [])
    .flat()
    .filter((route) => route && route.path)
    .filter((route) => !route.path?.includes(':'));

}
