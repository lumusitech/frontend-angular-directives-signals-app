import { Component, computed, effect, signal } from '@angular/core';
import { User } from '../../interfaces/user-request.interface';

@Component({
  selector: 'signals-properties-page',
  templateUrl: './properties-page.component.html',
  styleUrls: ['./properties-page.component.css'],
})
export class PropertiesPageComponent {
  public user = signal<User>({
    id: 2,
    email: 'janet.weaver@reqres.in',
    first_name: 'Janet',
    last_name: 'Weaver',
    avatar: 'https://reqres.in/img/faces/2-image.jpg',
  });

  public fullName = computed(
    () => `${this.user().first_name} ${this.user().last_name}`
  );

  public counter = signal(0);

  public userChangedEffect = effect(() => {
    console.log(`${this.fullName()} - counter: ${this.counter()}`);
  });

  onFieldUpdated(field: string, value: string) {
    this.user.mutate((current) => {
      switch (field) {
        case 'email':
          current.email = value;
          break;

        case 'first_name':
          current.first_name = value;
          break;

        case 'last_name':
          current.last_name = value;
          break;

        case 'id':
          current.id = Number(value);
          break;
      }
    });
  }

  increaseBy(value: number) {
    this.counter.update((current) => current + value);
  }
}
