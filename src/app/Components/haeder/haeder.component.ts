import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
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

}
