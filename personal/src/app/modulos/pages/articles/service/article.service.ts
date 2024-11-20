import {inject, Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constantes } from '../../../utils/constantes';
import {Observable} from "rxjs";
import {ArticlePost} from "../../../shared-ui/models/article-post";

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private readonly CONSTANTES = Constantes;
  private http: HttpClient = inject(HttpClient);

  getArticles(): Observable<ArticlePost[]> {
    return this.http.get<ArticlePost[]>(`${this.CONSTANTES.ROOT_PATH}/article/all`)
  }

  getArticleByName(id: number): Observable<ArticlePost> {
    return this.http.get<ArticlePost>(`${this.CONSTANTES.ROOT_PATH}/article/${id}`);
  }
}
