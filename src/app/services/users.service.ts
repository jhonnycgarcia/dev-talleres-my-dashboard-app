import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { delay, map } from 'rxjs';

import type { User, UserResponse, UsersResponse } from '@interfaces/req.response';

interface State {
  user: User[];
  loading: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  /**
   * https://reqres.in/
   */

  /**
   * # = private al tipo de propiedad
   */
  #state = signal<State>({
    user: [],
    loading: true,
  });

  public users = computed(() => this.#state().user);
  public loading = computed(() => this.#state().loading);

  private http = inject(HttpClient);

  constructor() {
    // console.log('Cargando data...');
    this.http.get<UsersResponse>('https://reqres.in/api/users')
      .pipe(
        delay(1500)
      )
      .subscribe((response) => {
        this.#state.set({ user: response.data, loading: false });
      });
  }


  getUserById(id: string) {
    return this.http.get<UserResponse>(`https://reqres.in/api/users/${id}`)
      .pipe(
        delay(1500),
        map((response) => response.data)
      )
  }

}
