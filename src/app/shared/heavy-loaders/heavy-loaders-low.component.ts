import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-heavy-loaders-low',
  standalone: true,
  imports: [ CommonModule],
  template: `
    <section
      [ngClass]="[
        'w-full h-[600px]' ,
        cssClass
      ]"
    >
      Heavy Loaders Low
    </section>
  `,
  styles: ``
})
export class HeavyLoadersLowComponent {

  @Input({ required: true })
  public cssClass!: string;

  constructor() {
    const start = Date.now();
    while (Date.now() - start < 3000) { }
    console.log('Cargado');

  }

}
