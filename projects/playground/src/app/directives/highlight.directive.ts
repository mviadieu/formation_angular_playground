import {
  Directive,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  Output,
} from '@angular/core'; // Déclaration d'une directive (raccourcis taper @Directive +Tab)

@Directive({
  selector: 'p[highlight]', // Je cible tout les <p> qui ont un attribut highlight.
  exportAs: 'hl', // permet de récupérer l'instance de la directive
}) // Un décorateur c'est une fonction qu'on va position par dessus une classe, une methode et va pouvoir alterer son comportement.

// Deuxieme façon de faire :
export class HighlightDirective {
  @HostBinding('style.backgroundColor')
  color = 'transparent';

  @Output('color-change') // le décorateur output permet de dire que le signal est émis dans sur canal
  colorChangeEvent = new EventEmitter<string>(); //EventEmitter est capable d'envoyer des signaux. Il va signaler qu'il s'est passé qqchose sur le color-change.
  //On peut typer l'emitter. Ici on attends une couleur donc une string.

  ngOnInit() {
    this.color = this.baseColor; // ngOnInit permet d'avoir le comportement au lancement de l'app
  }

  @Input('background-color')
  backgroundColor = '#6082B6';

  @Input('base-color')
  baseColor = 'transparent';

  @HostListener('mouseenter')
  onMonseEnter() {
    this.color = this.backgroundColor;
    this.colorChangeEvent.emit(this.color); // on emet un signal de changement. On peut passer des infos dans le emit
  }

  @HostListener('mouseout')
  onMonseOut() {
    this.color = this.baseColor;
    this.colorChangeEvent.emit(this.color); // on emet un signal de changement. On peut passer des infos dans le emit
  }
}

// Premiere façon de faire:
//   constructor(private elementRef: ElementRef<HTMLElement>) {
//     // elementRef.nativeElement.addEventListener('mouseenter', ($event) => {
//     //   $ de $event est une convention de nommage
//     //   this.onMouseEnter($event.clientX);
//     // });
//   }

//   @HostListener('mouseenter', ['$event.clientX', '$event.clientY'])
//   onMouseEnter(clienx: number, clientY: number) {
//     console.log('HEY', clienx, clientY);
//     this.elementRef.nativeElement.style.backgroundColor = 'yellow';
//   }

//   @HostListener('mouseout', ['$event.target']) // On peut aussi lui passer l'élément (ce qu'on veut target)
//   onMouseOut(target: HTMLElement) {
//     target.style.backgroundColor = 'transparent';
//   }
// } // Permet de l'utiliser dans d'autre composant. ElementRef: Angular nous passe une référence à l'élément (ici <P>).
