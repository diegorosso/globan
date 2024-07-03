import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUser, faChevronDown, faCalendar, faClock } from '@fortawesome/free-solid-svg-icons';
import { ReactiveFormsModule } from '@angular/forms';

import axios from "axios";

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FontAwesomeModule, ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent{
  person = faUser;
  down = faChevronDown;
  calendar = faCalendar;
  clock = faClock;

  formData = new FormGroup({
    name: new FormControl(""),
    lastname: new FormControl(""),
    email: new FormControl(""),
    phone: new FormControl(""),
    msg: new FormControl("")
  })

  data = {
    service_id: import.meta.env["NG_APP_EMAILJS_SERVICE_ID"],
    template_id: import.meta.env["NG_APP_EMAILJS_TEMPLATE_ID"],
    user_id: import.meta.env["NG_APP_EMAILJS_USER_ID"],
    accessToken: import.meta.env["NG_APP_EMAILJS_ACCESS_TOKEN"],
    template_params: {
      to_name: "Juan Manuel Gimenez",
      to_email: "globalmkt.arg@gmail.com ",
      from_name: "",
      from_lastname: "",
      from_email: "",
      from_phone: "",
      message: ""
    },
  };

  onSubmit(){
  this.data.template_params.from_name = this.formData.get("name")?.value || ''
  this.data.template_params.from_lastname = this.formData.get("lastname")?.value || ''
  this.data.template_params.from_email = this.formData.get("email")?.value || ''
  this.data.template_params.from_phone = this.formData.get("phone")?.value || ''
  this.data.template_params.message = this.formData.get("msg")?.value || ''

  console.log(this.data)

    this.sendEmail(this.data)
  }

  async sendEmail (data: any) {
  try {
    const url = "https://api.emailjs.com/api/v1.0/email/send";
    await axios.post(url, JSON.stringify(data), {
      headers: {
        "Content-Type": "application/json",
      },
    });
    // showSpinner.value = false;
    /* patchOptions({
      attrs: {
        modalTitle: "El pedido ha sido enviado de manera exitosa!",
      },
    });
    open(); */

    this.formData.reset();
  } catch (error) {
   // showSpinner.value = false;
    console.log({ error });
    /*patchOptions({
      attrs: {
        modalTitle: "Error inesperado!",
        modalContent:
          "El pedido no ha podido enviarse debido a un error inesperado, por favor vuelva a intentarlo!",
      },
    });
    open(); */
  }
  }
}
