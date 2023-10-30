import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { SingleUserResponse, User } from '../interfaces/user-request.interface';

@Injectable({
  providedIn: 'root',
})
export class UsersServiceService {
  private readonly http = inject(HttpClient);
  private baseUrl = 'https://reqres.in/api/users';

  getUserById(id: string): Observable<User> {
    return this.http.get<SingleUserResponse>(`${this.baseUrl}/${id}`).pipe(
      map<SingleUserResponse, User>((resp) => resp.data),
      tap(console.log)
    );
  }
}
