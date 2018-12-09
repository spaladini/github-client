import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IssuesService } from '../issues.service';
import { Issue } from '../model/github.model';

@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.css']
})
export class IssueListComponent implements OnInit {

  public issues: Array<any>;

  public issueToRead = '386443637';

  /*
  private issuesService: IssuesService;
  constructor(issuesService: IssuesService) {
    this.issuesService = issuesService;
  }
  */
  constructor(
    private issuesService: IssuesService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    if (this.issuesService != null) {
      console.log('servizio iniettato correttamente');
    } else {
      console.log('nessun servizio!');
    }

    // this.issues = this.issuesService.retrieveIssues();
    // console.log(this.issues);
    this.issues = this.route.snapshot.data.resolvedIssueList;
  }

  removeIssue(issue: Issue): void {
    console.log('Event caught!', issue);
    const index = this.issues.findIndex((iss: Issue) => {
      return iss.id === issue.id;
    });

    this.issues.splice(index, 1);
  }


}
