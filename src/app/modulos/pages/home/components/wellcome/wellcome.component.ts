import {
  ChangeDetectionStrategy,
  Component,
  inject, OnDestroy,
  WritableSignal
} from '@angular/core';
import {HomeService} from "../../main/service/home.service";
import {LoaderService} from "../../../../shared-ui/loader/service/loader.service";
import {CommonModule, NgOptimizedImage} from "@angular/common";
import {LucideAngularModule} from "lucide-angular";
import LoaderComponent from "../../../../shared-ui/loader/loader.component";
import {IconeComponent} from "./icone/icone.component";
import {WelcomeSection} from "../../../../shared-ui/models/welcome-section";
import {toSignal} from "@angular/core/rxjs-interop";

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
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class WellcomeComponent implements OnDestroy {
  protected welcomeSection!: WritableSignal<WelcomeSection>;
  protected image = [
    'https://res.cloudinary.com/dfixlnbhd/image/upload/v1691356003/t_yi87h4.webp'
  ];
  protected imageLoaded = false;

  protected homeService = inject(HomeService);
  protected loaderService = inject(LoaderService);

  constructor() {
    this.loaderService.setStateLoader(true);

    // @ts-ignore
    this.welcomeSection = toSignal(this.homeService.getWellcomeSection());
  }

  ngOnDestroy() {
    this.homeService.setWelcomeSection(this.welcomeSection());
  }

  onImageLoad() {
    this.imageLoaded = true;
  }
}
