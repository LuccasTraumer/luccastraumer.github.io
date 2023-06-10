import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  isNameInputFocus: boolean = false;
  isEmailInputFocus: boolean = false;
  isMessageInputFocus: boolean = false;

  constructor() { }

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
    console.log(event.target.innerText);
  }

  clickButton(event: any) {

  }
}
