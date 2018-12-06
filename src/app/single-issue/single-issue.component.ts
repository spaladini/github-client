import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Issue } from '../model/github.model';

@Component({
  selector: 'app-single-issue',
  templateUrl: './single-issue.component.html',
  styleUrls: ['./single-issue.component.css']
})
export class SingleIssueComponent implements OnInit {

  @Input()
  issue: Issue;

  @Output()
  removed: EventEmitter<Issue> = new EventEmitter<Issue>();

  constructor() { }

  ngOnInit() {
  }

  remove() {
    this.removed.emit(this.issue);
  }

}
