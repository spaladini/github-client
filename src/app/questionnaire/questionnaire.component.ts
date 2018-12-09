import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../questions.service';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent implements OnInit {

  subjects: Array<string>;

  constructor(private questionsService: QuestionsService) { }

  ngOnInit() {
    this.subjects = this.questionsService.getAll();
    console.log(this.subjects);
  }

}
