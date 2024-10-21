import { Component, signal } from '@angular/core';

@Component({
  standalone: true,
  imports: [],
  templateUrl: './control-flow-page.component.html',
  styles: ``
})
export default class ControlFlowPageComponent {

  public showContent = signal(false);

  public toggleContent() {
    this.showContent.update((value) => !value);
  }

}
