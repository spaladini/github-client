import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IssueListComponent } from './issue-list/issue-list.component';
import { SingleIssueComponent } from './single-issue/single-issue.component';
import { SingleIssueDetailsComponent } from './single-issue-details/single-issue-details.component';

@NgModule({
  declarations: [
    AppComponent,
    IssueListComponent,
    SingleIssueComponent,
    SingleIssueDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
