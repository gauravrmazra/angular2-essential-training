import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[mwFavorite]'
})
export class FavoriteDirective {
  @HostBinding('class.is-favorite') isFavorite: boolean = true;
  @HostBinding('class.is-favorite-hovering') hovering: boolean = false;
  @HostListener('mouseenter') onMouseEnter() {
    this.hovering = true;
  }

  @HostListener('mouseleave') onmouseleave() {
    this.hovering = false;
  }

  @Input() set mwFavorite(value: boolean) {
    this.isFavorite = value;
  }
}