import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IssueListComponent } from './issue-list/issue-list.component';
import { SingleIssueDetailsComponent } from './single-issue-details/single-issue-details.component';

const routes: Routes = [
  { path: 'issue-list', component: IssueListComponent },
  { path: 'issue/:number', component: SingleIssueDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
