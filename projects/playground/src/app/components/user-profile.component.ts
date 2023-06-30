import { Component, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'user-profile',
  template: `
    <h3 [class.hired]="isHired">
      {{ getFirstName() }} {{ lastName | uppercase }}
    </h3>
    <img [src]="avatar" alt="" />
    Métier :
    <strong> {{ job }} ({{ revenue | currency : 'EUR' : 'symbol' }}) </strong>
    <button (click)="onCLickButton($event)">Embauché</button>
    <Input
      (keyup.Enter)="onPressButton($event)"
      type="text"
      placeholder="Nouveau prénom"
    />
  `,
  styles: [
    `
      .hired {
        background-color: green;
      }
    `,
  ],
})
// Le composant projette des valeurs directement dans le HTML. // INTERPOLATION.
// Currency est un PIPE. Permet de travailler sur la valeur pour l'afficher d'une certaine façon
// CLASS BIDING : [class.hired]="isHired" applique la classe de style hired if la prop hired est a true;
export class UserProfileComponent {
  @Input('first-name')
  firstName = '';
  @Input('last-name')
  lastName = '';
  @Input() // Pas besoin de spécifié quand cest le même nom.
  job = '';
  @Input('hired')
  isHired = false;

  revenue = 1500;
  avatar = 'https://via.placeholder.com/30';

  getFirstName() {
    return this.firstName.toLowerCase(); // on peut appeler une fonction dans l'interpolation.
  }

  onCLickButton(event: Event) {
    console.log(event);
    this.isHired = true;
  }
  onPressButton(event: Event) {
    this.firstName = (event.target as HTMLInputElement).value;
  }

  //   onPressButton(event: KeyboardEvent) {
  //     if (event.key === 'Enter') console.log('On a rentré un prénom');
  //   }
}
