import {
  Directive,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  Output,
} from '@angular/core';

@Directive({
  selector: '([model])', //On peut remplacer PropertyBiding + EventBiding par two way biding (banana in the box notation)
})
export class ModelDirective {
  @Output('modelChange')
  revenuModelChange = new EventEmitter();

  @Input('model')
  @HostBinding('value')
  value: any;

  @HostListener('input', ['$event.target'])
  onInput(element: HTMLInputElement) {
    if (element.type === 'number') {
      this.revenuModelChange.emit(element.valueAsNumber);
    }
  }
}
