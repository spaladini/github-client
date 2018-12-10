import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../questions.service';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent implements OnInit {

  public topics: Array<string>;

  constructor(private questionsService: QuestionsService) { }

  ngOnInit() {
    this.topics = this.questionsService.getTopics();
    console.log(this.topics);
  }

}
