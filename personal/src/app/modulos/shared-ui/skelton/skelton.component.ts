import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-skelton',
  standalone: true,
  imports: [],
  templateUrl: './skelton.component.html',
  styleUrl: './skelton.component.scss'
})
export class SkeltonComponent implements OnInit {
  @Input({ required: true})
  typeSkeleton: `home` | `card` | `article` = `home`;
  ngOnInit(): void {
    // // @ts-ignore
    // document.querySelector('button').addEventListener('click', function() {
    // // @ts-ignore
    //   document.querySelector('.demo').innerHTML = '<h1>Injected content.</h1>';
    // })
  }


}
