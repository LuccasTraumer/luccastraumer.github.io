import {Component, inject} from '@angular/core';
import {CommonModule} from "@angular/common";
import {SharedModule} from "../../../shared/shared.module";
import {ComponentsModule} from "../../home/components/components.module";
import {HttpClientModule} from "@angular/common/http";
import CardComponent from "../../../shared/card/card.component";
import {Router} from "@angular/router";
import {SkeltonComponent} from "../../../shared/skelton/skelton.component";

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  standalone: true,
  imports: [
    CommonModule,
    SharedModule,
    ComponentsModule,
    HttpClientModule,
    CardComponent,
    SkeltonComponent
  ],
  styleUrls: ['./work.component.scss']
})
export default class WorkComponent {
  linkImage: string = 'https://logos-download.com/wp-content/uploads/2018/01/CIT_logo_RGB.png';
  private router: Router = inject(Router);
  constructor() { }

  goToWork(event: string) {
    this.router.navigateByUrl(`/works/${event}`)
  }
}
