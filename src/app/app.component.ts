import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopbarComponent } from './Components/topbar/topbar.component';
import { PreloadComponent } from './Components/preload/preload.component';
import { HaederComponent } from './Components/haeder/haeder.component';
import { HomeComponent } from './Components/home/home.component';
import { ServiceComponent } from './Components/service/service.component';
import { AboutComponent } from './Components/about/about.component';
import { FormComponent } from './Components/form/form.component';
import { FooterComponent } from './Components/footer/footer.component';
import { TestimonialComponent } from './Components/testimonial/testimonial.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TopbarComponent,
    PreloadComponent,
    HaederComponent,
    HomeComponent,
    ServiceComponent,
    AboutComponent,
    TestimonialComponent,
    FormComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Global';
}
