import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeavyLoadersLowComponent } from '@shared/heavy-loaders/heavy-loaders-low.component';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    HeavyLoadersLowComponent
  ],
  templateUrl: './defer-views-page.component.html',
})
export default class DeferViewsPageComponent {

}
