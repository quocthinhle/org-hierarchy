import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appBackgroundColor]'
})
export class BackgroundColorDirective {

  @Input() appBackgroundColor: string = '';
  

  constructor(private el: ElementRef) {
    this.applyBackgroundColor();
  }

  applyBackgroundColor() {
    this.el.nativeElement.style.backgroundColor = this.appBackgroundColor;
  }

  ngOnInit() {
    this.applyBackgroundColor();
  }
}
