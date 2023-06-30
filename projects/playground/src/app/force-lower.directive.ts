import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
} from '@angular/core';
import { empty } from 'rxjs';

@Directive({
  selector: 'input[force-lower]',
})
export class ForceLowerDirective {
  // SIMPLE WAY
  //   constructor(private elementRef: ElementRef<HTMLInputElement>) {}

  //   @HostListener('input')
  //   onInput() {
  //     this.elementRef.nativeElement.value =
  //       this.elementRef.nativeElement.value.toLowerCase();
  //   }

  // BEST WAY
  @Input('value')
  @HostBinding('value')
  value = '';

  @HostListener('input', ['$event.target.value'])
  onInput(value: string) {
    this.value = value.toLowerCase(); // A LA FRAPPE
  }

  ngOnInit() {
    this.value = this.value.toLowerCase(); // GERE LA VALEUR PAR DEFAULT AU LANCEMENT
  }
}
