import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  @Input()
  topic: string;

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
  }

  submit() {
    console.log('Domanda:', this.questionForm.value);
  }
}
