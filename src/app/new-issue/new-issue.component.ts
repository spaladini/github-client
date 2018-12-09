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
    console.log(this.users);
  }

  get diagnostic() { return JSON.stringify(this.issue); }

  submitNewIssue() {
    console.log('New issue successfully created!', this.issue);
  }

  printInConsole(toPrint: any) {
    console.log(toPrint);
  }

}
