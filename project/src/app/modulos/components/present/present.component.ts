import { Component } from '@angular/core';

@Component({
  selector: 'app-present',
  templateUrl: './present.component.html',
  styleUrls: ['./present.component.scss']
})
export class PresentComponent {

  readonly imagePath = 'https://res.cloudinary.com/dfixlnbhd/image/upload/v1685057915/IMG_2550-png_kxhnwf.png';
  constructor() { }

  goContact() {
    window.location.href = '#contact'
  }
}
