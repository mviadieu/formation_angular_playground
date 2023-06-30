import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: 'a[confirm]',
})
export class ConfirmDirective {
  @HostListener('click')
  OnClickLink() {
    return window.confirm('Do you wish to go on google home page?'); // si false on fait event.PreventDefault() sinon go.
  }
}
