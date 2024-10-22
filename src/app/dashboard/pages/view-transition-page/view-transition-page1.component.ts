import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    TitleComponent,
  ],
  template: `
    <shared-title title="View Transition 1" />

    <section class="flex justify-start">
      <img
        src="https://picsum.photos/id/237/200/300"
        class="w-1/2 h-full object-cover"
        alt="Imagen"
        width="200"
        height="300"
        style="view-transition-name: hero1"
      />
      <div
        class="bg-blue-500 w-56 h-56"
        style="view-transition-name: caja1"
      ></div>
    </section>
  `,
})
export default class ViewTransitionPageComponent {

}
