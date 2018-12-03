import { Injectable } from '@angular/core';

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

@Injectable({
  providedIn: 'root'
})
export class IssuesService {

  constructor() { }

  public retrieveIssues(): Array<any> {
    return issues as Array<any>;
  }
}
