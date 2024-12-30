import {ChangeDetectionStrategy, Component, inject, OnDestroy, OnInit} from '@angular/core';
import {WelcomeSection} from '../../../../shared-ui/models/welcome-section';
import {HomeService} from "../../main/service/home.service";
import {LoaderService} from "../../../../shared-ui/loader/service/loader.service";
import {CommonModule, NgOptimizedImage} from "@angular/common";
import {LucideAngularModule} from "lucide-angular";
import LoaderComponent from "../../../../shared-ui/loader/loader.component";
import {Subject, takeUntil} from "rxjs";
import {IconeComponent} from "./icone/icone.component";

@Component({
  selector: 'app-wellcome',
  templateUrl: './wellcome.component.html',
  styleUrls: ['./wellcome.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    LoaderComponent,
    LucideAngularModule,
    NgOptimizedImage,
    IconeComponent
  ],
  providers: [
    HomeService,
    LoaderService
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class WellcomeComponent implements OnInit, OnDestroy {
  private ngDestroy$ = new Subject();
  welcomeData: WelcomeSection | null = null;
  loaderService = inject(LoaderService);
  image = [
    'https://res.cloudinary.com/dfixlnbhd/image/upload/v1691356003/t_yi87h4.webp'
  ];
  homeService = inject(HomeService);
  imageLoaded = false;

  ngOnInit(): void {
    this.loaderService.setStateLoader(true);

    if (this.homeService.getSectionStore().value?.welcomeSection) {
      this.homeService.getSectionStore().pipe(takeUntil(this.ngDestroy$)).subscribe(value => {
        this.welcomeData = value.welcomeSection ?? {};
      });
    } else {
      this.homeService.getWellcomeSection().pipe(takeUntil(this.ngDestroy$)).subscribe({
        next: (value: any) => {
          this.welcomeData = value.welcomeSection ?? {};
          this.welcomeData ? this.homeService.setWelcomeSection(this.welcomeData) : {};
        },
        complete: () => this.loaderService.setStateLoader(false)
      });
    }
  }

  ngOnDestroy(): void {
    this.ngDestroy$.next(true);
    this.ngDestroy$.complete();
  }

  onImageLoad() {
    this.imageLoaded = true;
  }
}
