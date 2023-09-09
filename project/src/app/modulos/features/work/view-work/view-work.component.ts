import { Component, OnInit } from '@angular/core';
import { WorkService } from '../service/work.service';

@Component({
  selector: 'app-view-work',
  templateUrl: './view-work.component.html',
  styleUrls: ['./view-work.component.scss']
})
export class ViewWorkComponent implements OnInit {
  work!: Work;

  constructor(private workService: WorkService) { }

  ngOnInit(): void {
    this.workService.getWorkData().subscribe({
      next: value => {
        this.work = value as Work;
        console.warn(value);
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
