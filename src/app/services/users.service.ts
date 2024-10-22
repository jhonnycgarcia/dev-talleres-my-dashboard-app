import { Injectable, signal } from '@angular/core';
import { User } from '@interfaces/req.response';

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

  constructor() {
    console.log('Cargando data...');
  }
}
