import { Pipe, PipeTransform } from '@angular/core';
import {ArticlePost} from "../../../shared-ui/models/article-post";

@Pipe({
  name: 'descriptionArticle',
  standalone: true
})
export class DescriptionArticlePipe implements PipeTransform {
  transform(article: ArticlePost, ...args: unknown[]): unknown {
    if(article.description[0].content.length > 147) {
      return `${article.description[0].content.substring(0, 147)}...`;
    }
    return article.description;
  }

}
