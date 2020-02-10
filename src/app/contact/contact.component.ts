import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { CookieService } from 'ngx-cookie-service';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  /** Form group for contact info */
  contactForm: FormGroup;
  /** Holds the contact status in a cookie */
  contactStatus: string;
  /** Displays message to user after an inquiry attempt is made */
  inquiryResponse: string;
  /** Display form validation error */
  errorMessage: string;

  constructor(
    private fb: FormBuilder,
    private cookieService: CookieService
  ) {
    this.contactForm = this.fb.group({
      name: [''],
      email: [''],
      message: [''],
    })
  }

  ngOnInit() {
    this.contactStatus = this.cookieService.get('contactStatus');

    if (!this.contactStatus) {
      this.contactStatus = 'not contacted';
      this.cookieService.set('contactStatus', this.contactStatus, 1, undefined, undefined, false, 'Lax');
    }
  }

  /** Sends inquiry email to me if the form passes validation */
  sendEmail() {
    let emailData = {
      usersName: this.contactForm.get('name').value,
      usersEmail: this.contactForm.get('email').value,
      usersMessage: this.contactForm.get('message').value,
    }
    let error = this.formError(emailData);

    if (!error) {
      if (this.errorMessage) this.errorMessage = null;
      
      emailjs.send('default_service', 'inquiry_template', emailData, 'user_jNFuefEFTbVTttVQlDw20').then(res => {
        this.contactStatus = 'contacted';
        this.cookieService.set('contactStatus', this.contactStatus, 1, undefined, undefined, false, 'Lax');
        this.inquiryResponse = 'Thanks for the message! I\'ll get back to you as soon as I can.';
      }).catch(err => {
        this.inquiryResponse = 'It looks like there\'s some server isses. Come back and try again later, sorry for the inconvenience.';
      });
    } else if (error === 'already contacted') {
      if (this.errorMessage) this.errorMessage = null;

      this.inquiryResponse = 'It looks like you\'ve already contacted me. I\'ll get back to you as soon as I can.';
    } else this.errorMessage = error;
  }

  /** Validates the inquiry form and returns a validation message if invalid */
  formError({usersName, usersEmail, usersMessage}: any): string {
    if (!usersName || !usersEmail || !usersMessage) return 'Please fill out all the fields above.';
    if (this.contactStatus === 'contacted') return 'already contacted';
    return null;
  }

}
