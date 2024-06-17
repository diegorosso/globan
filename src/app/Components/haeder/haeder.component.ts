import { Component, ElementRef, Renderer2, ViewChild, HostListener  } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-haeder',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './haeder.component.html',
  styleUrls: ['./haeder.component.css']
})
export class HaederComponent {
  close = faClose;

  @ViewChild('navbar') navbar!: ElementRef;
  @ViewChild('overlay') overlay!: ElementRef;
  @ViewChild('header') header!: ElementRef;
  @ViewChild('backTopBtn') backTopBtn!: ElementRef;

  lastScrollPos = 0;

  constructor(private renderer: Renderer2) {}

  toggleClass(element: ElementRef, className: string) {
    if (element.nativeElement.classList.contains(className)) {
      this.renderer.removeClass(element.nativeElement, className);
    } else {
      this.renderer.addClass(element.nativeElement, className);
    }
  }

  toggleNavbar() {
    this.toggleClass(this.navbar, 'active');
    this.toggleClass(this.overlay, 'active');
    this.toggleClass({ nativeElement: document.body }, 'nav-active');
  }

  hideHeader() {
    const isScrollBottom = this.lastScrollPos < window.scrollY;
    if (isScrollBottom) {
      this.renderer.addClass(this.header.nativeElement, 'hide');
    } else {
      this.renderer.removeClass(this.header.nativeElement, 'hide');
    }

    this.lastScrollPos = window.scrollY;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (window.scrollY >= 50) {
      this.renderer.addClass(this.header.nativeElement, 'active');
      this.renderer.addClass(this.backTopBtn.nativeElement, 'active');
      this.hideHeader();
    } else {
      this.renderer.removeClass(this.header.nativeElement, 'active');
      this.renderer.removeClass(this.backTopBtn.nativeElement, 'active');
    }
  }

}
