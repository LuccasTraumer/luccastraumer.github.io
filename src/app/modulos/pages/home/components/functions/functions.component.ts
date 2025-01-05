import {ChangeDetectionStrategy, Component, inject, OnDestroy, WritableSignal} from '@angular/core';
import {RoleSection} from '../../../../shared-ui/models/role-section';
import {HomeService} from "../../main/service/home.service";
import {LoaderService} from "../../../../shared-ui/loader/service/loader.service";
import {CommonModule} from "@angular/common";
import LoaderComponent from "../../../../shared-ui/loader/loader.component";
import {toSignal} from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-functions',
  templateUrl: './functions.component.html',
  standalone: true,
  imports: [
    CommonModule,
    LoaderComponent
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class FunctionsComponent implements OnDestroy {
  private loaderService = inject(LoaderService);
  protected homeSection = inject(HomeService);

  protected functions!: WritableSignal<RoleSection[]>;

  constructor() {
    this.loaderService.setStateLoader(true);
    // @ts-ignore
    this.functions = toSignal(this.homeSection.getRoleSection());
  }

  ngOnDestroy(): void {
    this.homeSection.setRoleSection(this.functions());
  }

}
