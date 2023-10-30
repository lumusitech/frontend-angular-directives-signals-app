import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[customLabel]',
})
export class CustomLabelDirective implements OnInit {
  private _color: string = 'red';
  private htmlElement?: ElementRef<HTMLElement>;
  private _errors?: ValidationErrors | null;

  @Input() set color(color: string) {
    this._color = color;
    this.setStyle();
  }

  @Input() set errors(value: ValidationErrors | null | undefined) {
    this._errors = value;
    this.setErrorMessage();
    console.log(value);
  }

  constructor(private el: ElementRef<HTMLElement>) {
    this.htmlElement = this.el;
  }

  ngOnInit(): void {
    console.log('custom directive active');
    this.setStyle();
  }

  setStyle(): void {
    if (this.htmlElement)
      this.htmlElement.nativeElement.style.color = this._color;
  }

  setErrorMessage() {
    if (!this.htmlElement) return;
    if (!this._errors) {
      this.htmlElement!.nativeElement.innerHTML = 'No errors!';
      return;
    }

    const errors = Object.keys(this._errors);
    console.log(errors);

    if (errors.includes('required')) {
      this.htmlElement!.nativeElement.innerHTML = 'This field is required';
      return;
    }

    if (errors.includes('email')) {
      this.htmlElement!.nativeElement.innerHTML = 'This field must be an email';
      return;
    }

    if (errors.includes('minlength')) {
      const current = this._errors!['minlength']['actualLength'];
      const min = this._errors!['minlength']['requiredLength'];
      this.htmlElement!.nativeElement.innerHTML = `This field must be at least ${min} characters, but now is ${current}`;
      return;
    }
  }
}
