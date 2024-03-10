import {AfterViewInit, ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {CommonModule} from "@angular/common";
import ButtonComponent from "../button/button.component";

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
export default class ContactComponent implements AfterViewInit {
  private formBuilder: FormBuilder = inject(FormBuilder);
  isNameInputFocus: boolean | undefined = false;
  isEmailInputFocus: boolean | undefined = false;
  isMessageInputFocus: boolean | undefined = false;
  formGroup: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required, Validators.nullValidator]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(15)]],
  });

  ngAfterViewInit(): void {
    this.isNameInputFocus = this.formGroup.get('name')?.touched;
    this.isEmailInputFocus = this.formGroup.get('email')?.touched;
    this.isMessageInputFocus = this.formGroup.get('message')?.touched;
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
