import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { QuestionsService } from '../questions.service';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent implements OnInit {

  topics: Array<string>;

  questionnaireForm = new FormGroup({
    questions: this.fb.array([])
  });

  constructor(
    private questionsService: QuestionsService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.topics = this.questionsService.getAll();
    console.log(this.topics);
  }

  print(p: any) {
    console.log(p);
  }

  onSubmit() {
    console.log(this.questionnaireForm.value);
  }

}
