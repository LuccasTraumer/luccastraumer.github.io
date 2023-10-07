import { Component, Input } from '@angular/core';
import { WelcomeSection } from '../../features/view/main/model/welcome-section';

@Component({
  selector: 'app-wellcome',
  templateUrl: './wellcome.component.html',
  styleUrls: ['./wellcome.component.scss']
})
export class WellcomeComponent {
  defaultImage = 'https://res.cloudinary.com/dfixlnbhd/image/upload/v1691356003/t_yi87h4.webp';
  image = [
    'https://res.cloudinary.com/dfixlnbhd/image/upload/v1691356003/t_yi87h4.webp'
  ];

  @Input()
  welcomeData!: WelcomeSection;

  constructor() { }

}
