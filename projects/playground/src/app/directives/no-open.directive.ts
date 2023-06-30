import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: 'a[no-open]',
})
export class NoOpenDirective {
  //   @HostListener('click', ['$event'])
  //   OnClickLink(event: Event) {
  //     event.preventDefault();
  //   }

  @HostListener('click') //@HostListener:  If the handler method returns false, applies preventDefault on the bound element.
  OnClickLink() {
    return false;
  }
}
