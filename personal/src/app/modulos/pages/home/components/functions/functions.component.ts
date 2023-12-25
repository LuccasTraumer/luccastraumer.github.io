import {Component, inject, Input, OnInit} from '@angular/core';
import { RoleSection } from '../../main/model/role-section';
import {HomeService} from "../../main/service/home.service";
import {HomeData} from "../../main/model/home-data";
import {LoaderService} from "../../../../shared/loader/service/loader.service";

@Component({
  selector: 'app-functions',
  templateUrl: './functions.component.html',
  styleUrls: ['./functions.component.scss']
})
export class FunctionsComponent implements OnInit {
  roleSection!: RoleSection[];
  private loaderService = inject(LoaderService);

  private homeSection = inject(HomeService);
  constructor() {
    this.loaderService.setStateLoader(true);
    this.homeSection.getRoleSection().subscribe({
      next: (value: HomeData) => {
        this.roleSection = value.roleSection;
      },
      complete: () => this.loaderService.setStateLoader(false)
    })

  }

  ngOnInit(): void {
  }

}
