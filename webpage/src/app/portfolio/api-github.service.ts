import { HttpClient, HttpClientModule, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Constantes } from '../../Utils/Constantes';
import { RepositoryModel } from './repository-model';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiGithubService {

  private readonly apiGithubOwner = Constantes.apiGithubOwner;
  private apiGithubRepositories = Constantes.apiGithubRepository;
  private repositories: Array<RepositoryModel> = [];

  private httpOptions;

  constructor(private http: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
  }

  getRepository(listaRep: string[]): Observable<RepositoryModel[]> {
     return this.makeRequestRepository();
  }

  private makeRequestRepository(): Observable<RepositoryModel[]> {
    return this.http.get<RepositoryModel[]>(this.apiGithubRepositories)
    .pipe(
      retry(2),
      catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    alert(errorMessage);
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
