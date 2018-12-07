import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IssuesService } from '../issues.service';
import { Issue } from '../model/github.model';

@Component({
  selector: 'app-single-issue-details',
  templateUrl: './single-issue-details.component.html',
  styleUrls: ['./single-issue-details.component.css']
})
export class SingleIssueDetailsComponent implements OnInit {

  public issue: Issue;

  constructor(
    private route: ActivatedRoute,
    private issuesService: IssuesService
  ) { }

  ngOnInit() {
    const numberAsString = this.route.snapshot.params['number'];
    console.log('issue number ' + numberAsString);
    // tslint:disable-next-line:radix
    const realNumber = parseInt(numberAsString);
    const issue = this.issuesService.retrieveSingleIssue(realNumber);
    console.log(issue);

    this.issue = issue;
  }

}
