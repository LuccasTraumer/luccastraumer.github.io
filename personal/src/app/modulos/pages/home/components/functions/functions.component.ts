import {Component, inject, OnInit} from '@angular/core';
import { RoleSection } from '../../main/model/role-section';
import {HomeService} from "../../main/service/home.service";
import {LoaderService} from "../../../../shared/loader/service/loader.service";
import {CommonModule} from "@angular/common";
import LoaderComponent from "../../../../shared/loader/loader.component";

@Component({
  selector: 'app-functions',
  templateUrl: './functions.component.html',
  styleUrls: ['./functions.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    LoaderComponent
  ],
  providers: [
    LoaderService,
    HomeService
  ]
})
export default class FunctionsComponent implements OnInit {
  roleSection!: RoleSection[];
  private loaderService = inject(LoaderService);

  private homeSection = inject(HomeService);
  constructor() {
    this.loaderService.setStateLoader(true);
    this.homeSection.getRoleSection().subscribe({
      next: (value: any) => {
        this.roleSection = value.roleSection;
      },
      complete: () => this.loaderService.setStateLoader(false)
    })

  }

  ngOnInit(): void {
  }

}
