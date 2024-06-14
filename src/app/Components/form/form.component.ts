import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUser, faChevronDown, faCalendar, faClock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  person = faUser;
  down = faChevronDown;
  calendar = faCalendar;
  clock = faClock;
}
