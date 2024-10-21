import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeavyLoadersLowComponent } from '@shared/heavy-loaders/heavy-loaders-low.component';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    HeavyLoadersLowComponent,
    TitleComponent,
  ],
  templateUrl: './defer-views-page.component.html',
})
export default class DeferViewsPageComponent {

}
