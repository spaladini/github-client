import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IssueListComponent } from './issue-list/issue-list.component';
import { NewIssueComponent } from './new-issue/new-issue.component';
import { QuestionComponent } from './question/question.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { SingleIssueDetailsComponent } from './single-issue-details/single-issue-details.component';
import { SingleIssueComponent } from './single-issue/single-issue.component';

@NgModule({
  declarations: [
    AppComponent,
    IssueListComponent,
    SingleIssueComponent,
    SingleIssueDetailsComponent,
    NewIssueComponent,
    QuestionnaireComponent,
    QuestionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
