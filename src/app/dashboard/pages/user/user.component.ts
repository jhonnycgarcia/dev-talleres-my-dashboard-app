import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '@interfaces/req.response';
import { toSignal } from '@angular/core/rxjs-interop';

import { TitleComponent } from '@shared/title/title.component';
import { map, switchMap } from 'rxjs';
import { UsersService } from '@services/users.service';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    TitleComponent,
  ],
  template: `
    <shared-title [title]="titleLabel()" />

    @if (user()) {

      <section>
        <img
          [srcset]="user()!.avatar"
          [alt]="user()!.first_name"
        />
       <div>
         <h3>{{ user()!.first_name }} {{ user()!.last_name }}</h3>
         <p>{{ user()!.email }}</p>
       </div>
      </section>

    } @else {
      <p>Cargando...</p>
    }
  `
})
export default class UserComponent {

  private route = inject(ActivatedRoute);
  private userSrv = inject(UsersService);

  // public user = signal<User | undefined>(undefined);
  public user = toSignal(
    this.route.params.pipe(
      switchMap(({ id }) => this.userSrv.getUserById(id))
    )
  );

  public titleLabel = computed(() => {
    if(this.user()) {
      return `Información del usuario: ${this.user()!.first_name} ${this.user()!.last_name}`;
    }

    return 'Información del usuario: Cargando...';
  });

  // constructor() {
  //   this.route.params.subscribe((params) => {
  //     console.log(params);
  //   });
  // }

}
