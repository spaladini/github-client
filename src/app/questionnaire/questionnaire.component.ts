import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { QuestionsService } from '../questions.service';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent implements OnInit {

  public topics: Array<string>;

  public questionnaireForm: FormGroup = new FormGroup({
    questions: this.fb.array([])
  });

  constructor(
    private questionsService: QuestionsService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.topics = this.questionsService.getTopics();
    console.log(this.topics);
  }

  submit() {
    console.log('Questionario completo:', this.questionnaireForm.value);
  }

}
