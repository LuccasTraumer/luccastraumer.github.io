import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Skill } from '../../../models/skill';
import { Constantes } from '../../../utils/constantes';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  @Input()
  skills: Skill[] = [] ;

  public firstItem = 0;
  public secondItem = this.firstItem + 1;
  public thirdItem = this.secondItem+ 1;

  public readonly CONSTANTES = Constantes;

  constructor() { }

  ngOnInit(): void {

  }

  irParaProximo() {
    this.atualizarValores();
    console.warn(`Primeiro valor: ${this.firstItem}. Segundo valor: ${this.secondItem}. Terceiro Valor: ${this.thirdItem}`)
  }

  irParaAnterior() {
    this.atualizarValores();
  }

  atualizarValores(): void {
    if (this.firstItem === 0) {
      this.firstItem = 3;
      console.error(this.firstItem)
    } else if (this.firstItem === 3) {
      this.firstItem = 6;
    } else {
      this.firstItem = 0;
    }

    this.secondItem = this.firstItem + 1;
    this.thirdItem = this.secondItem + 1;
  }

  initAnimated(item: Skill): void {
    if (!item.completedProgress) {
      let circularProgress = document.querySelector(`.circular-progress-${item.descricao}`);
      let progressValue = document.querySelector(`.progress-value-${item.descricao}`);

      let progressStartValue = 0;
      let progressEndValue = item.porcentagem;
      let speed = 100;

      let progress = setInterval(() => {
        progressStartValue++;

        // @ts-ignore
        progressValue.textContent = `${progressStartValue}%`;
        // @ts-ignore
        circularProgress.style.background = `conic-gradient(#7d2ae8 ${progressStartValue * 3.6}deg, #ededed 0deg)`;

        if(progressStartValue == progressEndValue){
          clearInterval(progress);
        }

        item.completedProgress = true;
      }, speed);
    }
  }
}

