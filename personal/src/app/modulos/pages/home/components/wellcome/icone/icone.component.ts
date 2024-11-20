import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-icone',
  standalone: true,
  imports: [],
  templateUrl: './icone.component.html',
  styles: `
    svg {
      position: absolute;
      z-index: 1;
      width: 80vw;
      @media screen and (min-width: 768px) {
        width: 35vw;
        height: auto;
        right: 20%;
      }

      @media screen and (min-width: 1024px) {
        height: 100%;
        position: absolute;
        width: 85%;
        right: 55%;
        z-index: -1;
        top: 0;
      }
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.Emulated
})
export class IconeComponent {

}
