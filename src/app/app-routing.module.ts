import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IssueListComponent } from './issue-list/issue-list.component';
import { IssuesResolverService } from './issues-resolver.service';
import { NewIssueComponent } from './new-issue/new-issue.component';
import { SingleIssueDetailsComponent } from './single-issue-details/single-issue-details.component';

const routes: Routes = [
  {
    path: 'issue-list',
    component: IssueListComponent,
    resolve: {
      resolvedIssueList: IssuesResolverService
    }
  },
  {
    path: 'issue-details/:number',
    component: SingleIssueDetailsComponent
  },
  {
    path: 'new-issue',
    component: NewIssueComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
