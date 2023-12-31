import {Component, inject, OnInit} from '@angular/core';
import { WelcomeSection } from '../../main/model/welcome-section';
import {HomeService} from "../../main/service/home.service";
import {HomeData} from "../../main/model/home-data";
import {LoaderService} from "../../../../shared/loader/service/loader.service";

@Component({
  selector: 'app-wellcome',
  templateUrl: './wellcome.component.html',
  styleUrls: ['./wellcome.component.scss']
})
export class WellcomeComponent implements OnInit {
  defaultImage = 'https://res.cloudinary.com/dfixlnbhd/image/upload/v1691356003/t_yi87h4.webp';
  image = [
    'https://res.cloudinary.com/dfixlnbhd/image/upload/v1691356003/t_yi87h4.webp'
  ];
  homeService = inject(HomeService);
  loaderService = inject(LoaderService);

  welcomeData!: WelcomeSection;

  constructor() {
    this.loaderService.setStateLoader(true);
    this.homeService.getWellcomeSection().subscribe({
      next: (value: HomeData) => {
        this.welcomeData = value.welcomeSection;
      },
      complete: () => this.loaderService.setStateLoader(false)
    })

  }

  getURLImage(resolution: '320' | '480' | '800') {
    return `https://res.cloudinary.com/dfixlnbhd/image/upload/c_scale,w_${resolution}/v1691356003/t_yi87h4.png`
  }

  ngOnInit(): void {
  }
}
