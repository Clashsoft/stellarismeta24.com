import {Directive, HostListener, Inject, Input, OnDestroy, Renderer2} from '@angular/core';
import {DOCUMENT} from "@angular/common";

@Directive({
  selector: '[smTooltip]',
})
export class TooltipDirective implements OnDestroy {
  @Input() smTooltip!: string;

  private container?: HTMLDivElement;

  constructor(
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document,
  ) {
  }

  @HostListener('mouseenter', ['$event'])
  onMouseEnter(event: MouseEvent) {
    if (this.container) {
      return;
    }

    this.container = this.renderer.createElement('div');
    this.renderer.setProperty(this.container, 'innerHTML', this.smTooltip);
    this.renderer.addClass(this.container, 'tooltip-container');
    this.updatePosition(event);
    this.renderer.appendChild(document.body, this.container);
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (!this.container) {
      return;
    }

    this.updatePosition(event);
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.removeTooltip();
  }

  ngOnDestroy() {
    this.removeTooltip();
  }

  private removeTooltip() {
    if (!this.container) {
      return;
    }
    this.renderer.removeChild(document.body, this.container);
    this.container = undefined;
  }

  private updatePosition(event: MouseEvent) {
    this.renderer.setStyle(this.container!, 'left', `${event.clientX + 12}px`);
    this.renderer.setStyle(this.container!, 'top', `${event.clientY + 12}px`);
  }
}
