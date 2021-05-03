import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

import { RepositoryModel } from 'src/model/repository-model';
import { Constantes } from 'src/utils/Constantes';



@Injectable({
  providedIn: 'root'
})
export class ApiGithubService {

  private apiGithubRepositories = Constantes.apiGithubRepository;

  constructor(private http: HttpClient) { }

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
      errorMessage = error.error.message;
    } else {
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    alert(errorMessage);
    return throwError(errorMessage);
  }
}
