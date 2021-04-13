import { Component, OnInit } from '@angular/core';
import { Constantes } from '../../../utils/Constantes';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  public readonly LOCATION_ICON = Constantes.PATH_ICON_BLACK_LOCATION;
  public readonly PROFILE_ICON = Constantes.PATH_ICON_BLACK_PROFILE;
  public readonly SOUND_ICON = Constantes.PATH_ICON_BLACK_SOUND;
  // public readonly SOUND_ICON = Constantes.PATH_ICON_BLACK_SOUND;

  constructor() { }

  ngOnInit(): void {
  }

}
