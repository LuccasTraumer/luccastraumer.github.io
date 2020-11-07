import { Constantes } from './../../../../Utils/Constantes';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-hobbies',
  templateUrl: './list-hobbies.component.html',
  styleUrls: ['./list-hobbies.component.css']
})
export class ListHobbiesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  public getIconApple() {
    return Constantes.iconAppleHobbieList;
  }

  public getIconCinematic() {
    return Constantes.iconCinematicHobbieList;
  }

  public getIconCoffe() {
    return Constantes.iconCoffeHobbieList;
  }

  public getIconControleGame() {
    return Constantes.iconControllerGameHobbieList;
  }

  public getIconHeadphone() {
    return Constantes.iconHeadphoneHobbieList;
  }

  public  getIconMoney() {
    return Constantes.iconMoneyHobbieList;
  }

  public getIconTravel() {
    return Constantes.iconTravelHobbieList;
  }


}
