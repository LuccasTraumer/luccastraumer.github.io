import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {CommonModule} from "@angular/common";
import ButtonComponent from "../../../../shared/button/button.component";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  imports: [
    CommonModule,
    ButtonComponent,
    ReactiveFormsModule
  ],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class ContactComponent implements OnInit {
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
    // TODO: send email.
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
