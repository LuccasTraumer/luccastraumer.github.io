import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  isNameInputFocus: boolean = false;
  isEmailInputFocus: boolean = false;
  isMessageInputFocus: boolean = false;

  formGroup: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required, Validators.nullValidator]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required]],
  });

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }


  isFocus(event: any) {
    if (event.target.innerText.toLowerCase().includes('message')) {
      this.isMessageInputFocus = !this.isMessageInputFocus;
    } else if (event.target.innerText.toLowerCase().includes('email')) {
      this.isEmailInputFocus = !this.isEmailInputFocus;
    } else {
      this.isNameInputFocus = !this.isNameInputFocus;
    }
  }

  clickButton(event?: any) {
  }

  get email() {
    return this.formGroup.get('email');
  }

  get name() {
    return this.formGroup.get('name');
  }

  get message() {
    return this.formGroup.get('message');
  }
}
