import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[set-classes]',
})
export class SetClassesDirective {
  @Input('set-classes') // on passe l'objet par la directive
  cssClassObject: { [key: string]: boolean } = {}; // initialisation de l'objet

  constructor(private elementRef: ElementRef<HTMLElement>) {} // constructeur

  ngOnChanges() {
    console.log(this.cssClassObject);
    const clefs = Object.keys(this.cssClassObject); // on récupères les clefs
    clefs.forEach((cle) => {
      // on boucle sur toutes les cléfs de l'objet (ici la clé est une classe CSS)
      if (this.cssClassObject[cle]) {
        // si la clé existe
        this.elementRef.nativeElement.classList.add(cle); // on applique la classe du CSS.
        return;
      }
      this.elementRef.nativeElement.classList.remove(cle); // on enleve la classe
    });
  }
}
