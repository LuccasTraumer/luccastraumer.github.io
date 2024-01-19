import {Component, inject, OnInit} from '@angular/core';
import { WelcomeSection } from '../../main/model/welcome-section';
import {HomeService} from "../../main/service/home.service";
import {LoaderService} from "../../../../shared/loader/service/loader.service";
import {CommonModule, NgOptimizedImage} from "@angular/common";
import {LucideAngularModule} from "lucide-angular";
import {CloudinaryModule} from "@cloudinary/ng";
import LoaderComponent from "../../../../shared/loader/loader.component";

@Component({
  selector: 'app-wellcome',
  templateUrl: './wellcome.component.html',
  styleUrls: ['./wellcome.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    LoaderComponent,
    LucideAngularModule,
    CloudinaryModule,
    NgOptimizedImage
  ],
  providers: [
    HomeService,
    LoaderService
  ]
})
export default class WellcomeComponent implements OnInit {
  image = [
    'https://res.cloudinary.com/dfixlnbhd/image/upload/v1691356003/t_yi87h4.webp'
  ];
  homeService = inject(HomeService);
  loaderService = inject(LoaderService);

  welcomeData!: WelcomeSection;

  constructor() {
    this.loaderService.setStateLoader(true);
    // TODO: Incluir um unsubscribe aqui
    this.homeService.getWellcomeSection().subscribe({
      next: (value: any) => {
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
