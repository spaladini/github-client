import { Component, OnInit } from '@angular/core';
import { Issue, User } from '../model/github.model';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-new-issue',
  templateUrl: './new-issue.component.html',
  styleUrls: ['./new-issue.component.css']
})
export class NewIssueComponent implements OnInit {

  issue: Issue = new Issue();

  users: Array<User>;

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.users = this.usersService.getAll();
  }

  submitIssue() {
    console.log('New Issue created!', this.issue);
  }

  print(toPrint: any) {
    console.log(toPrint);
  }
}
