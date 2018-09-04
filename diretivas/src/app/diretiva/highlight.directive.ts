import { Directive, HostListener, HostBinding, ElementRef, Renderer, Input } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {
  @HostListener('mouseenter') onMOuseOver() {
      this.backgroundCollor = this.highlightColor;
  }

  @HostListener('mouseleave') onmouseleave() {
      this.backgroundCollor = this.defaultColor;
  }

  @HostBinding('style.backgroundColor') backgroundCollor: string;

  @Input() defaultColor: string = 'white';
  @Input('highlight') highlightColor: string = 'yellow';


  constructor() { }

  ngOnInit() {
    this.backgroundCollor = this.defaultColor;    
  }
   

}