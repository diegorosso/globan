import { Component, Renderer2, OnInit } from '@angular/core';

@Component({
  selector: 'app-preload',
  standalone: true,
  templateUrl: './preload.component.html',
  styleUrls: ['./preload.component.css']
})
export class PreloadComponent implements OnInit {

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
    window.addEventListener('load', () => {
      const preloader = document.querySelector('[data-preload]');
      if (preloader) {
        this.renderer.addClass(preloader, 'loaded');
        this.renderer.addClass(document.body, 'loaded');
      }
    });
  }
}
