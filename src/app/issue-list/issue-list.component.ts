import { Component, OnInit } from '@angular/core';
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
  constructor(private issuesService: IssuesService) { }

  ngOnInit(): void {
    if (this.issuesService != null) {
      console.log('servizio iniettato correttamente');
    } else {
      console.log('nessun servizio!');
    }

    this.issues = this.issuesService.retrieveIssues();
    console.log(this.issues);

  }

  removeIssue(issue: Issue) {
    console.log(issue);
    const index = this.issues.findIndex(iss => iss.id === issue.id);
    this.issues.splice(index, 1);
  }
}
