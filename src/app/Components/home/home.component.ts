import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBackward, faForward } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
  back = faBackward;
  forward = faForward;
  currentSlidePos = 0;
  autoSlideInterval: any;

  @ViewChild('heroSlider', { static: false }) heroSlider!: ElementRef;
  @ViewChild('heroSliderPrevBtn', { static: false }) heroSliderPrevBtn!: ElementRef;
  @ViewChild('heroSliderNextBtn', { static: false }) heroSliderNextBtn!: ElementRef;
  @ViewChild('parallaxContainer', { static: false }) parallaxContainer!: ElementRef;

  ngAfterViewInit() {
    this.autoSlide();
    this.heroSliderPrevBtn.nativeElement.addEventListener('click', this.slidePrev.bind(this));
    this.heroSliderNextBtn.nativeElement.addEventListener('click', this.slideNext.bind(this));
    this.heroSliderPrevBtn.nativeElement.addEventListener('mouseover', this.stopAutoSlide.bind(this));
    this.heroSliderNextBtn.nativeElement.addEventListener('mouseover', this.stopAutoSlide.bind(this));
    this.heroSliderPrevBtn.nativeElement.addEventListener('mouseout', this.autoSlide.bind(this));
    this.heroSliderNextBtn.nativeElement.addEventListener('mouseout', this.autoSlide.bind(this));
    window.addEventListener('mousemove', this.handleParallaxEffect.bind(this));
  }

  updateSliderPos() {
    const heroSliderItems = this.heroSlider.nativeElement.querySelectorAll('[data-hero-slider-item]');
    const lastActiveSliderItem = heroSliderItems[this.currentSlidePos];

    heroSliderItems.forEach((item: any) => item.classList.remove('active'));
    lastActiveSliderItem.classList.add('active');
  }

  slideNext() {
    const heroSliderItems = this.heroSlider.nativeElement.querySelectorAll('[data-hero-slider-item]');

    if (this.currentSlidePos >= heroSliderItems.length - 1) {
      this.currentSlidePos = 0;
    } else {
      this.currentSlidePos++;
    }

    this.updateSliderPos();
  }

  slidePrev() {
    const heroSliderItems = this.heroSlider.nativeElement.querySelectorAll('[data-hero-slider-item]');

    if (this.currentSlidePos <= 0) {
      this.currentSlidePos = heroSliderItems.length - 1;
    } else {
      this.currentSlidePos--;
    }

    this.updateSliderPos();
  }

  autoSlide() {
    this.autoSlideInterval = setInterval(() => {
      this.slideNext();
    }, 7000);
  }

  stopAutoSlide() {
    clearInterval(this.autoSlideInterval);
  }

  handleParallaxEffect(event: MouseEvent) {
    const parallaxItems = this.parallaxContainer.nativeElement.querySelectorAll('[data-parallax-item]');
    let x = (event.clientX / window.innerWidth * 10) - 5;
    let y = (event.clientY / window.innerHeight * 10) - 5;

    x = x - (x * 2);
    y = y - (y * 2);

    parallaxItems.forEach((item: any) => {
      const speed = Number(item.dataset.parallaxSpeed);
      const transformX = x * speed;
      const transformY = y * speed;
      item.style.transform = `translate3d(${transformX}px, ${transformY}px, 0px)`;
    });
  }
}
