import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <h1>🔐 Générer un mot de passe fort 💪</h1>
      <div class="grid">
        <div>
          <h3>Votre futur mot de passe:</h3>
          <article>{{ message }}</article>
        </div>
        <div>
          <label for="lenght">Longueur du mot de passe: {{ lengh }}</label>
          <input
            id="lengh"
            type="range"
            min="10"
            max="50"
            name="lengh"
            (input)="OnChangeLengh($event)"
          />
          <label>
            <input
              #uppercaseInput
              (change)="
                OnChangeSettings(uppercaseInput.name, uppercaseInput.checked)
              "
              role="switch"
              id="uppercases"
              type="checkbox"
              name="uppercases"
            />
            Contiendra des majuscules
          </label>
          <label>
            <input
              #numbersInput
              (change)="
                OnChangeSettings(numbersInput.name, numbersInput.checked)
              "
              role="switch"
              id="numbers"
              type="checkbox"
              name="numbers"
            />
            Contiendra des nombres
          </label>
          <label>
            <input
              #symbolsInput
              (change)="
                OnChangeSettings(symbolsInput.name, symbolsInput.checked)
              "
              role="switch"
              id="symbols"
              type="checkbox"
              name="symbols"
            />
            Contiendra des caractères spéciaux
          </label>
          <hr />
          <button (click)="onClickGenerate()">Générer</button>
          <button class="outline">Copier le mot de passe</button>
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export class AppComponent {
  message = 'Cliquer sur le bouton "Générer"';
  lengh = 50;
  uppercases = false;
  numbers = false;
  symbols = false;

  OnChangeSettings(settingName: string, settingValue: boolean) {
    if (
      settingName !== 'uppercases' &&
      settingName !== 'numbers' &&
      settingName !== 'symbols'
    ) {
      return;
    }
    this[settingName] = settingValue;
  }

  OnChangeLengh(event: Event) {
    this.lengh = +(event.target as HTMLInputElement).value; // le + permet la conversion en number
  }

  onClickGenerate() {
    this.message = 'MON_MOT_DE_PASSE';
    console.table({
      uppercase: this.uppercases,
      numbers: this.numbers,
      symbols: this.symbols,
      lengh: this.lengh,
    });
  }
}
