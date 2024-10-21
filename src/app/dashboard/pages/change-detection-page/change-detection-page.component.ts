import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    TitleComponent
  ],
  template: `
    <shared-title [title]="currentFrameWork()" />

    <pre>{{ frameWorkAsSignal() | json }}</pre>
    <pre>{{ frameWorkAsProperty | json }}</pre>
  `,
  styles: ``
})
export default class ChangeDetectionPageComponent {

  public currentFrameWork = computed(() => `Change Detection: ${this.frameWorkAsSignal().name}`);

  public frameWorkAsSignal = signal({
    name: 'Angular',
    releaseDate: 2016,
  });

  public frameWorkAsProperty = {
    name: 'Angular',
    releaseDate: 2016,
  };

  constructor() {
    setTimeout(() => {

      // this.frameWorkAsProperty.name = 'React';
      this.frameWorkAsSignal.update((value) => ({
        ...value,
        name: 'React',
      }));

      console.log('Hecho');
    }, 3000);
  }

}
