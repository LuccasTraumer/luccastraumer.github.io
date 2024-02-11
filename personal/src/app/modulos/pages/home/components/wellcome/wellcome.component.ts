import { Component, inject, OnDestroy, OnInit} from '@angular/core';
import {WelcomeSection} from '../../../../shared/models/welcome-section';
import {HomeService} from "../../main/service/home.service";
import {LoaderService} from "../../../../shared/loader/service/loader.service";
import {CommonModule, NgOptimizedImage} from "@angular/common";
import {LucideAngularModule} from "lucide-angular";
import {CloudinaryModule} from "@cloudinary/ng";
import LoaderComponent from "../../../../shared/loader/loader.component";
import {CloudinaryImage} from '@cloudinary/url-gen';
import {fill} from "@cloudinary/url-gen/actions/resize";
import {Subject, takeUntil} from "rxjs";
import {CdnImageService} from "../../../../shared/services/cdn-image.service";

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
export default class WellcomeComponent implements OnInit, OnDestroy {
  private cdnImageService = inject(CdnImageService);
  private ngDestroy$ = new Subject();
  welcomeData!: WelcomeSection;
  cdnImage!: CloudinaryImage;
  loaderService = inject(LoaderService);
  image = [
    'https://res.cloudinary.com/dfixlnbhd/image/upload/v1691356003/t_yi87h4.webp'
  ];
  homeService = inject(HomeService);

  ngOnInit(): void {
    this.loaderService.setStateLoader(true);

    if(this.homeService.getSectionStore().value.welcomeSection) {
      this.homeService.getSectionStore().pipe(takeUntil(this.ngDestroy$)).subscribe(value => {
        this.welcomeData = value.welcomeSection;
      });
    } else {
      this.homeService.getWellcomeSection().pipe(takeUntil(this.ngDestroy$)).subscribe({
        next: (value: any) => {
          this.welcomeData = value.welcomeSection;
          this.homeService.setWelcomeSection(this.welcomeData);
        },
        complete: () => this.loaderService.setStateLoader(false)
      })
    }
    this.cdnImage = this.cdnImageService.getCloudNary().image("profile_image.jpg").resize(fill());
  }

  ngOnDestroy(): void {
    this.ngDestroy$.next(true);
    this.ngDestroy$.complete();
  }
}
