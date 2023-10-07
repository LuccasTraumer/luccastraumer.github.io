import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constantes } from '../../../../utils/constantes';
import {Observable} from "rxjs";
import {ArticlePost} from "../../../shared/models/article-post";

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private readonly CONSTANTES = Constantes;
  constructor(private http: HttpClient) { }

  getArticles(): Observable<ArticlePost[]> {
    // @ts-ignore
    return this.http.get(`${this.CONSTANTES.ROOT_PATH}/article`)
  }
}
