import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IssuesService } from '../issues.service';
import { Issue } from '../model/github.model';

@Component({
  selector: 'app-single-issue-details',
  templateUrl: './single-issue-details.component.html',
  styleUrls: ['./single-issue-details.component.css']
})
export class SingleIssueDetailsComponent implements OnInit {

  issue: Issue;

  constructor(
    private issuesService: IssuesService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    const issueNumberAsString = this.route.snapshot.params['number'];
    // tslint:disable-next-line:radix
    const issueNumber = parseInt(issueNumberAsString);
    console.log(issueNumber);
    this.issue = this.issuesService.retrieveSingleIssue(issueNumber);
    console.log(this.issue);
  }

  goBack() {
    this.router.navigateByUrl('issue-list');
  }

}
