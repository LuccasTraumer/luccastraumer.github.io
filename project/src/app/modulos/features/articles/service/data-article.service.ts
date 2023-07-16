import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataArticleService {
  private dataArticle: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor() { }

  getDataValue() {
    return this.dataArticle.getValue();
  }

  setValueData(value: any) {
    this.dataArticle.next(value);
  }
}
