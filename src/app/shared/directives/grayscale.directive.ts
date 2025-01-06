import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appGrayscale]',
  standalone: true
})
export class GrayscaleDirective {
  @Input() set appGrayscale(value: boolean) {
    this.setGrayscale(value);
  }

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) {}

  private setGrayscale(value: boolean) {
    if (value) {
      this.renderer.addClass(this.el.nativeElement, 'grayscale');
    } else {
      this.renderer.removeClass(this.el.nativeElement, 'grayscale');
    }
  }
}
