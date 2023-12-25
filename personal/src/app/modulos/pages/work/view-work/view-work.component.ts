import {Component, inject, OnInit} from '@angular/core';
import { WorkService } from '../service/work.service';
import {CommonModule} from "@angular/common";
import {SharedModule} from "../../../shared/shared.module";
import {ComponentsModule} from "../../home/components/components.module";
import {HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-home-work',
  templateUrl: './view-work.component.html',
  styleUrls: ['./view-work.component.scss'],  standalone: true,
  imports: [
    CommonModule,
    SharedModule,
    ComponentsModule,
    HttpClientModule
  ],
  providers: [WorkService]
})
export default class ViewWorkComponent implements OnInit {
  private workService: WorkService = inject(WorkService);
  work!: Work;

  ngOnInit(): void {
    this.workService.getWorkData().subscribe({
      next: value => {
        this.work = value as Work;
      },
      error: err => console.error(err)
    })
  }
}

interface Work {
  title: string;
  images: string[];
  description: string;
}
