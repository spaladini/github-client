import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  @Input()
  label: string;

  constructor() { }

  questionForm = new FormGroup({
    label: new FormControl(),
    answer: new FormControl(),
    notes: new FormControl()
  });

  ngOnInit() {
    this.questionForm.get('label').setValue(this.label);
    this.questionForm.get('answer').setValidators(Validators.required);
    this.questionForm.get('answer').valueChanges.subscribe(v => {
      console.log(v);
      if (v === 'KO' || v === 'ND') {
      }
    });
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log(this.questionForm.value);
  }

  updateNotes() {
    this.questionForm.patchValue({
      notes: 'Niente da segnalare!'
    });
  }

  print(p: any) {
    console.log(p);
  }

}
