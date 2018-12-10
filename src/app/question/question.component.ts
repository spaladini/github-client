import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  @Input()
  topic: string;

  @Input()
  questionsArray: FormArray;

  questionForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.questionForm = new FormGroup({
      topic: new FormControl(),
      answer: new FormControl(),
      notes: new FormControl()
    });

    this.questionForm.get('topic').setValue(this.topic);
    this.questionForm.get('answer').setValidators(Validators.required);

    this.questionsArray.push(this.questionForm);
  }

  submit() {
    console.log('Domanda:', this.questionForm.value);
  }
}
