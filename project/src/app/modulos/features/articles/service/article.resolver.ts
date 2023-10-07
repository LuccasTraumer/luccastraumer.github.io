import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable } from "rxjs";
import {ArticlePost} from "../../../shared/models/article-post";
import {ArticleService} from "./article.service";

@Injectable({ providedIn: 'root' })
export class ArticleResolver implements Resolve<ArticlePost[]> {
  constructor(private service: ArticleService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<ArticlePost[]>|Promise<ArticlePost[]>|ArticlePost[] {
    return this.service.getArticles();
  }
}
