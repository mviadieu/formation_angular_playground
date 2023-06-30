import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Spectator, createComponentFactory } from '@ngneat/spectator';

describe('AppComponent (avec spectator)', () => {
  let spectator: Spectator<AppComponent>;
  let component: AppComponent;

  const createComponent = createComponentFactory({
    component: AppComponent,
    declarations: [AppComponent],
  });

  beforeEach(() => {
    spectator = createComponent();
    component = spectator.component;
  });

  it('should article be initialize when page is loaded', () => {
    expect(spectator.query('article')?.textContent).toBe(
      'Cliquer sur le bouton "Générer"'
    );
  });

  it('should change message when user clicks generate button', () => {
    spectator.click('button');
    expect(spectator.query('article')).toHaveText('MON_MOT_DE_PASSE');
  });

  it('should update settings when user clicks switch buttons', () => {
    spectator.click('#uppercases');
    expect(component.uppercases).toBe(true);

    spectator.click('#symbols');
    expect(component.symbols).toBe(true);

    spectator.click('#numbers');
    expect(component.numbers).toBe(true);
  });

  it('should slide bar return expected written value', () => {
    // Exemple sur les élements de type 'input'
    spectator.typeInElement('33', '#lengh');
    expect(component.lengh).toBe(33);
  });
});

describe('AppComponent (avec TestBed)', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  // le beforeEach va permettre de refactoriser. On relance le test bed avant chaque test.
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
    }).compileComponents(); // permet de lancer un framework virtuel TestBed et de compiler les composants html et css
    fixture = TestBed.createComponent(AppComponent); // le fixture est un navigateur virtuel qui permet de voir le app component
    fixture.autoDetectChanges(); //lance un cycle de détection de changment automatique à chaque action. (ex click button, MAJ interpolation etc.)

    component = fixture.componentInstance; // refacto
  });

  it('should title be : 🔐 Générer un mot de passe fort 💪', async () => {
    const h1 = fixture.nativeElement.querySelector('h1');
    expect(h1.textContent).toBe('🔐 Générer un mot de passe fort 💪');
  });

  it('should article be initialize when page is loaded', async () => {
    const article = fixture.nativeElement.querySelector('article');
    expect(article.textContent).toBe('Cliquer sur le bouton "Générer"');
  });

  it('should change message when user clicks generate button', async () => {
    const button = fixture.nativeElement.querySelector('button');

    button.click();

    const article = fixture.nativeElement.querySelector('article');
    expect(article.textContent).toBe('MON_MOT_DE_PASSE');
  });

  it('should update settings when user clicks switch buttons', async () => {
    fixture.nativeElement.querySelector('#uppercases').click();
    expect(component.uppercases).toBe(true);

    fixture.nativeElement.querySelector('#symbols').click();
    expect(component.symbols).toBe(true);

    fixture.nativeElement.querySelector('#numbers').click();
    expect(component.numbers).toBe(true);
  });

  it('should slide bar return expected written value', async () => {
    // Exemple sur les élements de type 'input'
    const lengh = fixture.nativeElement.querySelector('#lengh');
    lengh.value = 33;
    lengh.dispatchEvent(new Event('input'));
    expect(component.lengh).toBe(33);
  });
});
