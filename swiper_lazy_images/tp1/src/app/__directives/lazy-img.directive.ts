import { AfterViewInit, Directive, ElementRef, Input, OnDestroy, Optional, Renderer2 } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { filter, take, takeUntil } from 'rxjs/operators';

@Directive({
    selector: '[appLazyImage]',
    exportAs: 'appLazyImage'
})
export class LazyImageDirective implements AfterViewInit {

    @Input('appLazyImage') src?: string;
    
    constructor(
        private readonly elementRef: ElementRef,
        private readonly renderer: Renderer2,
    ) { }

    public ngAfterViewInit(): void {
        if (this.src) {
            this.renderer.setAttribute(this.elementRef.nativeElement, 'src', this.src);
            if(this.elementRef.nativeElement.complete){
                this.loaded();
            }else {
                this.elementRef.nativeElement.addEventListener("load",() => {
                    this.loaded();
                });
            }
        }
    }

    loaded(){
        this.elementRef.nativeElement.classList.add('loaded');
    }

}
