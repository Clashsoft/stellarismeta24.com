import {Directive, HostListener, Inject, Input, OnDestroy} from '@angular/core';
import {DOCUMENT} from "@angular/common";

@Directive({
  selector: '[smTooltip]',
})
export class TooltipDirective implements OnDestroy {
  @Input() smTooltip!: string;

  private container?: HTMLDivElement;

  constructor(
    @Inject(DOCUMENT) private document: Document,
  ) {
  }

  @HostListener('mouseenter', ['$event'])
  onMouseEnter(event: MouseEvent) {
    if (this.container) {
      return;
    }

    this.container = this.document.createElement('div');
    this.container.innerText = this.smTooltip;
    this.container.className = 'tooltip-container';
    this.updatePosition(event);
    this.document.body.appendChild(this.container);
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
    this.document.body.removeChild(this.container);
    this.container = undefined;
  }

  private updatePosition(event: MouseEvent) {
    this.container!.style.left = `${event.clientX + 12}px`;
    this.container!.style.top = `${event.clientY + 12}px`;
  }
}
