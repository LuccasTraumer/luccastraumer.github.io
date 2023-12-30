import PresentationArticleComponent from "./presentation-article/presentation-article.component";
import ViewArticleComponent from "./view-article/view-article.component";

export default [
  {
    path: ``,
    component: PresentationArticleComponent
  },
  {
    path: ':id',
    component: ViewArticleComponent,
  }
];

