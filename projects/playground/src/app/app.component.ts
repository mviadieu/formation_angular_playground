import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'playground';
  revenuDeBase = 100;
  age = 30;
  nationalite = 'Suisse';

  onColorChange(color: string) {
    console.log('la couleur à changé, elle est', color);
  }
  calculImpots() {
    const impots = this.revenuDeBase + 500;
    console.log(impots);
  }
  cssClassObject = {
    red: this.age >= 18,
    bold: this.nationalite === 'Suisse',
  };
}
