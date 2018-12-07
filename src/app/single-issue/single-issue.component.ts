import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Issue } from '../model/github.model';

@Component({
  selector: 'app-single-issue',
  templateUrl: './single-issue.component.html',
  styleUrls: ['./single-issue.component.css']
})
export class SingleIssueComponent implements OnInit {

  @Input()
  public title: string;

  @Input()
  public issue: Issue;

  @Output()
  public removed: EventEmitter<Issue> = new EventEmitter<Issue>();

  constructor() { }

  ngOnInit() {
  }

  removeMe(event: any) {
    console.log('click on: ', this.issue);
    console.log(event);
    this.removed.emit(this.issue);
  }

}
