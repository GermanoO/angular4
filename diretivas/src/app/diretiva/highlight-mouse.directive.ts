import { Directive, HostListener, ElementRef, Renderer, HostBinding } from '@angular/core';

@Directive({
  selector: '[highlightMouse]'
})
export class HighlightMouseDirective {

  @HostListener('mouseenter') onMOuseOver() {
    /*this._renderer.setElementStyle(
      this._elementRef.nativeElement, 
      'backgroundColor', 'yellow');*/
      this.backgroundCollor = 'yellow';
  }

  @HostListener('mouseleave') onmouseleave() {
   /*  this._renderer.setElementStyle(
      this._elementRef.nativeElement, 
      'backgroundColor', 'white'); */
      this.backgroundCollor = 'white';
  }

  @HostBinding('style.backgroundColor') backgroundCollor: string;

  constructor(
    private _elementRef: ElementRef, 
    private _renderer: Renderer) { } 

}
