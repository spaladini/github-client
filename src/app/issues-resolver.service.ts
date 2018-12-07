import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { IssuesService } from './issues.service';
import { Issue } from './model/github.model';

@Injectable({
  providedIn: 'root'
})
export class IssuesResolverService implements Resolve<Array<Issue>> {

  constructor(private issuesService: IssuesService) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Array<Issue>> {
    return this.issuesService.retrieveIssuesFromWeb();
  }
}
