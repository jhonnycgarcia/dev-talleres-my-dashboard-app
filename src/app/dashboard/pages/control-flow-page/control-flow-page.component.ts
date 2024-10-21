import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

import { TitleComponent } from '@shared/title/title.component';

type Grade = 'A' | 'B' | 'F';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    TitleComponent
  ],
  templateUrl: './control-flow-page.component.html',
  styles: ``
})
export default class ControlFlowPageComponent {

  public showContent = signal(false);
  public grade = signal<Grade>('A');
  public frameworks = signal<string[]>(['Angular', 'React', 'Vue', 'Svelte']);
  public frameworks2 = signal<string[]>([]);


  public toggleContent() {
    this.showContent.update((value) => !value);
  }

}
