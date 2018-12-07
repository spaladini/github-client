import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';


const issues = [
  {
    'id': 386443637,
    'number': 1,
    'title': 'Application is empty!',
    'user': {
      'login': 'spaladini',
      'id': 5888794
    },
    'state': 'open',
    'assignee': null,
    'created_at': '2018-12-01T10:00:29Z',
    'body': 'Only one commit!'
  },
  {
    'id': 386443638,
    'number': 2,
    'title': 'Application doesn\'t work!',
    'user': {
      'login': 'agea',
      'id': 5888794
    },
    'state': 'open',
    'assignee': null,
    'created_at': '2018-12-01T10:05:29Z',
    'body': 'I can\'t do anything!'
  },
  {
    'id': 386443639,
    'number': 3,
    'title': 'Login doesn\'t work!',
    'user': {
      'login': 'marcofabbri',
      'id': 5888794
    },
    'state': 'open',
    'assignee': null,
    'created_at': '2018-12-01T10:05:29Z',
    'body': 'Login page not found'
  }
];

const service_url = 'https://api.github.com/repos/spaladini/github-client/issues';


@Injectable({
  providedIn: 'root'
})
export class IssuesService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public retrieveIssues(): Array<any> {
    return issues as Array<any>;
  }

  public retrieveIssuesFromWeb(): Observable<Array<any>> {
    // TODO: usare httpClient!!!
    return of(issues);
  }

  public retrieveSingleIssue(issueNumber: number): any {
    /*
    return issues.find(iss => {
      return iss.number === issueNumber;
    });
    */
    return issues.find(iss => iss.number === issueNumber);
  }


}
