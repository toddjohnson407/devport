import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import emailjs from 'emailjs-com';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  /** Form group for contact info */
  contactForm: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {
    this.contactForm = this.fb.group({
      name: [''],
      email: [''],
      message: [''],
    })
  }

  ngOnInit() {
  }

  sendEmail() {
    console.log('sent');

    let emailData = {
      usersName: this.contactForm.get('name').value,
      usersEmail: this.contactForm.get('email').value,
      usersMessage: this.contactForm.get('message').value,
    }

    emailjs.send('default_service', 'inquiry_template', emailData, 'user_jNFuefEFTbVTttVQlDw20').then(res => console.log('yay', res)).catch(err => console.log('err', err))

  }

}
