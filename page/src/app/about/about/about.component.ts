import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Constantes } from '../../../utils/Constantes';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  public readonly LOCATION_ICON_BLACK = Constantes.PATH_ICON_BLACK_LOCATION;
  public readonly PROFILE_ICON_BLACK = Constantes.PATH_ICON_BLACK_PROFILE;
  public readonly SOUND_ICON_BLACK = Constantes.PATH_ICON_BLACK_SOUND;

  public readonly PROFILE_ICON_WHITE = Constantes.PATH_ICON_WHITE_PROFILE;
  public readonly LOCATION_ICON_WHITE = Constantes.PATH_ICON_WHITE_LOCATION;
  public readonly SOUND_ICON_WHITE = Constantes.PATH_ICON_WHITE_SOUND;

  @Input()
  isDarkMode: boolean;

  constructor() {
  }
}
