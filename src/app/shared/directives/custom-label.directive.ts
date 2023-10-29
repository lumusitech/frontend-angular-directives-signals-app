import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[customLabel]',
})
export class CustomLabelDirective implements OnInit {
  private htmlElement?: ElementRef<HTMLElement>;

  constructor(private el: ElementRef<HTMLElement>) {
    this.htmlElement = this.el;
    this.htmlElement.nativeElement.innerHTML = 'Hello world';
  }

  ngOnInit(): void {
    console.log('custom directive active');
  }
}
