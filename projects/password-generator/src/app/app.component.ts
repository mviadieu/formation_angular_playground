import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <h1>Générer un mot de passe fort 💪 🔐</h1>
      <div class="grid">
        <div>
          <h3>Votre futur mot de passe:</h3>
          <article>Cliquer sur le bouton "générer" ...</article>
        </div>
        <div>
          <label for="lenght">Longueur du mot de passe:</label>
          <input id="lenght" type="range" min="10" max="50" name="lenght" />
          <label>
            <input
              role="switch"
              id="uppercases"
              type="checkbox"
              name="uppercases"
            />
            Contiendra des majuscules
          </label>
          <label>
            <input role="switch" id="numbers" type="checkbox" name="numbers" />
            Contiendra des nombres
          </label>
          <label>
            <input role="switch" id="symbols" type="checkbox" name="symbols" />
            Contiendra des caractères spéciaux
          </label>
          <hr />
          <button>Générer</button>
          <button>Copier le mot de passe</button>
        </div>
      </div>
    </div>
  `,
  styles: [''],
})
export class AppComponent {
  title = 'password-generator';
}
